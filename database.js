import { allProduct } from "./mockData.js";

const getData = (key) => JSON.parse(localStorage.getItem(key));
const setData = (key, val) => localStorage.setItem(key, JSON.stringify(val));

// Hàm khởi tạo sản phẩm từ mockData vào localStorage
function initializeProducts() {
  let products = getData("products");

  // Nếu chưa có dữ liệu, nạp từ mockData
  if (!products || products.length === 0) {
    // Chuyển đổi format từ mockData sang format mới với stock
    const productsWithStock = allProduct.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category,
      img: p.imgSrc,
      brand: p.brand || "Generic",
      price: p.price,
      costPrice: p.price * 0.7, // Giá vốn = 70% giá bán
      quantity: 100, // Tồn kho ban đầu
      lowStockThreshold: 10, // Ngưỡng cảnh báo hết hàng
      status: "Đang bán",
      profitMargin: 0.3,
      orginalPrice: p.orginalPrice,
      discountPercent: p.discountPercent,
      currentPrice: p.currentPrice,
      priceDiscountText: p.priceDiscountText,
    }));

    setData("products", productsWithStock);
    console.log("✅ Đã khởi tạo sản phẩm vào localStorage!");
  }
}

// Chạy khi trang load
initializeProducts();
