import { allProduct } from "./mockData.js";

const getData = (key) => JSON.parse(localStorage.getItem(key));
const setData = (key, val) => localStorage.setItem(key, JSON.stringify(val));

function initializeProducts() {
  let products = getData("products");

  // Nếu chưa có dữ liệu HOẶC dữ liệu bị lỗi
  if (!products || products.length === 0 || !products[0].quantity) {
    console.warn("⚠️ LocalStorage trống hoặc dữ liệu cũ, đang khởi tạo lại...");

    const productsWithStock = allProduct.map((p) => ({
      id: p.id,
      name: p.name.trim(), // ✅ TRIM để loại bỏ khoảng trắng thừa
      category: p.category,
      img: p.imgSrc,
      imgSrc: p.imgSrc, // Giữ cả 2 để tương thích
      brand: p.brand || extractBrand(p.name),
      price: p.price,
      costPrice: Math.floor(p.price * 0.7),
      quantity: p.quantity || 100,
      lowStockThreshold: p.lowStockThreshold || 10,
      status: p.status || "Đang bán",
      profitMargin: 0.3,
      orginalPrice: p.orginalPrice,
      discountPercent: p.discountPercent,
      currentPrice: p.currentPrice,
      priceDiscountText: p.priceDiscountText,
    }));

    setData("products", productsWithStock);
    console.log(
      "✅ Đã khởi tạo",
      productsWithStock.length,
      "sản phẩm vào localStorage!"
    );
  } else {
    console.log("✅ LocalStorage đã có", products.length, "sản phẩm");
  }
}

// Hàm tự động tách brand từ tên
function extractBrand(productName) {
  const brands = [
    "SteelSeries",
    "Leopold",
    "Corsair",
    "Razer",
    "AULA",
    "HyperX",
    "ASUS",
    "Cooler Master",
    "Ducky",
    "Varmilo",
    "Logitech",
    "Sony",
  ];
  for (const brand of brands) {
    if (productName.includes(brand)) return brand;
  }
  return "Generic";
}

// Chạy ngay
initializeProducts();
