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
    this.handleBrowserNavigation();
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

      // Cuộn lên đầu trang một lần duy nhất với requestAnimationFrame
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });

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
    if (allProductsBtn) {
      allProductsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigateToView("products");
      });
    }
    // Xử lý button "Xem sản phẩm" trong trang About
    const aboutProductBtn = document.querySelector(
      ".about-top-container-button-02"
    );
    if (aboutProductBtn) {
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
// ================= Giỏ hàng & localStorage =================
// js cho sản phẩm
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Gắn sự kiện click động cho các nút "Thêm vào giỏ" (cả danh sách và phần hot)
document.addEventListener("click", function (e) {
  const cartBtn = e.target.closest(
    ".products__list__item--img__cart, .product-hottest-item--img__cart"
  );
  if (!cartBtn) return;
  e.preventDefault();
  e.stopPropagation();

  // Tìm phần tử sản phẩm gần nhất và lấy dữ liệu hiển thị
  const item = cartBtn.closest(".products__list__item, .product-hottest-item");
  if (!item) return;
  const nameEl = item.querySelector(
    ".products__list__item--name, .product-hottest-item--name"
  );
  const priceEl = item.querySelector(
    ".products__list__item--price, .product-hottest-item--price"
  );
  const imgEl = item.querySelector("img");
  if (!nameEl || !priceEl || !imgEl) return;
  const name = nameEl.textContent.trim();
  const price = parseInt(priceEl.textContent.replace(/[^\d]/g, "")) || 0;
  const image = imgEl.src;
  addToCart(name, price, image, 1);
});

// Để bạn có thể lấy dữ liệu giỏ hàng
window.getCart = function () {
  return cart;
};
// ================= Giỏ hàng & localStorage =================
const shippingFee = 32000; // Phí vận chuyển cố định
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// ================= Chuyển trang SPA =================
function showPage(id) {
  document
    .querySelectorAll(".page-section")
    .forEach((sec) => sec.classList.remove("active-page"));
  document.getElementById(id).classList.add("active-page");
  if (id === "cart-page") renderCart();
  if (id === "thanhtoan-page") renderCheckout();
  if (id === "donmua-page") renderOrderHistory();
}
// ✅ Hiển thị dấu tích khi thêm vào giỏ
function showAddToCartSuccess(name) {
  const popup = document.getElementById("cart-success");
  if (!popup) {
    // Không render popup => im lặng, tránh lỗi nghiêm trọng
    return;
  }
  const span = popup.querySelector("span");
  if (span) span.textContent = `Đã thêm "${name}" vào giỏ hàng!`;
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 2000);
}

// ================= Thêm sản phẩm vào giỏ =================
function addToCart(name, price, image, quantity = 1) {
  // Kiểm tra xem người dùng đã đăng nhập chưa
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    // Lưu thông tin sản phẩm để thêm sau khi đăng nhập
    const pendingProduct = { name, price, image, quantity };
    localStorage.setItem("pendingCartItem", JSON.stringify(pendingProduct));

    // Hiển thị thông báo và mở modal đăng nhập
    alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");

    // Mở modal đăng nhập
    const router = window.spaRouter;
    if (router && typeof router.openModal === "function") {
      router.openModal("login-modal");
    }
    return;
  }

  // Nếu đã đăng nhập, thêm sản phẩm vào giỏ bình thường
  const qty =
    Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
  const existing = cart.find((p) => p.name === name);
  if (existing) existing.quantity += qty;
  else cart.push({ name, price, image, quantity: qty });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  renderCheckout();
  showAddToCartSuccess(name);
}

// ====== An toàn gán lại event handler (để tránh gán nhiều lần)========
function safeReplaceHandler(el, event, handler) {
  if (!el) return;
  const clone = el.cloneNode(true);
  el.parentNode.replaceChild(clone, el);
  clone.addEventListener(event, handler);
  return clone;
}

// ================= Render giỏ hàng =================
function renderCart() {
  const container = document.querySelector(".cart-items");
  const emptyMsg = document.querySelector(".cart-empty");
  if (!container || !emptyMsg) return; // Không tìm thấy phần tử
  container.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }
  emptyMsg.style.display = "none";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.dataset.index = index;
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
    const qtySpan = div.querySelector(".qty");

    // Nút xóa
    div.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      div.classList.add("fade-out");
      setTimeout(() => {
        div.remove();
        renderCheckout();
        if (cart.length === 0) emptyMsg.style.display = "block";
      }, 300);
    });

    // Nút tăng
    div.querySelector(".increase").addEventListener("click", () => {
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      qtySpan.textContent = item.quantity; // <-- SỬA: Chỉ cập nhật số lượng
      renderCheckout();
    });

    //nut giam
    div.querySelector(".decrease").addEventListener("click", () => {
      item.quantity--;
      localStorage.setItem("cart", JSON.stringify(cart));

      if (item.quantity <= 0) {
        cart.splice(index, 1);
        div.classList.add("fade-out");
        setTimeout(() => {
          div.remove();
          renderCheckout();
          if (cart.length === 0) emptyMsg.style.display = "block";
        }, 300);
      } else {
        qtySpan.textContent = item.quantity;
        renderCheckout();
      }
    });
    container.appendChild(div);
  });

  // Nút quay lại chỉ tạo 1 lần
  const backBtn = document.getElementById("back-to-shop");
  if (backBtn) {
    safeReplaceHandler(backBtn, "click", () => {
      // Điều hướng về trang sản phẩm trong SPA và đóng modal giỏ hàng
      if (typeof showView === "function") showView("view-products");
      if (window.router && typeof window.router.closeModal === "function") {
        window.router.closeModal();
      }
    });
  }
}

// ================= Render checkout =================
function renderCheckout() {
  const summary = document.querySelector(".cart-items-summary");
  const subtotalEl = document.querySelector(".subtotal");
  const shippingEl = document.querySelector(".shipping");
  const totalEl = document.querySelector(".total");
  summary.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    const div = document.createElement("div");
    div.classList.add("product-item");
    div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p><strong>${item.name}</strong></p>
                <p>${item.price} đ x ${item.quantity}</p>
                <button class="remove-btn">Xóa</button>
            </div>`;
    summary.appendChild(div);

    div.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      renderCheckout();
    });
  });

  subtotalEl.innerText = subtotal + " đ";
  shippingEl.innerText = shippingFee + " đ";
  totalEl.innerHTML = `<strong>Tổng cộng:</strong> ${subtotal + shippingFee} đ`;
}

// ================= Hiển thị form chuyển khoản =================
document.querySelectorAll('input[name="pay"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    document.getElementById("bank-info").style.display =
      radio.value === "bank" ? "block" : "none";
  });
});

// ================= Thanh toán =================
function checkoutOrder() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  // Lấy thông tin giao hàng
  const form = document.querySelector(".checkout-form");
  const name = form.querySelector('input[placeholder="Họ và tên"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const address = form.querySelector('input[placeholder="Địa chỉ"]').value;
  const ward = form.querySelector('input[placeholder="Phường/Xã"]').value;
  const district = form.querySelector('input[placeholder="Quận/Huyện"]').value;
  const city = form.querySelector('input[placeholder="Tỉnh/Thành phố"]').value;
  const payMethod = form.querySelector('input[name="pay"]:checked').value;

  // Tính tổng
  let total =
    cart.reduce((sum, p) => sum + p.price * p.quantity, 0) + shippingFee;

  // Lưu đơn hàng
  const order = {
    date: new Date().toLocaleString(),
    products: [...cart],
    total,
    payMethod,
    address: { name, email, phone, address, ward, district, city },
  };
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Đặt hàng thành công!");

  // ===Hiển thị hóa đơn ===
  const billProducts = document.querySelector(".bill-products");
  const billTotal = document.querySelector(".bill-total");
  const billPay = document.querySelector(".bill-pay");
  const dateEl = document.getElementById("date");
  const billAddress = document.querySelector(".bill-address");
  billProducts.innerHTML = "";
  order.products.forEach((item) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${item.name}</strong> x ${item.quantity} - ${
      item.price * item.quantity
    } đ`;
    billProducts.appendChild(p);
  });
  billTotal.innerText = total + " đ";
  billPay.innerText = payMethod.toUpperCase();
  dateEl.innerText = order.date;
  billAddress.innerText = `${name}, ${address}, ${ward}, ${district}, ${city}, SĐT: ${phone}`;
  //  === Xóa giỏ hàng ===
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
  renderCheckout();
  showPage("donmua-page");
}

// ================= Hiển thị lịch sử đơn hàng =================
function renderOrderHistory() {
  const tbody = document.getElementById("order-history");
  tbody.innerHTML = "";
  orders.forEach((order) => {
    order.products.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.name}</td><td>${
        item.price * item.quantity
      } đ</td><td>Đã mua</td>`;
      tbody.appendChild(tr);
    });
  });
}

// ================= Chuyển tới trang thanh toán =================
function goToCheckout() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống. Không thể tiếp tục thanh toán!");
    return; // Không chuyển trang
  }
  showPage("thanhtoan-page");
}
// ========================== LOGIN & REGISTER ==========================

// Chuyển qua lại giữa login/signup modal
function setupAuthFormToggle() {
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  // Login → Signup
  document
    .querySelectorAll('[data-action="switch-to-signup"]')
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.classList.remove("active");
        setTimeout(() => signupModal.classList.add("active"), 150);
      });
    });

  // Signup → Login
  document
    .querySelectorAll('[data-action="switch-to-login"]')
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        signupModal.classList.remove("active");
        setTimeout(() => loginModal.classList.add("active"), 150);
      });
    });
}

// Xử lý đăng ký tài khoản
function setupRegisterForm() {
  const form = document.getElementById("signup-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#signup-name").value.trim();
    const email = form.querySelector("#signup-email").value.trim();
    const password = form.querySelector("#signup-password").value.trim();
    const confirm = form.querySelector("#signup-confirm-password").value.trim();

    if (!name || !email || !password)
      return alert("Vui lòng nhập đầy đủ thông tin!");
    if (password !== confirm) return alert("Mật khẩu nhập lại không khớp!");

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email))
      return alert("Email này đã được đăng ký!");

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Vui lòng đăng nhập.");

    form.reset();
    // Chuyển về login form
    document.getElementById("signup-modal").classList.remove("active");
    setTimeout(
      () => document.getElementById("login-modal").classList.add("active"),
      150
    );
  });
}

// Xử lý đăng nhập
function setupLoginForm() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector("#login-email").value.trim();
    const password = form.querySelector("#login-password").value.trim();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Hỗ trợ tài khoản demo
    if (email === "user@xtray.com" && password === "user123") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ name: "Demo User", email })
      );
      alert("Đăng nhập demo thành công!");
      closeAllModals();
      updateUserUI();

      // Kiểm tra xem có sản phẩm đang chờ thêm vào giỏ không
      checkPendingCartItem();
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) return alert("Sai email hoặc mật khẩu!");

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Đăng nhập thành công!");
    closeAllModals();
    updateUserUI();

    // Kiểm tra xem có sản phẩm đang chờ thêm vào giỏ không
    checkPendingCartItem();

    const pendingItem = JSON.parse(localStorage.getItem("pendingBuyNow"));

    if (pendingItem && pendingItem.action === "buyNow") {
      // Có 1 món đang chờ mua

      // 1. Ghi đè giỏ hàng với món này
      cart = [pendingItem];
      localStorage.setItem("cart", JSON.stringify(cart));

      // 2. Xóa pending item
      localStorage.removeItem("pendingBuyNow");

      // 3. Mở giỏ hàng và chuyển đến trang thanh toán
      if (window.router && typeof window.router.openModal === "function") {
        window.router.openModal("cart-modal");
        renderCart();
        renderCheckout();
        setTimeout(() => {
          showPage("thanhtoan-page");
        }, 100);
      }
    }
  });
}

// Cập nhật giao diện người dùng
function updateUserUI() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");
  const logoutLink = document.getElementById("logout-link");
  const userInfo = document.getElementById("user-info");
  const usernameDisplay = document.getElementById("username-display");
  const cartLink = document.getElementById("cart-link");

  if (!window.router) {
    console.warn("Router chưa sẵn, bỏ qua updateUserUI()");
    return;
  }

  if (user) {
    // Đã đăng nhập
    usernameDisplay.textContent = user.name || user.email.split("@")[0];
    userInfo.style.display = "inline-block";
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    logoutLink.style.display = "inline-block";
    cartLink.style.display = "inline-block";
  } else {
    // Chưa đăng nhập
    userInfo.style.display = "none";
    loginLink.style.display = "inline-block";
    signupLink.style.display = "inline-block";
    logoutLink.style.display = "none";
  }
}

// Cho phép mở giỏ hàng nếu đã login
function allowCartAccess(e) {
  e.preventDefault();
  if (window.router && typeof window.router.openModal === "function") {
    window.router.openModal("cart-modal");
  }
}

// Xử lý đăng xuất
function setupLogout() {
  const logoutLink = document.getElementById("logout-link");
  if (!logoutLink) return;
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    alert("Đã đăng xuất!");
    updateUserUI();
  });
}

// Đóng toàn bộ modal
function closeAllModals() {
  const modalContainer = document.getElementById("modal-container");
  document
    .querySelectorAll(".modal-content")
    .forEach((m) => m.classList.remove("active"));
  modalContainer.classList.remove("active");
  document.body.style.overflow = "";
}

// ========================== PROFILE INFO ==========================
function setupProfileForm() {
  const form = document.getElementById("profile-form");
  if (!form) return;

  // Khi mở modal, tự động đổ dữ liệu người dùng
  const observer = new MutationObserver(() => {
    if (document.getElementById("profile-modal").classList.contains("active")) {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (user) {
        form.querySelector("#profile-name").value = user.name || "";
        form.querySelector("#profile-email").value = user.email || "";
        form.querySelector("#profile-password").value = "";
      }
    }
  });
  observer.observe(document.getElementById("profile-modal"), {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Lưu thay đổi thông tin
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let current = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!current) return alert("Vui lòng đăng nhập!");

    const newName = form.querySelector("#profile-name").value.trim();
    const newPass = form.querySelector("#profile-password").value.trim();

    // Cập nhật trong danh sách user
    const index = users.findIndex((u) => u.email === current.email);
    if (index !== -1) {
      users[index].name = newName;
      if (newPass) users[index].password = newPass;
      localStorage.setItem("users", JSON.stringify(users));
    }

    // Cập nhật user đang đăng nhập
    current.name = newName;
    localStorage.setItem("loggedInUser", JSON.stringify(current));

    alert("Đã lưu thay đổi!");
    form.querySelector("#profile-password").value = "";
    updateUserUI();
    closeAllModals();
  });
}

// ========================== END LOGIN & REGISTER ==========================

// ===== Kiểm tra và thêm sản phẩm đang chờ vào giỏ hàng sau khi đăng nhập=====
function checkPendingCartItem() {
  const pendingProduct = JSON.parse(localStorage.getItem("pendingCartItem"));

  if (pendingProduct) {
    const { name, price, image, quantity } = pendingProduct;

    // Thêm sản phẩm vào giỏ hàng
    const qty =
      Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
    const existing = cart.find((p) => p.name === name);
    if (existing) existing.quantity += qty;
    else cart.push({ name, price, image, quantity: qty });

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    renderCheckout();

    // Xóa sản phẩm đang chờ
    localStorage.removeItem("pendingCartItem");

    // Hiển thị thông báo thành công
    showAddToCartSuccess(name);
  }
  // Kiểm tra xem có sản phẩm "Mua ngay" đang chờ không
  checkPendingBuyNow();
}

// Hàm kiểm tra và xử lý "Mua ngay" sau khi đăng nhập
function checkPendingBuyNow() {
  const pendingBuyNow = JSON.parse(localStorage.getItem("pendingBuyNow"));

  if (pendingBuyNow && pendingBuyNow.action === "buyNow") {
    const { name, price, image, quantity } = pendingBuyNow;

    // Xóa giỏ hàng hiện tại và thêm sản phẩm mua ngay
    cart = [{ name, price, image, quantity }];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Xóa pending buy now
    localStorage.removeItem("pendingBuyNow");

    // Mở modal giỏ hàng và chuyển đến trang thanh toán
    if (window.router && typeof window.router.openModal === "function") {
      window.router.openModal("cart-modal");
      renderCart();
      renderCheckout();

      // Chuyển đến trang thanh toán
      setTimeout(() => {
        showPage("thanhtoan-page");
      }, 200);
    }
  }
}
//Hàm
// === 1 DOMCONTENTLOADED DUY NHẤT — chèn ở cuối file, xóa 3 listener cũ ===
document.addEventListener("DOMContentLoaded", () => {
  // 1) Khởi tạo router SPA trước (bắt buộc)
  window.router = new SPARouter();
  window.spaRouter = window.router;
  // 2) Khởi tạo các module liên quan tới giỏ hàng / đơn hàng
  renderCart();
  renderCheckout();

  // 3) Khởi tạo auth (login/register/profile/logout)
  setupAuthFormToggle();
  setupRegisterForm();
  setupLoginForm();
  setupProfileForm();
  setupLogout();

  // 4) Cập nhật UI người dùng (dựa trên trạng thái loggedInUser)
  //    và gắn các event handler quan trọng một cách "idempotent" (an toàn gán 1 lần).
  function attachUserUIHandlers() {
    const loginLink = document.getElementById("login-link");
    const signupLink = document.getElementById("signup-link");
    const logoutLink = document.getElementById("logout-link");
    const userInfo = document.getElementById("user-info");
    const cartLink = document.getElementById("cart-link");
    const usernameDisplay = document.getElementById("username-display");

    // updateUserUI sẽ set trạng thái hiển thị; nhưng không gán onclick trực tiếp nhiều lần

    // Gắn handler cho cartLink an toàn (1 lần)
    if (cartLink) {
      safeReplaceHandler(cartLink, "click", (e) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!user) {
          e.preventDefault();
          alert("Vui lòng đăng nhập để xem giỏ hàng!");

          const modalContainer = document.getElementById("modal-container");
          const loginModal = document.getElementById("login-modal");
          if (modalContainer && loginModal) {
            modalContainer.classList.add("active");
            loginModal.classList.add("active");
            document.body.style.overflow = "hidden";
          }
        } else {
          // Nếu đã login, mở modal giỏ hàng qua router (nếu có)
          e.preventDefault();
          if (window.router && typeof window.router.openModal === "function") {
            window.router.openModal("cart-modal");
          } else {
            // fallback: show modal directly
            const modalContainer = document.getElementById("modal-container");
            const cartModal = document.getElementById("cart-modal");
            if (modalContainer && cartModal) {
              modalContainer.classList.add("active");
              cartModal.classList.add("active");
              document.body.style.overflow = "hidden";
            }
          }
        }
      });
    }
    // Gắn click vào userInfo để mở profile modal (an toàn)
    if (userInfo) {
      safeReplaceHandler(userInfo, "click", (e) => {
        e.preventDefault();
        if (window.router && typeof window.router.openModal === "function") {
          window.router.openModal("profile-modal");
        } else {
          const modalContainer = document.getElementById("modal-container");
          const profileModal = document.getElementById("profile-modal");
          if (modalContainer && profileModal) {
            modalContainer.classList.add("active");
            profileModal.classList.add("active");
            document.body.style.overflow = "hidden";
          }
        }
      });
    }
    if (typeof updateUserUI === "function") {
      updateUserUI();
    }
  }
  // Gọi attach once
  attachUserUIHandlers();
  // 5) Khởi tạo modal-related (nếu chưa khởi)
  //    setupModalNavigation() đã được gọi trong constructor SPARouter,
  //    nhưng gọi lại an toàn nếu cần (idempotent) — đảm bảo listener đã sẳn sàng.
  if (
    window.router &&
    typeof window.router.setupModalNavigation === "function"
  ) {
    try {
      window.router.setupModalNavigation();
    } catch (e) {}
  }

  // 6) Cuộn lên đầu an toàn 1 lần
  requestAnimationFrame(() => window.scrollTo(0, 0));

  console.log("✅ App initialized (single DOMContentLoaded).");
});
