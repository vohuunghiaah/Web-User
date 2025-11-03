// --- 8. NAVIGATION SYSTEM (SPA) - Đặt ở đây để có thể truy cập từ mọi nơi ---
// Hàm để ẩn tất cả các view và hiển thị view được chọn
window.showView = function (viewId) {
  // Các view yêu cầu đăng nhập
  const protectedViews = ["admin", "profile", "orders"];

  // Kiểm tra nếu view cần đăng nhập
  if (protectedViews.includes(viewId)) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Bạn cần đăng nhập để truy cập trang này!");
      viewId = "login"; // Chuyển hướng về login
    }
  }

  // Ẩn tất cả view
  document.querySelectorAll(".spa-view").forEach((view) => {
    view.classList.remove("active");
  });

  // Hiển thị view được yêu cầu
  const viewToShow = document.getElementById(viewId);
  if (viewToShow) {
    viewToShow.classList.add("active");
  }

  // Cuộn lên đầu trang khi chuyển view
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  
  // Cập nhật URL hash để hỗ trợ điều hướng
  window.location.hash = viewId;
};


// Đợi DOM load xong
document.addEventListener("DOMContentLoaded", function () {
  
  // -2. Cài đặt và trạng thái -
  const productsPerPage = 12;
  let currentPage = 1;
  let currentPriceFilters = [];
  let currentSort = "default";
  let currentSearchQuery = ""; // Thêm biến lưu từ khóa tìm kiếm
  let totalPages = 1;
  // -3. Lấy các phần tử DOM-
  const productsList = document.getElementById("product-list-container");
  const productTemplate = document.getElementById("product-template");
  const categoryLinks = document.querySelectorAll(
    "#category-filters .products__category__items--details, #category-filters .products-category__items--details"
  );
  const priceCheckboxes = document.querySelectorAll(
    ".form__budget__checkbox input[type='checkbox']"
  );
  const sortSelect = document.getElementById("sort-select");
  const resetButton = document.getElementById("reset-filters");
  const titleName = document.querySelector(".title__left__name");
  const titlePath = document.querySelector(".title__left__path--highlight");
  const paginationLinksContainer = document.getElementById("pagination-links");
  const prevButton = document.getElementById("pagination-prev");
  const nextButton = document.getElementById("pagination-next");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  function displayProducts(selectedCategories) {
    let filteredProduct = [...allProduct];

    // LỌC THEO TÌM KIẾM (ưu tiên cao nhất)
    if (currentSearchQuery.trim() !== "") {
      const query = currentSearchQuery.toLowerCase().trim();
      filteredProduct = filteredProduct.filter((product) => {
        return product.name.toLowerCase().includes(query);
      });
    }

    // LỌC THEO DANH MỤC
    if (!selectedCategories.includes("all")) {
      // Lọc sản phẩm
      filteredProduct = filteredProduct.filter((product) => {
        // Trả về true NẾU danh mục của sản phẩm
        // CÓ NẰM TRONG mảng các danh mục đã chọn
        return selectedCategories.includes(product.category);
      });
    }
    // LỌC THEO GIÁ
    if (
      currentPriceFilters.length > 0 &&
      !currentPriceFilters.includes("all")
    ) {
      filteredProduct = filteredProduct.filter((p) => {
        return currentPriceFilters.some((rangeValue) => {
          const range = parsePriceRange(rangeValue);
          return p.price >= range.min && p.price <= range.max;
        });
      });
    }
    // SẮP XẾP
    switch (currentSort) {
      case "price-asc":
        filteredProduct.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProduct.sort((a, b) => b.price - a.price);
        break;
      case "default":
        filteredProduct.sort((a, b) => a.id - b.id);
        break;
    }

    // PHÂN TRANG - đảm bảo currentPage nằm trong khoảng hợp lệ theo kết quả lọc
    const computedTotalPages =
      Math.ceil(filteredProduct.length / productsPerPage) || 0;
    if (computedTotalPages === 0) {
      currentPage = 1;
    } else if (currentPage > computedTotalPages) {
      currentPage = computedTotalPages;
    } else if (currentPage < 1) {
      currentPage = 1;
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsForThisPage = filteredProduct.slice(startIndex, endIndex);

    // CẬP NHẬT HEADER HIỂN THỊ SỐ LƯỢNG
    const resultsHeader = document.querySelector(".products__list__header h3");
    if (resultsHeader) {
      const displayStart = filteredProduct.length > 0 ? startIndex + 1 : 0;
      const displayEnd = Math.min(endIndex, filteredProduct.length);
      resultsHeader.textContent = `Kết quả tìm thấy: ${displayStart}-${displayEnd} trong ${filteredProduct.length} sản phẩm`;
    }

    // HIỂN THỊ
    const existingItems = productsList.querySelectorAll(
      ".products__list__item"
    );
    existingItems.forEach((item) => item.remove());
    productsForThisPage.forEach((product) => {
      const clone = productTemplate.content.cloneNode(true);

      // Lưu product id vào data attribute để dùng khi click
      clone
        .querySelector(".product-link")
        .setAttribute("data-product-id", product.id);
      clone.querySelector(".product-link").href = "#";
      clone.querySelector("img").src = product.imgSrc;
      clone.querySelector("img").alt = product.name;
      clone.querySelector(".products__list__item--name").textContent =
        product.name;
      clone.querySelector(".products__list__item--price").textContent =
        product.currentPrice;

      // Ẩn hiện các phẩn tử tùy chọn
      const installmentSpan = clone.querySelector(
        ".products__list__item--installment"
      );
      installmentSpan.style.display = "inline-block";

      const originalPriceSpan = clone.querySelector(
        ".products__list__item--discount1"
      );
      product.orginalPrice
        ? (originalPriceSpan.textContent = product.orginalPrice)
        : (originalPriceSpan.style.display = "none");

      const discountPercentSpan = clone.querySelector(
        ".products__list__item--discount2"
      );
      product.discountPercent
        ? (discountPercentSpan.textContent = product.discountPercent)
        : (discountPercentSpan.style.display = "none");

      const priceDiscountTextSpan = clone.querySelector(
        ".products__list__item--priceDiscount"
      );
      product.priceDiscountText
        ? (priceDiscountTextSpan.textContent = product.priceDiscountText)
        : (priceDiscountTextSpan.style.display = "none");

      // Gắn sự kiện "Thêm vào giỏ" cho mỗi item render
      const cartBtn = clone.querySelector(".products__list__item--img__cart");
      if (cartBtn) {
        cartBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          try {
            const productName = product.name;
            const priceText = product.currentPrice;
            const price =
              parseInt(String(priceText).replace(/[^\d]/g, "")) || 0;
            const image = product.imgSrc;
            if (typeof addToCart === "function") {
              addToCart(productName, price, image, 1);
            }
          } catch (error) {
            // Silently handle errors from cart operations to avoid breaking the UI
            console.error('Error adding to cart:', error);
          }
        });
      }

      productsList.appendChild(clone);
    });
    // HIỂN THỊ PHÂN TRANG
    displayPagination(filteredProduct.length);
  }

  // Hàm cuộn lên đầu trang
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // -- HÀM PHỤ --
  function displayPagination(totalFilteredProducts) {
    // Nếu không có container phân trang trong DOM thì không làm gì
    if (!paginationLinksContainer) return;

    // 1. Xóa các nút số trang cũ
    paginationLinksContainer.innerHTML = "";

    // 2. Tính toán tổng số trang (và cập nhật biến toàn cục)
    totalPages = Math.ceil(totalFilteredProducts / productsPerPage) || 0;

    // Nếu không có trang nào thì disable prev/next và thoát
    if (totalPages === 0) {
      if (prevButton) prevButton.classList.add("disabled");
      if (nextButton) nextButton.classList.add("disabled");
      return;
    }

    // 3. Tạo các nút số trang mới
    for (let i = 1; i <= totalPages; i++) {
      const pageLinkWrapper = document.createElement("div");
      pageLinkWrapper.className =
        "products__pagination__cover__links__link__link";
      pageLinkWrapper.style.cursor = "pointer";

      if (i === currentPage) pageLinkWrapper.classList.add("active");

      pageLinkWrapper.innerHTML = `<span>${i}</span>`;
      pageLinkWrapper.addEventListener("click", () => {
        currentPage = i;
        if (typeof filterProductsFromActiveCategories === "function")
          filterProductsFromActiveCategories();
        scrollToTop();
      });

      paginationLinksContainer.appendChild(pageLinkWrapper);
    }

    // 4. Cập nhật trạng thái cho các nút mũi tên (ẩn/hiện hoặc vô hiệu hóa)
    if (prevButton) {
      if (currentPage === 1) prevButton.classList.add("disabled");
      else prevButton.classList.remove("disabled");
    }
    if (nextButton) {
      if (currentPage === totalPages) nextButton.classList.add("disabled");
      else nextButton.classList.remove("disabled");
    }
  }
  function filterProductsFromActiveCategories() {
    // 1. Tạo một mảng rỗng để chứa các danh mục được chọn
    const activeCategories = [];

    // 2. Tìm tất cả các link danh mục đang có class ".active"
    const activeLinks = document.querySelectorAll(
      ".products__category__items--details.active"
    );

    // 3. Lặp qua các link tìm được
    activeLinks.forEach((link) => {
      // Lấy giá trị từ thuộc tính 'data-category' (ví dụ: "mouse", "keyboard", "all")
      // và thêm nó vào mảng
      activeCategories.push(link.getAttribute("data-category"));
    });
    if (activeCategories.length === 0 && allCategoriesLink) {
      // 1. Tự động bật lại class 'active' cho nút "Tất cả"
      allCategoriesLink.classList.add("active");

      // 2. Thêm "all" vào mảng để lọc
      activeCategories.push("all");
    }

    displayProducts(activeCategories);
  }
  function parsePriceRange(rangeValue) {
    switch (rangeValue) {
      case "under500k":
        return { min: 0, max: 500000 };
      case "500k-1m":
        return { min: 500000, max: 1000000 };
      case "1m-2m":
        return { min: 1000000, max: 2000000 };
      case "2m-3m":
        return { min: 2000000, max: 3000000 };
      case "over3m":
        return { min: 3000000, max: Infinity };
      default:
        return { min: 0, max: Infinity };
    }
  }
  // Hàm cập nhật Tiêu đề trang
  function updateTitle(category = "all") {
    // Nếu đang ở chế độ tìm kiếm, không cập nhật lại title (để giữ "Kết quả tìm kiếm")
    if (currentSearchQuery.trim() !== "") {
      return;
    }

    let name = "Tất cả sản phẩm";

    // Cập nhật tên theo category
    const categoryNames = {
      all: "Tất cả sản phẩm",
      mouse: "Chuột",
      keyboard: "Bàn phím",
      headphone: "Tai nghe",
      powerbank: "Sạc dự phòng",
    };

    name = categoryNames[category] || "Tất cả sản phẩm";

    if (titleName) titleName.textContent = name;
    if (titlePath) titlePath.textContent = name;
  }

  // --- 6. GẮN CÁC BỘ LẮNG NGHE SỰ KIỆN ---

  // Sự kiện cho các nút Danh mục

  // 1. Tìm tất cả các link danh mục
  const categoryLink = document.querySelectorAll(
    ".products__category__items--details"
  );
  const allCategoriesLink = document.querySelector('[data-category="all"]');

  // 2. Mặc định kích hoạt "Tất cả" khi tải trang
  if (allCategoriesLink) {
    allCategoriesLink.classList.add("active");
  }

  // 3. Gắn sự kiện click cho từng link danh mục
  categoryLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Ngăn thẻ <a> tải lại trang
      e.preventDefault();

      // Ngăn sự kiện click này chạy đến các hàm khác (như hàm SPA ở dưới)
      e.stopPropagation();

      // Luôn lấy thẻ <a>, ngay cả khi click vào <img> hay <span> bên trong
      const clickedLink = e.currentTarget;
      const isAllCategory = clickedLink === allCategoriesLink;

      if (isAllCategory) {
        // KỊCH BẢN 1: Click vào "Tất cả"
        clickedLink.classList.add("active");

        // Xóa .active khỏi TẤT CẢ các mục khác
        categoryLink.forEach((otherLink) => {
          if (otherLink !== allCategoriesLink) {
            otherLink.classList.remove("active");
          }
        });
      } else {
        // KỊCH BẢN 2: Click vào mục khác (Chuột, Bàn phím...)

        // Tắt "Tất cả" đi
        if (allCategoriesLink) {
          allCategoriesLink.classList.remove("active");
        }

        // Đây là điểm khác biệt: .toggle() sẽ bật nếu đang tắt, và tắt nếu đang bật
        clickedLink.classList.toggle("active");
      }

      // Xóa trạng thái focus để tránh CSS :focus giữ hiệu ứng hiển thị tick
      if (document.activeElement === clickedLink) {
        clickedLink.blur();
      }

      // Reset tìm kiếm khi click vào category
      currentSearchQuery = "";
      if (searchInput) searchInput.value = "";

      // 4. Gọi hàm lọc sản phẩm
      filterProductsFromActiveCategories();
    });
  });
  filterProductsFromActiveCategories();
  // Sự kiện cho các checkbox Mức giá
  priceCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      currentPriceFilters = []; // Xây dựng lại mảng filter
      priceCheckboxes.forEach((box) => {
        if (box.checked) {
          currentPriceFilters.push(box.value);
        }
      });

      // Logic cho checkbox "Tất cả"
      if (currentPriceFilters.includes("all")) {
        currentPriceFilters = ["all"]; // Chỉ giữ lại 'all'
        priceCheckboxes.forEach((box) => {
          if (box.value !== "all") box.checked = false;
        });
      } else {
        // Nếu chọn mục khác, bỏ check 'Tất cả'
        document.getElementById("all").checked = false;
      }

      currentPage = 1; // Reset về trang 1
      filterProductsFromActiveCategories(); // Lọc và hiển thị lại
    });
  });

  // Sự kiện cho dropdown Sắp xếp
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    currentPage = 1; // Reset về trang 1
    filterProductsFromActiveCategories(); // Vẽ lại
    scrollToTop(); // Cuộn lên đầu trang
  });

  // Sự kiện cho nút "Đặt lại"
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Reset state
    currentPage = 1;
    currentPriceFilters = ["all"];
    currentSort = "default";
    currentSearchQuery = ""; // Reset từ khóa tìm kiếm

    // Reset UI
    categoryLinks.forEach((l) => l.classList.remove("active"));
    document.querySelector('[data-category="all"]').classList.add("active");

    priceCheckboxes.forEach((box) => (box.checked = false));
    document.getElementById("all").checked = true;

    sortSelect.value = "default";

    // Xóa nội dung trong ô search
    if (searchInput) searchInput.value = "";

    updateTitle("all");
    filterProductsFromActiveCategories();
    scrollToTop(); // Cuộn lên đầu trang
  });

  // Sự kiện cho nút Previous
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      filterProductsFromActiveCategories();
      scrollToTop(); // Cuộn lên đầu trang
    }
  });

  // Sự kiện cho nút Next
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      filterProductsFromActiveCategories();
      scrollToTop(); // Cuộn lên đầu trang
    }
  });

  // Cho phép click cả vào vùng bao quanh mũi tên để chuyển trang
  const prevContainer = prevButton
    ? prevButton.closest(".products__pagination__cover__arr-cover")
    : null;
  if (prevContainer) {
    prevContainer.addEventListener("click", () => {
      if (currentPage > 1) {
        prevButton.click();
      }
    });
  }

  const nextContainer = nextButton
    ? nextButton.closest(".products__pagination__cover__arr-cover")
    : null;
  if (nextContainer) {
    nextContainer.addEventListener("click", () => {
      if (currentPage < totalPages) {
        nextButton.click();
      }
    });
  }

  // Xử lý tìm kiếm
  function handleSearch() {
    const query = searchInput ? searchInput.value.trim() : "";

    if (query === "") {
      alert("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    // Chuyển đến trang sản phẩm
    showView("view-products");

    // Cập nhật state
    currentSearchQuery = query;
    currentPage = 1;

    // Reset UI category (không highlight category nào)
    categoryLinks.forEach((l) => l.classList.remove("active"));
    const allCategoryLink = document.querySelector('[data-category="all"]');
    if (allCategoryLink) allCategoryLink.classList.add("active");

    // Cập nhật tiêu đề
    if (titleName) titleName.textContent = "Kết quả tìm kiếm";
    if (titlePath) titlePath.textContent = `"${query}"`;

    // Hiển thị kết quả
    filterProductsFromActiveCategories();
    scrollToTop();
  }

  // Event listener cho nút search
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleSearch();
    });
  }

  // Event listener cho phím Enter trong ô search
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      }
    });
  }

  document.addEventListener("click", (e) => {
    const tile = e.target.closest(
      '.category-feature-item[data-view="products"]'
    );
    if (!tile) return;

    e.preventDefault();

    // Dùng .dataset thay vì getAttribute
    const category = tile.dataset.category || "all";

    showView("view-products");

    // Reset về trang 1 và category được chọn
    currentPage = 1;
    currentSearchQuery = ""; // Reset từ khóa tìm kiếm

    // Reset UI
    categoryLinks.forEach((l) => l.classList.remove("active"));
    const sidebarLink = document.querySelector(
      `#category-filters [data-category="${category}"]`
    );
    if (sidebarLink) sidebarLink.classList.add("active");

    // Xóa nội dung trong ô search
    if (searchInput) searchInput.value = "";

    // Luôn hiển thị tiêu đề "Tất cả sản phẩm" khi click vào category feature
    if (titleName) titleName.textContent = "Tất cả sản phẩm";
    if (titlePath) titlePath.textContent = "Tất cả sản phẩm";
    
    filterProductsFromActiveCategories();

    // Đơn giản hóa việc cuộn trang
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 2. Lắng nghe tất cả các cú click trên thanh điều hướng và dropdown
  // Sử dụng event delegation trên document với capture phase để xử lý trước
  document.addEventListener("click", (e) => {
    // Ưu tiên: nếu click vào nút thêm giỏ hàng thì bỏ qua handler điều hướng
    if (
      e.target.closest(
        ".products__list__item--img__cart, .product-hottest-item--img__cart"
      )
    ) {
      return;
    }
    // Bỏ qua khi click bên trong pagination để tránh xung đột điều hướng SPA
    if (e.target.closest("#pagination")) {
      return;
    }
    // Hỗ trợ cả <a> và bất kỳ phần tử nào có data-view (ví dụ: .category-feature-item)
    const link = e.target.closest("a");
    const trigger = e.target.closest("[data-view]");
    if (!link && !trigger) {
      return;
    }
    // XỬ LÝ LINK SẢN PHẨM (trong danh sách sản phẩm)
    if (link.classList.contains("product-link")) {
      e.preventDefault();
      e.stopPropagation(); // Ngăn các handler khác
      e.stopImmediatePropagation();
      const productId = link.getAttribute("data-product-id");
      if (productId && typeof allProduct !== "undefined") {
        displayProductDetails(parseInt(productId));
      }
      return false;
    }
    // Chỉ xử lý các link có thuộc tính data-view
    // Xác định phần tử kích hoạt (ưu tiên link nếu có, fallback trigger)
    const source = link || trigger;
    if (!source.dataset.view) {
      return;
    }

    e.preventDefault(); // Ngăn trình duyệt tải lại trang
    // KHÔNG dùng stopImmediatePropagation() để không chặn các handler khác (như Shop Now button)

    // Lấy thông tin từ các thuộc tính 'data-'
    const viewName = source.dataset.view; // vd: "products"
    const category = source.dataset.category; // vd: "mouse" hoặc undefined

    // 3. Hiển thị view tương ứng
    showView(`view-${viewName}`); // vd: showView("view-products")

    // 4. XỬ LÝ VIEW PRODUCT-DETAILS
    if (viewName === "product-details") {
      const productId = source.getAttribute("data-product-id");
      if (productId && typeof allProduct !== "undefined") {
        displayProductDetails(parseInt(productId));
      }
      return;
    }

    // 5. KIỂM TRA ĐẶC BIỆT: Nếu là link SẢN PHẨM
    if (viewName === "products") {
      // Nếu có một danh mục được chỉ định (vd: "mouse")
      if (category) {
        // CẬP NHẬT TRẠNG THÁI CỦA TRANG SẢN PHẨM
        currentPage = 1;
        currentSearchQuery = ""; // Reset từ khóa tìm kiếm

        // Đồng bộ hóa bộ lọc (ví dụ: làm cho nút 'Chuột' có class 'active')
        categoryLinks.forEach((l) => l.classList.remove("active"));
        const activeCategoryLink = document.querySelector(
          `#category-filters [data-category="${category}"]`
        );
        if (activeCategoryLink) {
          activeCategoryLink.classList.add("active");
        }

        // Xóa nội dung trong ô search
        if (searchInput) searchInput.value = "";

        // Luôn hiển thị tiêu đề "Tất cả sản phẩm" khi click từ header
        if (titleName) titleName.textContent = "Tất cả sản phẩm";
        if (titlePath) titlePath.textContent = "Tất cả sản phẩm";

        // Sau khi đã cập nhật trạng thái, vẽ lại danh sách sản phẩm
        filterProductsFromActiveCategories();
        scrollToTop(); // Cuộn lên đầu trang
      } else {
        // Nếu chỉ bấm vào "Sản phẩm" (không có danh mục)
        // thì reset về "Tất cả" (nút reset sẽ tự xóa search query)
        resetButton.click(); // Giả lập một cú click vào nút "Đặt lại"
      }
    }
  });

  // 5. Đảm bảo checkbox "Tất cả" luôn được chọn mặc định
  const allPriceCheckbox = document.getElementById("all");
  if (allPriceCheckbox) {
    allPriceCheckbox.checked = true;
    currentPriceFilters = ["all"];
  }

  // 6. Hiển thị trang chủ khi tải lần đầu và đảm bảo ở đầu trang
  showView("view-home");
  
  // Đảm bảo scroll ở đầu trang sau khi tất cả đã load
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 0);
});
// Kết thúc DOMContentLoaded
// Hàm hiển thị chi tiết sản phẩm trong SPA
function displayProductDetails(productId) {
  if (typeof allProduct === "undefined") {
    return;
  }

  const product = allProduct.find((p) => p.id === productId);
  if (!product) {
    return;
  }

  const detailView = document.getElementById("view-product-details");
  if (!detailView) {
    return;
  }

  // Cập nhật thông tin sản phẩm
  const img = detailView.querySelector("#product-detail-img");
  const name = detailView.querySelector("#product-detail-name");
  const currentPrice = detailView.querySelector(
    "#product-detail-current-price"
  );
  const oldPrice = detailView.querySelector("#product-detail-old-price");
  const sale = detailView.querySelector("#product-detail-sale");
  const description = detailView.querySelector("#product-detail-description");
  const featuresList = detailView.querySelector("#product-detail-features");
  const breadcrumbCategory = detailView.querySelector("#breadcrumb-category");
  const breadcrumbProductName = detailView.querySelector(
    "#breadcrumb-product-name"
  );

  if (img) {
    img.src = product.imgSrc;
    img.alt = product.name;
  }
  if (name) name.textContent = product.name;
  if (currentPrice) currentPrice.textContent = product.currentPrice;

  if (oldPrice) {
    if (product.orginalPrice) {
      oldPrice.textContent = product.orginalPrice;
      oldPrice.style.display = "inline";
    } else {
      oldPrice.style.display = "none";
    }
  }

  if (sale) {
    if (product.discountPercent) {
      sale.textContent = product.discountPercent;
      sale.style.display = "inline";
    } else {
      sale.style.display = "none";
    }
  }

  // Cập nhật mô tả
  if (description) {
    description.textContent = getDefaultDescription(product);
  }

  // Cập nhật tính năng
  if (featuresList) {
    const features = getDefaultFeatures(product);
    featuresList.innerHTML = features
      .map((feature) => `<li><i class="ri-check-line"></i>${feature}</li>`)
      .join("");
  }

  // Ẩn breadcrumb "Tất cả sản phẩm" - chỉ hiển thị tên sản phẩm
  if (breadcrumbCategory) {
    breadcrumbCategory.innerHTML = ``; // Ẩn phần "Tất cả sản phẩm"
  }
  if (breadcrumbProductName) {
    breadcrumbProductName.textContent = product.name;
  }

  // Cập nhật title
  document.title = product.name + " - Xtray";

  // Hiển thị view
  if (typeof showView === "function") {
    showView("view-product-details");
  } else if (typeof window.showView === "function") {
    window.showView("view-product-details");
  } else {
    // Fallback: tự implement
    document.querySelectorAll(".spa-view").forEach((view) => {
      view.classList.remove("active");
    });
    const viewToShow = document.getElementById("view-product-details");
    if (viewToShow) {
      viewToShow.classList.add("active");
    }
  }

  // Cuộn lên đầu trang
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Khởi tạo chức năng tăng/giảm số lượng
  setupQuantityControls();

  // Khởi tạo nút "Thêm vào giỏ" cho trang chi tiết sản phẩm
  setupAddToCartButton(product);
}

// Hàm thiết lập điều khiển số lượng
function setupQuantityControls() {
  const quantityInput = document.getElementById("product-quantity");
  const decreaseBtn = document.querySelector(".products__show-right-buy-in");
  const increaseBtn = document.querySelector(".products__show-right-buy-de");

  if (!quantityInput || !decreaseBtn || !increaseBtn) {
    return; // Không tìm thấy các phần tử, có thể view chưa được hiển thị
  }

  // Luôn reset số lượng về 1 mỗi khi mở trang chi tiết sản phẩm
  quantityInput.value = "1";

  // Xóa event listeners cũ (nếu có) để tránh duplicate
  const newDecreaseBtn = decreaseBtn.cloneNode(true);
  const newIncreaseBtn = increaseBtn.cloneNode(true);
  decreaseBtn.parentNode.replaceChild(newDecreaseBtn, decreaseBtn);
  increaseBtn.parentNode.replaceChild(newIncreaseBtn, increaseBtn);

  // Lấy lại các phần tử sau khi clone
  const decrease = document.querySelector(".products__show-right-buy-in");
  const increase = document.querySelector(".products__show-right-buy-de");

  // Hàm kiểm tra và cập nhật số lượng
  function updateQuantity(newValue) {
    let quantity = parseInt(newValue) || 1;

    // Đảm bảo số lượng trong khoảng hợp lệ
    if (quantity < 1) {
      quantity = 1;
    }
    // Có thể thêm giới hạn tối đa nếu cần
    // if (quantity > maxQuantity) {
    //   quantity = maxQuantity;
    // }

    quantityInput.value = quantity;
    return quantity;
  }

  // Xử lý khi nhấn nút giảm (-)
  decrease.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const currentValue = parseInt(quantityInput.value) || 1;
    updateQuantity(currentValue - 1);
  });

  // Xử lý khi nhấn nút tăng (+)
  increase.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const currentValue = parseInt(quantityInput.value) || 1;
    updateQuantity(currentValue + 1);
  });

  // Xử lý khi người dùng nhập trực tiếp vào input
  quantityInput.addEventListener("change", function () {
    updateQuantity(this.value);
  });

  // Xử lý khi người dùng nhập (realtime validation)
  quantityInput.addEventListener("input", function () {
    // Chỉ cho phép nhập số
    this.value = this.value.replace(/[^\d]/g, "");
  });

  // Xử lý phím Enter
  quantityInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateQuantity(this.value);
      this.blur(); // Bỏ focus sau khi nhập
    }
  });
}

// Hàm thiết lập nút "Thêm vào giỏ" cho trang chi tiết sản phẩm
function setupAddToCartButton(product) {
  const addToCartBtn = document.getElementById("product-add-to-cart");

  if (!addToCartBtn) {
    return; // Không tìm thấy nút
  }

  // Xóa event listener cũ (nếu có) để tránh duplicate bằng cách clone nút
  const newBtn = addToCartBtn.cloneNode(true);
  addToCartBtn.parentNode.replaceChild(newBtn, addToCartBtn);

  const btn = document.getElementById("product-add-to-cart");

  // Thêm event listener mới
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Lấy số lượng từ input
    const quantityInput = document.getElementById("product-quantity");
    const quantity = parseInt(quantityInput?.value) || 1;

    // Lấy thông tin sản phẩm từ product object (đã có sẵn khi gọi hàm)
    const productName = product.name;
    const priceText = product.currentPrice;
    const price = parseInt(priceText.replace(/[^\d]/g, ""));
    const image = product.imgSrc;

    // Gọi hàm addToCart với số lượng
    if (typeof addToCart === "function") {
      addToCart(productName, price, image, quantity);
    }
  });

  // Thiết lập nút "Mua ngay" để chuyển thẳng đến trang thanh toán
  setupBuyNowButton(product);
}

// Hàm thiết lập nút "Mua ngay"
function setupBuyNowButton(product) {
  const buyNowBtn = document.querySelector(".products__show-right-buy-buy");

  if (!buyNowBtn) {
    return;
  }

  // Xóa event listener cũ bằng cách clone nút
  const newBtn = buyNowBtn.cloneNode(true);
  buyNowBtn.parentNode.replaceChild(newBtn, buyNowBtn);

  const btn = document.querySelector(".products__show-right-buy-buy");

  // Thêm event listener mới
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Lấy số lượng từ input
    const quantityInput = document.getElementById("product-quantity");
    const quantity = parseInt(quantityInput?.value) || 1;

    // Lấy thông tin sản phẩm
    const productName = product.name;
    const priceText = product.currentPrice;
    const price = parseInt(priceText.replace(/[^\d]/g, ""));
    const image = product.imgSrc;

    // Xóa giỏ hàng hiện tại và thêm sản phẩm vào giỏ hàng mới
    cart = [
      { name: productName, price: price, image: image, quantity: quantity },
    ];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Mở modal giỏ hàng và hiển thị trang thanh toán
    if (window.router && typeof window.router.openModal === "function") {
      window.router.openModal("cart-modal");
      // Cập nhật cart và checkout
      renderCart();
      renderCheckout();
      // Chuyển đến trang thanh toán
      setTimeout(() => {
        showPage("thanhtoan-page");
      }, 100);
    }
  });
}

// --- 2. CÁC HÀM TIỆN ÍCH (Giữ nguyên) ---

// Hàm lấy tham số từ URL query string
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Hàm chuyển đổi category sang tên tiếng Việt
function getCategoryName(category) {
  const categoryMap = {
    keyboard: "Bàn phím",
    mouse: "Chuột",
    headphone: "Tai nghe",
    powerbank: "Sạc dự phòng",
  };
  return categoryMap[category] || category;
}

// Hàm tạo mô tả mặc định dựa trên category
function getDefaultDescription(product) {
  const { category, name } = product; // Gọn hơn
  const descriptions = {
    keyboard: `${name} là bàn phím cơ chất lượng cao với thiết kế hiện đại, mang đến trải nghiệm gõ phím mượt mà và chính xác. Với các phím cơ có độ bền cao và phản hồi nhanh, sản phẩm này phù hợp cho cả công việc và giải trí. Bàn phím được trang bị đèn LED RGB đẹp mắt và nhiều tính năng tiện ích khác.`,
    mouse: `${name} là chuột gaming chuyên nghiệp với độ chính xác cao và thiết kế ergonomic thoải mái. Với cảm biến quang học tiên tiến, chuột mang đến độ nhạy cao và phản hồi nhanh, phù hợp cho cả gaming và công việc hàng ngày. Sản phẩm được làm từ chất liệu cao cấp, bền bỉ theo thời gian.`,
    headphone: `${name} là tai nghe gaming chất lượng cao với âm thanh sống động và rõ ràng. Với công nghệ âm thanh tiên tiến, tai nghe mang đến trải nghiệm âm thanh chân thực, bass mạnh mẽ và khả năng chống ồn tốt. Thiết kế thoải mái, phù hợp cho sử dụng lâu dài.`,
    powerbank: `${name} là sạc dự phòng công suất cao với dung lượng pin lớn, đáp ứng nhu cầu sạc cho nhiều thiết bị. Với công nghệ sạc nhanh và an toàn, sản phẩm giúp bạn luôn có nguồn năng lượng dự phòng khi cần thiết. Thiết kế gọn nhẹ, dễ dàng mang theo mọi nơi.`,
  };
  return (
    descriptions[category] ||
    `${name} là sản phẩm chất lượng cao với thiết kế hiện đại và nhiều tính năng tiện ích.`
  );
}

// Hàm tạo danh sách tính năng mặc định
function getDefaultFeatures(product) {
  const { category } = product; // Gọn hơn
  const featuresMap = {
    keyboard: [
      "Thiết kế chắc chắn và bền bỉ",
      "Phím cơ có độ bền cao",
      "Phản hồi nhanh và chính xác",
      "Đèn LED RGB đẹp mắt",
      "Tương thích đa nền tảng",
    ],
    mouse: [
      "Cảm biến quang học độ chính xác cao",
      "Thiết kế ergonomic thoải mái",
      "Độ nhạy cao, phản hồi nhanh",
      "Bề mặt chống trượt",
      "Tuổi thọ pin/switch lâu dài",
    ],
    headphone: [
      "Âm thanh sống động và chân thực",
      "Bass mạnh mẽ, treble rõ ràng",
      "Khả năng chống ồn tốt",
      "Thiết kế thoải mái, nhẹ nhàng",
      "Micro tích hợp chất lượng cao",
    ],
    powerbank: [
      "Dung lượng pin lớn, sạc được nhiều lần",
      "Công nghệ sạc nhanh",
      "Bảo vệ an toàn đa lớp",
      "Thiết kế gọn nhẹ, dễ mang theo",
      "Tương thích với nhiều thiết bị",
    ],
  };
  return (
    featuresMap[category] || [
      "Chất lượng cao",
      "Thiết kế hiện đại",
      "Bền bỉ theo thời gian",
      "Giá trị tốt",
      "Hỗ trợ bảo hành đầy đủ",
    ]
  );
}

// DOM elements for product details
const DOM = {
  breadcrumb: document.querySelector('.breadcrumb'),
  img: document.getElementById('product-detail-img'),
  name: document.getElementById('product-detail-name'),
  currentPrice: document.getElementById('product-detail-current-price'),
  oldPrice: document.getElementById('product-detail-old-price'),
  salePercent: document.getElementById('product-detail-sale'),
  description: document.getElementById('product-detail-description'),
  featuresList: document.getElementById('product-detail-features')
};

// Hàm cập nhật breadcrumb
function updateBreadcrumb(product) {
  const categoryName = getCategoryName(product.category);
  if (DOM.breadcrumb) {
    // Clear existing content
    DOM.breadcrumb.innerHTML = '';
    
    // Create breadcrumb elements safely
    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Trang chủ';
    
    const sep1 = document.createElement('span');
    sep1.className = 'breadcrumb-sep';
    sep1.innerHTML = '&gt;';
    
    const productsLink = document.createElement('a');
    productsLink.href = '#';
    productsLink.textContent = 'Sản phẩm';
    
    const sep2 = document.createElement('span');
    sep2.className = 'breadcrumb-sep';
    sep2.innerHTML = '&gt;';
    
    const categoryLink = document.createElement('a');
    categoryLink.href = '#';
    categoryLink.textContent = categoryName;
    
    const sep3 = document.createElement('span');
    sep3.className = 'breadcrumb-sep';
    sep3.innerHTML = '&gt;';
    
    const productSpan = document.createElement('span');
    productSpan.textContent = product.name;
    
    // Append all elements
    DOM.breadcrumb.appendChild(homeLink);
    DOM.breadcrumb.appendChild(document.createTextNode(' '));
    DOM.breadcrumb.appendChild(sep1);
    DOM.breadcrumb.appendChild(document.createTextNode(' '));
    DOM.breadcrumb.appendChild(productsLink);
    DOM.breadcrumb.appendChild(document.createTextNode(' '));
    DOM.breadcrumb.appendChild(sep2);
    DOM.breadcrumb.appendChild(document.createTextNode(' '));
    DOM.breadcrumb.appendChild(categoryLink);
    DOM.breadcrumb.appendChild(document.createTextNode(' '));
    DOM.breadcrumb.appendChild(sep3);
    DOM.breadcrumb.appendChild(document.createTextNode(' '));
    DOM.breadcrumb.appendChild(productSpan);
  }
}

// Hàm hiển thị sản phẩm (Tối ưu)
function displayProduct(product) {
  // Cập nhật hình ảnh, tên, giá
  DOM.img.src = product.imgSrc;
  DOM.img.alt = product.name;
  DOM.name.textContent = product.name;
  DOM.currentPrice.textContent = product.currentPrice;

  // Cập nhật giá (Tối ưu logic ẩn/hiện)
  DOM.oldPrice.textContent = product.originalPrice || "";
  DOM.oldPrice.style.display = product.originalPrice ? "inline" : "none";

  DOM.salePercent.textContent = product.discountPercent || "";
  DOM.salePercent.style.display = product.discountPercent ? "inline" : "none";

  // Cập nhật mô tả (Tối ưu logic)
  DOM.description.textContent =
    product.description || getDefaultDescription(product);

  // Cập nhật tính năng (Tối ưu logic)
  const features = product.features || getDefaultFeatures(product);
  DOM.featuresList.innerHTML = features
    .map((feature) => `<li><i class="ri-check-line"></i>${feature}</li>`)
    .join("");

  // Cập nhật breadcrumb và title trang
  updateBreadcrumb(product);
  document.title = product.name + " - Xtray";
}

// Hàm khởi tạo
function init() {
  const productId = getURLParameter("id");
  if (!productId) {
    return;
  }

  if (typeof allProduct === "undefined") {
    return;
  }

  const product = allProduct.find((p) => p.id === parseInt(productId));

  if (!product) {
    alert("Không tìm thấy sản phẩm!");
    return;
  }

  displayProduct(product);
}

// Chạy hàm init khi HTML đã được tải xong
window.addEventListener("DOMContentLoaded", init);
