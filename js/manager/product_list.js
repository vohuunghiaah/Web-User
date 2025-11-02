
import { products as initialProductData} from '../data/products.js';

const getData = key => JSON.parse(localStorage.getItem(key));
const setData = (key, val) => localStorage.setItem(key, JSON.stringify(val));

function migrateProductData() {
  console.log("Kiểm tra và nâng cấp dữ liệu sản phẩm...");
  let products = getData("products");
  if (!products || products.length === 0) {
      // Nếu không có sản phẩm, nạp từ file data
      if (initialProductData) {
          setData("products", initialProductData);
          products = initialProductData;
          console.log("Nạp sản phẩm ban đầu.");
      } else {
          return;
      }
  }

  const firstProduct = products[0];
  let needsUpdate = false;

  if (typeof firstProduct.price === 'string') {
    needsUpdate = true;
    console.warn("Phát hiện dữ liệu giá (string), đang nâng cấp...");
  }
  if (typeof firstProduct.lowStockThreshold === 'undefined') {
    needsUpdate = true;
    console.warn("Phát hiện thiếu (lowStockThreshold), đang nâng cấp...");
  }

  if (needsUpdate) {
    products.forEach(p => {
      // Chỉ nâng cấp nếu là string
      if (typeof p.price === 'string') {
        p.price = parseFloat(String(p.price).replace(/[.,VNĐ ]/g, '')) || 0;
        p.quantity = parseInt(p.quantity, 10) || 0;
        p.costPrice = p.costPrice || 0;
        p.profitMargin = p.profitMargin || 0.2;
      }
      // Thêm trường mới nếu thiếu
      if (typeof p.lowStockThreshold === 'undefined') {
        p.lowStockThreshold = 10; // Mặc định là 10
      }
    });
    setData("products", products);
    console.log("NÂNG CẤP DỮ LIỆU THÀNH CÔNG!");
  } else {
    console.log("Dữ liệu đã ở phiên bản mới.");
  }
}

// Chạy hàm này ngay lập tức
migrateProductData();


export function initProductPage(){
  const overlay = document.getElementById('overlay');
  const addProductBtn = document.getElementById('add-product-btn');
  const cancelBtn = document.getElementById('cancelBtn');
  const productList = document.getElementById('productList');
  const form = document.getElementById('productForm');
  const search = document.getElementById('search-product');
  let editIndex = null;
  
  let currentProducts = getData("products");

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };
  
  function renderProducts(list){
      productList.innerHTML = "";
      list.forEach((p, index) => {
          const item = document.createElement("div");
          item.className = "product-item";
          item.style.gridTemplateColumns = "0.5fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr";
          
          item.innerHTML = `
              <div>#${p.id}</div>
              <img src = "${p.img || 'https://via.placeholder.com/80'}" alt="${p.name}">
              <div>${p.name}</div>
              <div>${p.brand}</div>
              <div>${p.status}</div>
              <div>${formatCurrency(p.costPrice || 0)}</div>
              <div>${(p.profitMargin || 0) * 100}%</div>
              <div>${formatCurrency(p.price || 0)}</div>
              `;
          
          item.style.cursor = "pointer";
          item.onclick = () => editProduct(index); 
          
          productList.appendChild(item);
      });
  }

  function openForm(isEdit=false){
      overlay.style.display = "flex";
      document.getElementById("formTitle").textContent = isEdit ? "Sửa sản phẩm" : "Thêm sản phẩm";
  }

  function closeForm(){
      overlay.style.display = "none";
      form.reset();
      editIndex = null;
      document.getElementById("deleteBtn").style.display = 'none';
  }

  // Thêm nút Xóa vào form
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.id = 'deleteBtn';
  deleteBtn.textContent = 'Xóa Sản Phẩm';
  deleteBtn.className = 'button cancel-btn'; 
  deleteBtn.style.background = '#e74c3c'; 
  deleteBtn.style.display = 'none'; 
  form.querySelector('.form-buttons').appendChild(deleteBtn);
  
  deleteBtn.onclick = () => {
    if (editIndex === null) return;
    
    if (confirm(`Bạn có chắc muốn xóa sản phẩm "${currentProducts[editIndex].name}" không?`)) {
      currentProducts.splice(editIndex, 1);
      setData("products", currentProducts);
      renderProducts(currentProducts);
      closeForm();
    }
  };


  window.editProduct = function(index){
    const p = currentProducts[index];
    editIndex = index;
    openForm(true);
    
    document.getElementById("productId").value = p.id;
    document.getElementById("productId").disabled = true; 
    
    document.getElementById("productName").value = p.name;
    document.getElementById("productBrand").value = p.brand;
    document.getElementById("productStatus").value = p.status;
    document.getElementById("productProfitMargin").value = (p.profitMargin || 0) * 100;
    document.getElementById("productLowStock").value = p.lowStockThreshold || 10;
    document.getElementById("deleteBtn").style.display = 'block';
  };
  
  form.onsubmit = (e) => {
    e.preventDefault();
    
    const marginValue = parseFloat(document.getElementById("productProfitMargin").value) || 0;
    const profitMargin = marginValue / 100;
    const lowStock = parseInt(document.getElementById("productLowStock").value) || 10;
    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value;
    const brand = document.getElementById("productBrand").value;
    const status = document.getElementById("productStatus").value;
    const imgFile = document.getElementById("productImage").files[0];

    if (editIndex !== null) {
      // --- SỬA SẢN PHẨM ---
      const productToUpdate = currentProducts[editIndex];
      productToUpdate.name = name;
      productToUpdate.brand = brand;
      productToUpdate.status = status;
      productToUpdate.profitMargin = profitMargin;
      productToUpdate.lowStockThreshold = lowStock;
      productToUpdate.price = (productToUpdate.costPrice || 0) * (1 + profitMargin);
      
      if (imgFile) {
        productToUpdate.img = URL.createObjectURL(imgFile);
      }
      
    } else {
      // --- THÊM SẢN PHẨM MỚI ---
      const isDuplicate = currentProducts.some(p => p.id === id);
      if (isDuplicate) {
        alert("Lỗi, ID sản phẩm này đã tồn tại. Vui lòng nhập ID khác!");
        return;
      }
      
      let imgURL = "https://via.placeholder.com/80"; 
      if (imgFile) {
        imgURL = URL.createObjectURL(imgFile);
      }

      const productData = {
        id, 
        name, 
        brand, 
        status,
        img: imgURL,
        profitMargin: profitMargin,
        lowStockThreshold: lowStock,
        costPrice: 0, 
        price: 0, 
        quantity: 0 
      };
      currentProducts.push(productData);
    }
    
    setData("products", currentProducts);
    closeForm();
    renderProducts(currentProducts);
    document.getElementById("productId").disabled = false; 
  };

  search.addEventListener("input", () => {
      const keyword = search.value.toLowerCase().trim();
      const filtered = currentProducts.filter(p => 
          p.name.toLowerCase().includes(keyword) || 
          p.brand.toLowerCase().includes(keyword) ||
          p.id.toLowerCase().includes(keyword)
      );
      renderProducts(filtered);
  });

  addProductBtn.onclick = () => {
    editIndex = null; 
    document.getElementById("productId").disabled = false;
    openForm();
  };
  cancelBtn.onclick = () => {
    document.getElementById("productId").disabled = false;
    closeForm();
  };

  renderProducts(currentProducts);
}