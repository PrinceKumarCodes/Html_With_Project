document.addEventListener("DOMContentLoaded", () => {
  // Search Box Animation
  const searchInput = document.querySelector("input");

  searchInput.addEventListener("focus", () => {
    searchInput.style.width = "60%";
    searchInput.style.transition = "0.3s ease-in-out";
  });

  searchInput.addEventListener("blur", () => {
    searchInput.style.width = "50%";
  });

  // Navbar Animation
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "#cc2b2b";
      header.style.transition = "0.3s";
    } else {
      header.style.background = "#ff3f3f";
    }
  });

  // Smooth Scrolling Effect
  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
