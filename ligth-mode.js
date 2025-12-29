const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const navbar = document.querySelector(".nav");
const heroImage = document.querySelector(".hero-image-wrapper");
const aboutImage = document.querySelector(".about-image-wrapper");
const projectImages = document.querySelectorAll(".project-card-image");

const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
if (themeToggle) {
  themeToggle.style.fontSize = "18px";
  themeToggle.innerHTML =
    savedTheme === "dark"
      ? `<i class="fa-solid fa-moon"></i>`
      : `<i class="fa-solid fa-sun"></i>`;
}

function applyLightThemeStyles() {
  if (navbar) {
    navbar.style.background = "rgba(255, 255, 255, 0.5)";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.webkitBackdropFilter = "blur(10px)";
    navbar.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
  }
  if (heroImage) {
    heroImage.style.filter = "invert(1)";
  }
  if (aboutImage) {
    aboutImage.style.filter = "invert(1)";
  }
  if (projectImages.length > 0) {
    projectImages.forEach((img) => {
      img.style.backgroundColor = "#000";
    });
  }
  const images = document.querySelectorAll('img[style*="filter: invert"]');
  images.forEach((img) => {
    img.style.filter = "invert(0)";
  });

  const specificImages = document.querySelectorAll(".project-card-image img");
  specificImages.forEach((img) => {
    const src = img.getAttribute("src");
    if (
      src === "./img/project-img-18.png" ||
      src === "./img/project-img-14.png" ||
      src === "./img/project-img-15.png" ||
      src === "./img/project-img-10.png"
    ) {
      img.style.filter = "invert(1)";
    }
  });
}

function resetDarkThemeStyles() {
  if (navbar) {
    navbar.style.background = "";
    navbar.style.backdropFilter = "";
    navbar.style.webkitBackdropFilter = "";
    navbar.style.borderBottom = "";
  }
  if (heroImage) {
    heroImage.style.filter = "";
  }
  if (aboutImage) {
    aboutImage.style.filter = "";
  }
  if (projectImages.length > 0) {
    projectImages.forEach((img) => {
      img.style.backgroundColor = "";
    });
  }
  const images = document.querySelectorAll('img[style*="filter: invert"]');
  images.forEach((img) => {
    img.style.filter = "invert(1)";
  });

  const specificImages = document.querySelectorAll(".project-card-image img");
  specificImages.forEach((img) => {
    const src = img.getAttribute("src");
    if (
      src === "./img/project-img-18.png" ||
      src === "./img/project-img-14.png" ||
      src === "./img/project-img-15.png" ||
      src === "./img/project-img-10.png"
    ) {
      img.style.filter = "";
    }
  });
}

function handleThemeChange() {
  const theme = html.getAttribute("data-theme");
  theme === "light" ? applyLightThemeStyles() : resetDarkThemeStyles();
}

handleThemeChange();

const observer = new MutationObserver(handleThemeChange);
observer.observe(html, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.innerHTML =
      newTheme === "dark"
        ? `<i class="fa-solid fa-moon"></i>`
        : `<i class="fa-solid fa-sun"></i>`;
  });
}
