document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".box_login");
  const registerForm = document.querySelector(".box_login_register");
  const registerLink = document.querySelector(".register_link");
  const loginLink = document.querySelector(".login_link");

  loginForm.style.display = "block";
  registerForm.style.display = "none";

  registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Register Handler
  document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = this.username.value.trim();
    const password = this.password.value;

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      alert(data.message);
      if (data.success) {
        this.reset();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
      }
    } catch (err) {
      alert("Registration failed.");
    }
  });

  // Login Handler
  document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = this.username.value.trim();
    const password = this.password.value;

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      alert(data.message || "Login result");

      if (data.success) {
        window.location.href = "homepage/homepage.html"; // update with actual path to home
      }
    } catch (err) {
      alert("Login failed.");
    }
  });
});
