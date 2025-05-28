  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuBtn = document.getElementById("toggleMenuBtn");
    const menuContent = document.getElementById("menuContent");
    const navMenu = document.getElementById("navMenu");

    // Toggle the visibility of the menu
    toggleMenuBtn.addEventListener("click", () => {
      const isVisible = menuContent.style.display === "block";
      menuContent.style.display = isVisible ? "none" : "block";
    });

    // Hide menu if user clicks outside
    window.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target)) {
        menuContent.style.display = "none";
      }
    });
  });

