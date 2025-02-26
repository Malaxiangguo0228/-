// 获取表单元素
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止表单默认提交行为

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("两次输入的密码不一致，请重新输入！");
    return;
  }

  // 保存注册信息到 LocalStorage
  const userData = {
    email: email,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  alert("注册成功！");
  window.location.href = "../login.html";
});
