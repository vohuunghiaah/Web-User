// js cho phan login va register

// js cho liên hệ

// js cho sản phẩm
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Gắn sự kiện click động cho các nút "Thêm vào giỏ" (cả danh sách và phần hot)
document.addEventListener("click", function (clickEvent) {
  const addToCartButton = clickEvent.target.closest(
    ".products__list__item--img__cart, .product-hottest-item--img__cart"
  );
  if (!addToCartButton) return;
  clickEvent.preventDefault();
  clickEvent.stopPropagation();

  // Tìm phần tử sản phẩm gần nhất và lấy dữ liệu hiển thị
  const productItem = addToCartButton.closest(".products__list__item, .product-hottest-item");
  if (!productItem) return;
  const productNameElement = productItem.querySelector(
    ".products__list__item--name, .product-hottest-item--name"
  );
  const productPriceElement = productItem.querySelector(
    ".products__list__item--price, .product-hottest-item--price"
  );
  const productImageElement = productItem.querySelector("img");
  if (!productNameElement || !productPriceElement || !productImageElement) return;
  const productName = productNameElement.textContent.trim();
  const productPrice = parseInt(productPriceElement.textContent.replace(/[^\d]/g, "")) || 0;
  const productImageSrc = productImageElement.src;
  addToCart(productName, productPrice, productImageSrc, 1);
});

// Để bạn có thể lấy dữ liệu giỏ hàng
window.getCart = function () {
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

// Khởi tạo SPA khi trang load xong
document.addEventListener("DOMContentLoaded", () => {
  window.router = new SPARouter();
  window.router.handleBrowserNavigation();

  console.log("✅ SPA Navigation System initialized successfully!");
});
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
  const validatedQuantity =
    Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
  const existingCartItem = cart.find((cartProduct) => cartProduct.name === name);
  if (existingCartItem) existingCartItem.quantity += validatedQuantity;
  else cart.push({ name, price, image, quantity: validatedQuantity });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  renderCheckout();
  showAddToCartSuccess(name);
}

// ================= Render giỏ hàng =================
function renderCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const emptyCartMessage = document.querySelector(".cart-empty");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    return;
  }
  emptyCartMessage.style.display = "none";

  cart.forEach((cartItem, cartItemIndex) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("item");
    cartItemElement.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <div>
                <p>${cartItem.name}</p>
                <p>${cartItem.price} đ x <span class="qty">${cartItem.quantity}</span></p>
                <div class="quantity-controls">
                    <button class="decrease">-</button>
                    <button class="increase">+</button>
                </div>
                <button class="remove-btn">Xóa</button>
            </div>`;
    cartItemsContainer.appendChild(cartItemElement);

    // Nút xóa
    cartItemElement.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(cartItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      renderCheckout();
    });

    // Nút tăng giảm
    cartItemElement.querySelector(".increase").addEventListener("click", () => {
      cartItem.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      renderCheckout();
    });
    cartItemElement.querySelector(".decrease").addEventListener("click", () => {
      cartItem.quantity--;
      if (cartItem.quantity <= 0) cart.splice(cartItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      renderCheckout();
    });
  });

  // Nút quay lại chỉ tạo 1 lần
  const backToShopButton = document.getElementById("back-to-shop");
  if (backToShopButton) {
    backToShopButton.addEventListener("click", () => {
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
  const checkoutSummaryContainer = document.querySelector(".cart-items-summary");
  const subtotalElement = document.querySelector(".subtotal");
  const shippingElement = document.querySelector(".shipping");
  const totalElement = document.querySelector(".total");
  checkoutSummaryContainer.innerHTML = "";
  let subtotalAmount = 0;

  cart.forEach((cartItem, cartItemIndex) => {
    subtotalAmount += cartItem.price * cartItem.quantity;
    const productItemElement = document.createElement("div");
    productItemElement.classList.add("product-item");
    productItemElement.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <div>
                <p><strong>${cartItem.name}</strong></p>
                <p>${cartItem.price} đ x ${cartItem.quantity}</p>
                <button class="remove-btn">Xóa</button>
            </div>`;
    checkoutSummaryContainer.appendChild(productItemElement);

    productItemElement.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(cartItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      renderCheckout();
    });
  });

  subtotalElement.innerText = subtotalAmount + " đ";
  shippingElement.innerText = shippingFee + " đ";
  totalElement.innerHTML = `<strong>Tổng cộng:</strong> ${subtotalAmount + shippingFee} đ`;
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
  const checkoutForm = document.querySelector(".checkout-form");
  const customerName = checkoutForm.querySelector('input[placeholder="Họ và tên"]').value;
  const customerEmail = checkoutForm.querySelector('input[type="email"]').value;
  const customerPhone = checkoutForm.querySelector('input[type="tel"]').value;
  const customerAddress = checkoutForm.querySelector('input[placeholder="Địa chỉ"]').value;
  const customerWard = checkoutForm.querySelector('input[placeholder="Phường/Xã"]').value;
  const customerDistrict = checkoutForm.querySelector('input[placeholder="Quận/Huyện"]').value;
  const customerCity = checkoutForm.querySelector('input[placeholder="Tỉnh/Thành phố"]').value;
  const selectedPaymentMethod = checkoutForm.querySelector('input[name="pay"]:checked').value;

  // Tính tổng
  let orderTotal =
    cart.reduce((sum, cartProduct) => sum + cartProduct.price * cartProduct.quantity, 0) + shippingFee;

  // Lưu đơn hàng
  const newOrder = {
    date: new Date().toLocaleString(),
    products: [...cart],
    total: orderTotal,
    payMethod: selectedPaymentMethod,
    address: { name: customerName, email: customerEmail, phone: customerPhone, address: customerAddress, ward: customerWard, district: customerDistrict, city: customerCity },
  };
  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Hiển thị hóa đơn
  const billProductsElement = document.querySelector(".bill-products");
  const billTotalElement = document.querySelector(".bill-total");
  const billPaymentMethodElement = document.querySelector(".bill-pay");
  const billDateElement = document.getElementById("date");

  billProductsElement.innerHTML = "";
  newOrder.products.forEach((orderProduct) => {
    const productLineElement = document.createElement("p");
    productLineElement.innerHTML = `<strong>${orderProduct.name}</strong> x ${orderProduct.quantity} - ${
      orderProduct.price * orderProduct.quantity
    } đ`;
    billProductsElement.appendChild(productLineElement);
  });
  billTotalElement.innerText = orderTotal + " đ";
  billPaymentMethodElement.innerText = selectedPaymentMethod.toUpperCase();
  billDateElement.innerText = newOrder.date;

  // Xóa giỏ hàng
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
  renderCheckout();
  showPage("donmua-page");
}

// ================= Hiển thị lịch sử đơn hàng =================
function renderOrderHistory() {
  const orderHistoryTableBody = document.getElementById("order-history");
  orderHistoryTableBody.innerHTML = "";
  orders.forEach((customerOrder) => {
    customerOrder.products.forEach((orderedProduct) => {
      const orderRowElement = document.createElement("tr");
      orderRowElement.innerHTML = `<td>${orderedProduct.name}</td><td>${
        orderedProduct.price * orderedProduct.quantity
      } đ</td><td>Đã mua</td>`;
      orderHistoryTableBody.appendChild(orderRowElement);
    });
  });
}

// ================= Khởi tạo trang =================
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  renderCheckout();
  showPage("cart-page");
});
function goToCheckout() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống. Không thể tiếp tục thanh toán!");
    return; // Không chuyển trang
  }
  showPage("thanhtoan-page");
}
// ========================== LOGIN & REGISTER ==========================

// ========================== LOGIN & REGISTER ==========================

// Chuyển qua lại giữa login/signup modal
function setupAuthFormToggle() {
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  // Login → Signup
  document
    .querySelectorAll('[data-action="switch-to-signup"]')
    .forEach((switchLink) => {
      switchLink.addEventListener("click", (clickEvent) => {
        clickEvent.preventDefault();
        loginModal.classList.remove("active");
        setTimeout(() => signupModal.classList.add("active"), 150);
      });
    });

  // Signup → Login
  document
    .querySelectorAll('[data-action="switch-to-login"]')
    .forEach((switchLink) => {
      switchLink.addEventListener("click", (clickEvent) => {
        clickEvent.preventDefault();
        signupModal.classList.remove("active");
        setTimeout(() => loginModal.classList.add("active"), 150);
      });
    });
}

// Xử lý đăng ký tài khoản
function setupRegisterForm() {
  const registerForm = document.getElementById("signup-form");
  if (!registerForm) return;

  registerForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const userName = registerForm.querySelector("#signup-name").value.trim();
    const userEmail = registerForm.querySelector("#signup-email").value.trim();
    const userPassword = registerForm.querySelector("#signup-password").value.trim();
    const confirmedPassword = registerForm.querySelector("#signup-confirm-password").value.trim();

    if (!userName || !userEmail || !userPassword)
      return alert("Vui lòng nhập đầy đủ thông tin!");
    if (userPassword !== confirmedPassword) return alert("Mật khẩu nhập lại không khớp!");

    let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (registeredUsers.some((existingUser) => existingUser.email === userEmail))
      return alert("Email này đã được đăng ký!");

    registeredUsers.push({ name: userName, email: userEmail, password: userPassword });
    localStorage.setItem("users", JSON.stringify(registeredUsers));
    alert("Đăng ký thành công! Vui lòng đăng nhập.");

    registerForm.reset();
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
  const loginForm = document.getElementById("login-form");
  if (!loginForm) return;

  loginForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const enteredEmail = loginForm.querySelector("#login-email").value.trim();
    const enteredPassword = loginForm.querySelector("#login-password").value.trim();
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Hỗ trợ tài khoản demo
    if (enteredEmail === "user@xtray.com" && enteredPassword === "user123") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ name: "Demo User", email: enteredEmail })
      );
      alert("Đăng nhập demo thành công!");
      closeAllModals();
      updateUserUI();
      return;
    }

    const authenticatedUser = registeredUsers.find(
      (registeredUser) => registeredUser.email === enteredEmail && registeredUser.password === enteredPassword
    );
    if (!authenticatedUser) return alert("Sai email hoặc mật khẩu!");

    localStorage.setItem("loggedInUser", JSON.stringify(authenticatedUser));
    alert("Đăng nhập thành công!");
    closeAllModals();
    updateUserUI();
  });
}

// Cập nhật giao diện người dùng
function updateUserUI() {
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const loginLinkElement = document.getElementById("login-link");
  const signupLinkElement = document.getElementById("signup-link");
  const logoutLinkElement = document.getElementById("logout-link");
  const userInfoElement = document.getElementById("user-info");
  const usernameDisplayElement = document.getElementById("username-display");
  const cartLinkElement = document.getElementById("cart-link");

  if (currentUser) {
    // Đã đăng nhập
    usernameDisplayElement.textContent = currentUser.name || currentUser.email.split("@")[0];
    userInfoElement.style.display = "inline-block";
    loginLinkElement.style.display = "none";
    signupLinkElement.style.display = "none";
    logoutLinkElement.style.display = "inline-block";

    // Cho phép truy cập giỏ hàng
    cartLinkElement.onclick = (clickEvent) => allowCartAccess(clickEvent);

    // Click vào tên user để xem thông tin
    userInfoElement.onclick = (clickEvent) => {
      clickEvent.preventDefault();
      window.router.openModal("profile-modal");
    };
  } else {
    // Chưa đăng nhập
    userInfoElement.style.display = "none";
    loginLinkElement.style.display = "inline-block";
    signupLinkElement.style.display = "inline-block";
    logoutLinkElement.style.display = "none";

    // Chặn giỏ hàng nếu chưa login
    cartLinkElement.onclick = (clickEvent) => {
      clickEvent.preventDefault();
      alert("Vui lòng đăng nhập để xem giỏ hàng!");
    };
  }
}

// Cho phép mở giỏ hàng nếu đã login
function allowCartAccess(clickEvent) {
  clickEvent.preventDefault();
  if (window.router && typeof window.router.openModal === "function") {
    window.router.openModal("cart-modal");
  }
}

// Xử lý đăng xuất
function setupLogout() {
  const logoutLinkElement = document.getElementById("logout-link");
  if (!logoutLinkElement) return;
  logoutLinkElement.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    localStorage.removeItem("loggedInUser");
    alert("Đã đăng xuất!");
    updateUserUI();
  });
}

// Đóng toàn bộ modal
function closeAllModals() {
  const modalContainerElement = document.getElementById("modal-container");
  document
    .querySelectorAll(".modal-content")
    .forEach((modalElement) => modalElement.classList.remove("active"));
  modalContainerElement.classList.remove("active");
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

// Khởi tạo các chức năng login/register khi load trang
document.addEventListener("DOMContentLoaded", () => {
  setupAuthFormToggle();
  setupRegisterForm();
  setupLoginForm();
  setupProfileForm();
  setupLogout();
  updateUserUI();
});
// ========================== END LOGIN & REGISTER ==========================
