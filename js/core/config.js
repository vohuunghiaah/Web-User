// ===================================
// CẤU HÌNH TOÀN CỤC CHO ỨNG DỤNG
// File: js/core/config.js
// ===================================

const APP_CONFIG = {
    // Thông tin ứng dụng
    APP_NAME: 'Xtray - Phụ kiện công nghệ',
    APP_VERSION: '1.0.0',
    COMPANY_NAME: 'Xtray',
    
    // Phân trang
    ITEMS_PER_PAGE: 12,              // Số sản phẩm mỗi trang (user)
    ADMIN_ITEMS_PER_PAGE: 10,        // Số item mỗi trang (admin)
    
    // Giá trị mặc định
    DEFAULT_PROFIT_MARGIN: 15,       // % lợi nhuận mặc định
    MIN_STOCK_WARNING: 10,           // Cảnh báo khi tồn kho < 10
    LOW_STOCK_THRESHOLD: 5,          // Cảnh báo nghiêm trọng < 5
    
    // Trạng thái đơn hàng
    ORDER_STATUS: {
        NEW: 'new',
        PROCESSING: 'processing',
        DELIVERED: 'delivered',
        CANCELLED: 'cancelled'
    },
    
    // Hiển thị trạng thái đơn hàng (Tiếng Việt)
    ORDER_STATUS_TEXT: {
        'new': 'Mới đặt',
        'processing': 'Đang xử lý',
        'delivered': 'Đã giao',
        'cancelled': 'Đã hủy'
    },
    
    // Màu sắc badge theo trạng thái
    ORDER_STATUS_CLASS: {
        'new': 'badge-info',
        'processing': 'badge-warning',
        'delivered': 'badge-success',
        'cancelled': 'badge-danger'
    },
    
    // Phương thức thanh toán
    PAYMENT_METHODS: {
        CASH: 'cash',
        TRANSFER: 'transfer',
        ONLINE: 'online'
    },
    
    PAYMENT_METHOD_TEXT: {
        'cash': 'Tiền mặt khi nhận hàng',
        'transfer': 'Chuyển khoản ngân hàng',
        'online': 'Thanh toán trực tuyến'
    },
    
    // Vai trò người dùng
    USER_ROLES: {
        ADMIN: 'admin',
        CUSTOMER: 'customer'
    },
    
    // Trạng thái tài khoản
    USER_STATUS: {
        ACTIVE: 'active',
        LOCKED: 'locked'
    },
    
    USER_STATUS_TEXT: {
        'active': 'Đang hoạt động',
        'locked': 'Đã khóa'
    },
    
    // Trạng thái sản phẩm
    PRODUCT_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive'
    },
    
    PRODUCT_STATUS_TEXT: {
        'active': 'Đang bán',
        'inactive': 'Đã ẩn'
    },
    
    // Trạng thái phiếu nhập
    IMPORT_STATUS: {
        PENDING: 'pending',
        COMPLETED: 'completed'
    },
    
    IMPORT_STATUS_TEXT: {
        'pending': 'Đang soạn',
        'completed': 'Đã hoàn thành'
    },
    
    // Danh mục sản phẩm
    CATEGORIES: {
        MOUSE: 'mouse',
        KEYBOARD: 'keyboard',
        HEADPHONE: 'headphone',
        POWERBANK: 'powerbank'
    },
    
    CATEGORY_NAMES: {
        'mouse': 'Chuột',
        'keyboard': 'Bàn phím',
        'headphone': 'Tai nghe',
        'powerbank': 'Sạc dự phòng',
        'all': 'Tất cả sản phẩm'
    },
    
    // Định dạng
    DATE_FORMAT: 'DD/MM/YYYY',
    DATETIME_FORMAT: 'DD/MM/YYYY HH:mm',
    CURRENCY: 'VND',
    CURRENCY_SYMBOL: 'đ',
    
    // Validation
    PASSWORD_MIN_LENGTH: 6,
    PHONE_REGEX: /^(0|\+84)[0-9]{9,10}$/, 
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    
    // LocalStorage Keys
    STORAGE_KEYS: {
        USERS: 'xtray_users',
        PRODUCTS: 'xtray_products',
        CATEGORIES: 'xtray_categories',
        ORDERS: 'xtray_orders',
        IMPORTS: 'xtray_imports',
        PROFIT_MARGINS: 'xtray_profit_margins',
        CURRENT_USER: 'xtray_current_user',
        CURRENT_ADMIN: 'xtray_current_admin',
        CART: 'xtray_cart'
    },
    
    // Demo accounts
    DEMO_ACCOUNTS: {
        ADMIN: {
            email: 'admin@xtray.com',
            password: 'admin123'
        },
        USER: {
            email: 'user@xtray.com',
            password: 'user123'
        }
    },
    
    // Messages
    MESSAGES: {
        SUCCESS: {
            LOGIN: 'Đăng nhập thành công!',
            LOGOUT: 'Đã đăng xuất!',
            REGISTER: 'Đăng ký tài khoản thành công!',
            ADD_TO_CART: 'Đã thêm vào giỏ hàng!',
            UPDATE_PROFILE: 'Cập nhật thông tin thành công!',
            CREATE_ORDER: 'Đặt hàng thành công!',
            UPDATE_ORDER: 'Cập nhật đơn hàng thành công!',
            DELETE: 'Xóa thành công!',
            UPDATE: 'Cập nhật thành công!',
            CREATE: 'Thêm mới thành công!'
        },
        ERROR: {
            LOGIN_FAILED: 'Email hoặc mật khẩu không đúng!',
            EMAIL_EXISTS: 'Email đã tồn tại!',
            REQUIRED_FIELDS: 'Vui lòng điền đầy đủ thông tin!',
            INVALID_EMAIL: 'Email không hợp lệ!',
            INVALID_PHONE: 'Số điện thoại không hợp lệ!',
            PASSWORD_TOO_SHORT: 'Mật khẩu phải có ít nhất 6 ký tự!',
            PASSWORD_NOT_MATCH: 'Mật khẩu xác nhận không khớp!',
            UNAUTHORIZED: 'Bạn không có quyền truy cập!',
            NOT_FOUND: 'Không tìm thấy dữ liệu!',
            SERVER_ERROR: 'Có lỗi xảy ra, vui lòng thử lại!'
        },
        CONFIRM: {
            DELETE: 'Bạn có chắc muốn xóa?',
            RESET_PASSWORD: 'Bạn có chắc muốn reset mật khẩu?',
            LOCK_ACCOUNT: 'Bạn có chắc muốn khóa tài khoản này?',
            UNLOCK_ACCOUNT: 'Bạn có chắc muốn mở khóa tài khoản này?',
            CANCEL_ORDER: 'Bạn có chắc muốn hủy đơn hàng này?',
            COMPLETE_IMPORT: 'Bạn có chắc muốn hoàn thành phiếu nhập này? Sau khi hoàn thành sẽ không thể sửa!',
            LOGOUT: 'Bạn có chắc muốn đăng xuất?'
        }
    }
};

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}