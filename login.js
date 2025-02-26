// 获取登录表单
const loginForm = document.getElementById("loginForm");

// 监听表单的提交事件
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止表单的默认提交行为

  const email = document.getElementById("email").value; // 获取输入的邮箱
  const password = document.getElementById("password").value; // 获取输入的密码

  // 从 LocalStorage 中获取存储的用户数据
  const storedUserData = JSON.parse(localStorage.getItem("user"));

  if (!storedUserData) {
    // 如果用户数据不存在，提示用户先注册
    alert("没有找到注册用户，请先注册！");
    return;
  }

  // 验证用户的邮箱和密码
  if (email === storedUserData.email && password === storedUserData.password) {
    alert("登录成功！");
    window.location.href = "../index.html"; // 登录成功后跳转到主页面
  } else {
    alert("邮箱或密码错误，请重试！");
  }
});
