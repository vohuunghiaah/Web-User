// js cho phan login va register

// js cho liên hệ

// js cho sản phẩm
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Gắn sự kiện click động cho các nút "Thêm vào giỏ" (cả danh sách và phần hot)
document.addEventListener('click', function(e) {
  const cartBtn = e.target.closest('.products__list__item--img__cart, .product-hottest-item--img__cart');
  if (!cartBtn) return;
  e.preventDefault();
  e.stopPropagation();

  // Tìm phần tử sản phẩm gần nhất và lấy dữ liệu hiển thị
  const item = cartBtn.closest('.products__list__item, .product-hottest-item');
  if (!item) return;
  const nameEl = item.querySelector('.products__list__item--name, .product-hottest-item--name');
  const priceEl = item.querySelector('.products__list__item--price, .product-hottest-item--price');
  const imgEl = item.querySelector('img');
  if (!nameEl || !priceEl || !imgEl) return;
  const name = nameEl.textContent.trim();
  const price = parseInt(priceEl.textContent.replace(/[^\d]/g, '')) || 0;
  const image = imgEl.src;
  addToCart(name, price, image, 1);
});

// Để bạn có thể lấy dữ liệu giỏ hàng
window.getCart = function() {
  return cart;
};
// js cho giới thiệu
   
// JS điều hướng

// SPA Navigation System
class SPARouter {
  constructor() {
    this.currentView = "home";
    this.init();
  }

  init() {
    // Khởi tạo event listeners
    this.setupViewNavigation();
    this.setupModalNavigation();
    this.setupShopNowButton();
    this.setupAllProductsButton();
  }

  // Xử lý điều hướng giữa các view
  setupViewNavigation() {
    // Lấy tất cả các link có data-view
    const viewLinks = document.querySelectorAll("[data-view]");

    viewLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetView = link.getAttribute("data-view");
        // Để products.js xử lý điều hướng + lọc + phân trang cho trang sản phẩm
        if (targetView === "products" || targetView === "product-details") {
          return;
        }
        e.preventDefault();
        this.navigateToView(targetView);
      });
    });
  }

  navigateToView(viewName) {
    // Ẩn tất cả các view
    const allViews = document.querySelectorAll(".spa-view");
    allViews.forEach((view) => {
      view.classList.remove("active");
    });

    // Hiển thị view được chọn
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
      targetView.classList.add("active");
      this.currentView = viewName;

      // Cuộn lên đầu trang
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Cập nhật URL (optional - không reload trang)
      history.pushState({ view: viewName }, "", `#${viewName}`);
    }
  }

  // Xử lý modal (popup)
  setupModalNavigation() {
    const modalContainer = document.getElementById("modal-container");

    // Mở modal
    const openModalLinks = document.querySelectorAll(
      '[data-action="open-modal"]'
    );
    openModalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetModal = link.getAttribute("data-target");
        this.openModal(targetModal);
      });
    });

    // Đóng modal
    const closeModalElements = document.querySelectorAll(
      '[data-action="close-modal"]'
    );
    closeModalElements.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeModal();
      });
    });

    // Đóng modal khi nhấn ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });
  }

  openModal(modalId) {
    const modalContainer = document.getElementById("modal-container");
    const targetModal = document.getElementById(modalId);

    if (targetModal) {
      // Ẩn tất cả modal
      const allModals = document.querySelectorAll(".modal-content");
      allModals.forEach((modal) => {
        modal.classList.remove("active");
      });

      // Hiển thị modal container và modal được chọn
      modalContainer.classList.add("active");

      // Delay nhỏ để animation hoạt động
      setTimeout(() => {
        targetModal.classList.add("active");
      }, 10);

      // Ngăn cuộn trang khi modal mở
      document.body.style.overflow = "hidden";
    }
  }

  closeModal() {
    const modalContainer = document.getElementById("modal-container");
    const allModals = document.querySelectorAll(".modal-content");

    // Ẩn tất cả modal
    allModals.forEach((modal) => {
      modal.classList.remove("active");
    });

    // Delay để animation chạy xong trước khi ẩn container
    setTimeout(() => {
      modalContainer.classList.remove("active");
    }, 300);

    // Cho phép cuộn trang trở lại
    document.body.style.overflow = "";
  }

  // Xử lý nút Shop Now
  setupShopNowButton() {
    const shopNowBtn = document.querySelector(".hero--btn");
    if (shopNowBtn) {
      shopNowBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigateToView("products");
      });
    }
  }
  setupAllProductsButton() {
    const allProductsBtn = document.querySelector(".product-hottest--btn");
    if(allProductsBtn) {
      allProductsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigateToView("products");
      });
    }
    // Xử lý button "Xem sản phẩm" trong trang About
    const aboutProductBtn = document.querySelector(".about-top-container-button-02");
    if(aboutProductBtn) {
      aboutProductBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigateToView("products");
      });
    }
  }
  // Xử lý browser back/forward buttons
  handleBrowserNavigation() {
    window.addEventListener("popstate", (e) => {
      if (e.state && e.state.view) {
        this.navigateToView(e.state.view);
      }
    });
  }
}

// Khởi tạo SPA khi trang load xong
document.addEventListener("DOMContentLoaded", () => {
  window.router = new SPARouter();
  window.router.handleBrowserNavigation();

  console.log("✅ SPA Navigation System initialized successfully!");
});
// ================= Giỏ hàng & localStorage =================
const shippingFee = 32000; // Phí vận chuyển cố định
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// ================= Chuyển trang SPA =================
function showPage(id) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active-page'));
    document.getElementById(id).classList.add('active-page');
    if (id === 'cart-page') renderCart();
    if (id === 'thanhtoan-page') renderCheckout();
    if (id === 'donmua-page') renderOrderHistory();
}
// ✅ Hiển thị dấu tích khi thêm vào giỏ
function showAddToCartSuccess(name) {
    const popup = document.getElementById('cart-success');
    if (!popup) {
        // Không render popup => im lặng, tránh lỗi nghiêm trọng
        return;
    }
    const span = popup.querySelector('span');
    if (span) span.textContent = `Đã thêm "${name}" vào giỏ hàng!`;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 2000);
}

// ================= Thêm sản phẩm vào giỏ =================
function addToCart(name, price, image, quantity = 1) {
    const qty = Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
    const existing = cart.find(p => p.name === name);
    if (existing) existing.quantity += qty;
    else cart.push({ name, price, image, quantity: qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    renderCheckout();
    showAddToCartSuccess(name);
}

// ================= Render giỏ hàng =================
function renderCart() {
    const container = document.querySelector('.cart-items');
    const emptyMsg = document.querySelector('.cart-empty');
    container.innerHTML = '';

    if (cart.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    }
    emptyMsg.style.display = 'none';

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>${item.price} đ x <span class="qty">${item.quantity}</span></p>
                <div class="quantity-controls">
                    <button class="decrease">-</button>
                    <button class="increase">+</button>
                </div>
                <button class="remove-btn">Xóa</button>
            </div>`;
        container.appendChild(div);

        // Nút xóa
        div.querySelector('.remove-btn').addEventListener('click', () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            renderCheckout();
        });

        // Nút tăng giảm
        div.querySelector('.increase').addEventListener('click', () => {
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            renderCheckout();
        });
        div.querySelector('.decrease').addEventListener('click', () => {
            item.quantity--;
            if (item.quantity <= 0) cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            renderCheckout();
        });
    });

    // Nút quay lại chỉ tạo 1 lần
    const backBtn = document.getElementById('back-to-shop');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Điều hướng về trang sản phẩm trong SPA và đóng modal giỏ hàng
            if (typeof showView === 'function') showView('view-products');
            if (window.router && typeof window.router.closeModal === 'function') {
                window.router.closeModal();
            }
        });
    }
}

// ================= Render checkout =================
function renderCheckout() {
    const summary = document.querySelector('.cart-items-summary');
    const subtotalEl = document.querySelector('.subtotal');
    const shippingEl = document.querySelector('.shipping');
    const totalEl = document.querySelector('.total');
    summary.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p><strong>${item.name}</strong></p>
                <p>${item.price} đ x ${item.quantity}</p>
                <button class="remove-btn">Xóa</button>
            </div>`;
        summary.appendChild(div);

        div.querySelector('.remove-btn').addEventListener('click', () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            renderCheckout();
        });
    });

    subtotalEl.innerText = subtotal + ' đ';
    shippingEl.innerText = shippingFee + ' đ';
    totalEl.innerHTML = `<strong>Tổng cộng:</strong> ${subtotal + shippingFee} đ`;
}

// ================= Hiển thị form chuyển khoản =================
document.querySelectorAll('input[name="pay"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.getElementById('bank-info').style.display = (radio.value === 'bank') ? 'block' : 'none';
    });
});

// ================= Thanh toán =================
function checkoutOrder() {
    if(cart.length === 0){
        alert("Giỏ hàng trống!");
        return;
    }

    // Lấy thông tin giao hàng
    const form = document.querySelector('.checkout-form');
    const name = form.querySelector('input[placeholder="Họ và tên"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const address = form.querySelector('input[placeholder="Địa chỉ"]').value;
    const ward = form.querySelector('input[placeholder="Phường/Xã"]').value;
    const district = form.querySelector('input[placeholder="Quận/Huyện"]').value;
    const city = form.querySelector('input[placeholder="Tỉnh/Thành phố"]').value;
    const payMethod = form.querySelector('input[name="pay"]:checked').value;

    // Tính tổng
    let total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0) + shippingFee;

    // Lưu đơn hàng
    const order = {
        date: new Date().toLocaleString(),
        products: [...cart],
        total,
        payMethod,
        address: { name, email, phone, address, ward, district, city }
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Hiển thị hóa đơn
    const billProducts = document.querySelector('.bill-products');
    const billTotal = document.querySelector('.bill-total');
    const billPay = document.querySelector('.bill-pay');
    const dateEl = document.getElementById('date');

    billProducts.innerHTML = '';
    order.products.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${item.name}</strong> x ${item.quantity} - ${item.price*item.quantity} đ`;
        billProducts.appendChild(p);
    });
    billTotal.innerText = total + ' đ';
    billPay.innerText = payMethod.toUpperCase();
    dateEl.innerText = order.date;

    // Xóa giỏ hàng
    cart = [];
    localStorage.removeItem('cart');
    renderCart();
    renderCheckout();
    showPage('donmua-page');
}

// ================= Hiển thị lịch sử đơn hàng =================
function renderOrderHistory() {
    const tbody = document.getElementById('order-history');
    tbody.innerHTML = '';
    orders.forEach(order => {
        order.products.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.name}</td><td>${item.price*item.quantity} đ</td><td>Đã mua</td>`;
            tbody.appendChild(tr);
        });
    });
}

// ================= Khởi tạo trang =================
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    renderCheckout();
    showPage('cart-page');
});
function goToCheckout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống. Không thể tiếp tục thanh toán!");
        return; // Không chuyển trang
    }
    showPage('thanhtoan-page');
}

