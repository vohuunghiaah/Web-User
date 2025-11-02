import { admin as initialAccount } from "./data/account.js";

const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorageData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

let adminUsersList = getLocalStorageData("admin") || [];

// Kiểm tra xem admin đã tồn tại trong mảng chưa
const adminAccountExists = adminUsersList.some((user) => user.role === "admin");

// Nếu admin CHƯA tồn tại
if (!adminAccountExists) {
  // Lưu lại vào localStorage
  setLocalStorageData("admin", initialAccount);
  console.log("Đã tự động thêm tài khoản admin vào localStorage (key: admin).");
}

// Hàm xử lý đăng nhập
function handleLogin(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;
  const errorMessageElement = document.getElementById("error-message");

  // Lấy admin từ localStorage (key: 'admin')
  const adminAccountsList = getLocalStorageData("admin") || [];

  // Tìm user
  const authenticatedAdmin = adminAccountsList.find(
    (adminAccount) => adminAccount.name === enteredUsername && adminAccount.password === enteredPassword
  );

  if (authenticatedAdmin) {
    // Đăng nhập thành công
    errorMessageElement.style.display = "none"; // Ẩn thông báo lỗi

    // Lưu 'currentAdmin'
    setLocalStorageData("currentAdmin", authenticatedAdmin);

    //Kiểm tra vai trò VÀ chuyển hướng
    if (authenticatedAdmin.role === "admin") {
      window.location.href = "./index.html"; // Chuyển đến trang admin
    }
  } else {
    // Đăng nhập thất bại
    errorMessageElement.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
});
