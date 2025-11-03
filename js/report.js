
const getData = key => JSON.parse(localStorage.getItem(key));

function navigateSPA(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => (p.style.display = "none"));

  const currentPage = document.getElementById(pageId);
  if (currentPage) currentPage.style.display = "block";

  // Khi vào trang Reports → render dữ liệu
  if (pageId === "reports") {
    renderReports();
  }
}
// ======================= DỮ LIỆU MẪU =======================
const products = [
  {
    name: "Laptop Asus Vivobook",
    category: "Laptop",
    price: 18000000,
    sold: 120,
  },
  {
    name: "Chuột Logitech G Pro",
    category: "Phụ kiện",
    price: 2000000,
    sold: 200,
  },
  {
    name: "Tai nghe AirPods Pro",
    category: "Phụ kiện",
    price: 5000000,
    sold: 150,
  },
  {
    name: "Bàn phím cơ Keychron K6",
    category: "Phụ kiện",
    price: 2500000,
    sold: 140,
  },
  {
    name: "Apple Watch Series 9",
    category: "Đồng hồ",
    price: 12000000,
    sold: 110,
  },
];

// Giả lập dữ liệu khách hàng
const customers = [
  { name: "Nguyễn Văn A", purchases: 25 },
  { name: "Trần Thị B", purchases: 40 },
  { name: "Lê Minh C", purchases: 15 },
  { name: "Phạm Hồng D", purchases: 50 },
  { name: "Hoàng Gia E", purchases: 32 },
];

// ======================= HÀM HIỂN THỊ BÁO CÁO =======================
function renderReports() {

  const allProducts = getData("products") || [];
  const allOrders = getData("orders") || [];
  //Tính toán doanh số (sold) và doanh thu (revenue) từ 'allOrders'
  const productStatsMap = {};
  allProducts.forEach(p => {
      //Khởi tạo map với dữ liệu từ kho sản phẩm
      productStatsMap[p.id] = { 
          ...p, 
          sold: 0, 
          revenue: 0,
          //Chuyển đổi giá về số nếu cần (nếu dữ liệu gốc là string)
          price: parseFloat(p.price) || 0 
      };
  });
  allOrders.forEach(order => {
      // Chỉ tính doanh thu cho các đơn hàng "Đã giao"
      const isSold = order.status === "Đã giao";
      if (isSold && productStatsMap[order.productId]) {
          productStatsMap[order.productId].sold += (order.quantity || 0);
          productStatsMap[order.productId].revenue += (order.total || 0);
      }
  });
  //Tính doanh thu từng sản phẩm
  const productStats = Object.values(productStatsMap);

  const customerMap = {};
  allOrders.forEach(order => {
      const customerName = order.user || "Khách vãng lai";
      // Đếm số đơn hàng
      customerMap[customerName] = (customerMap[customerName] || 0) + 1; 
  });
  const customers = Object.keys(customerMap).map(name => ({
      name: name,
      purchases: customerMap[name]
  }));

  //Tổng doanh thu
  const totalRevenue = productStats.reduce((sum, p) => sum + p.revenue, 0);

  //Sản phẩm bán chạy nhất
  const bestProduct = productStats.length > 0 ? productStats.reduce((max, p) =>
    p.sold > max.sold ? p : max
  ) : { name: "N/A", sold: 0 }; // Tránh lỗi nếu không có SP

  //Khách hàng mua nhiều nhất
  const bestCustomer = customers.length > 0 ? customers.reduce((max, c) =>
    c.purchases > max.purchases ? c : max
  ) : { name: "N/A", purchases: 0 }; // Tránh lỗi nếu không có KH

  //Cập nhật phần doanh thu + thống kê
  document.getElementById("total-revenue").innerHTML = `
    <h3 style="margin-top: 10px; color:#222;">Tổng doanh thu: 
      <span style="color:darkgreen">${totalRevenue.toLocaleString()} VNĐ</span>
    </h3>
    <p><strong>💻 Sản phẩm bán chạy nhất:</strong> ${bestProduct.name} (${
    bestProduct.sold
  } chiếc)</p>
    <p><strong>👤 Khách hàng mua nhiều nhất:</strong> ${bestCustomer.name} (${
    bestCustomer.purchases
  } đơn hàng)</p>
  `;

  //Tạo bảng top sản phẩm
  const topTable = `
    <h3>Top 5 sản phẩm bán chạy</h3>
    <table border="1" cellpadding="8" cellspacing="0" 
      style="width:100%; border-collapse:collapse; text-align:center;">
      <thead style="background:#f2f2f2">
        <tr>
          <th>Tên sản phẩm</th>
          <th>Danh mục</th>
          <th>Giá (VNĐ)</th>
          <th>Đã bán</th>
          <th>Doanh thu (VNĐ)</th>
        </tr>
      </thead>
      <tbody>
        ${productStats
          .map(
            (p) => `
          <tr>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${p.price.toLocaleString()}</td>
            <td>${p.sold}</td>
            <td>${p.revenue.toLocaleString()}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
  document.getElementById("top-products-table").innerHTML = topTable;

  //Dữ liệu cho biểu đồ
  const salesLabels = productStats.map((p) => p.name);
  const salesData = productStats.map((p) => p.revenue);

  const categoryMap = {};
  productStats.forEach((p) => {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + p.revenue;
  });
  const categoryLabels = Object.keys(categoryMap);
  const categoryData = Object.values(categoryMap);

  //Hủy biểu đồ cũ nếu có
  if (window.salesChartInstance) window.salesChartInstance.destroy();
  if (window.categoryChartInstance) window.categoryChartInstance.destroy();

  //Vẽ biểu đồ doanh thu theo sản phẩm
  const ctx1 = document.getElementById("salesChart").getContext("2d");
  window.salesChartInstance = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: salesLabels,
      datasets: [
        {
          label: "Doanh thu (VNĐ)",
          data: salesData,
          backgroundColor: [
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderColor: "#333",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (v) => v.toLocaleString() },
        },
      },
    },
  });

  //Vẽ biểu đồ tỉ lệ doanh thu theo danh mục
  const ctx2 = document.getElementById("categoryChart").getContext("2d");
  window.categoryChartInstance = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: categoryLabels,
      datasets: [
        {
          data: categoryData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" } },
    },
  });
}
// ======================= XUẤT EXCEL =======================
document.addEventListener("click", function (e) {
  if (e.target.id === "exportExcelBtn" || e.target.closest("#exportExcelBtn")) {
    exportToExcel();
  }
});

function exportToExcel() {
  // Lấy bảng dữ liệu
  const table = document.querySelector("#top-products-table table");
  if (!table) return alert("Không có dữ liệu để xuất!");

  // Tạo workbook và worksheet từ bảng
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.table_to_sheet(table);

  // Thêm vào workbook
  XLSX.utils.book_append_sheet(wb, ws, "Doanh thu");

  // Xuất file Excel
  XLSX.writeFile(wb, "BaoCaoDoanhThu.xlsx");
}
