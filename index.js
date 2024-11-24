const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const tabs = document.querySelectorAll(".deals__tabs .btn");
const contents = document.querySelectorAll(".tab__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Xóa 'active' khỏi các tab và nội dung cũ
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Thêm 'active' vào tab và nội dung mới
    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-id"))
      .classList.add("active");
  });
});
// ------------------------------------Khách hàng noí gì?------------
const next = document.getElementById("sau");
const prev = document.getElementById("truoc");
const khachHangThe = Array.from(document.querySelectorAll(".khach__hang__the"));

next.addEventListener("click", () => {
  for (let index = 0; index < khachHangThe.length; index++) {
    if (khachHangThe[index].classList.contains("hoat__dong")) {
      const nextIndex = (index + 1) % khachHangThe.length;
      khachHangThe[index].classList.remove("hoat__dong");
      khachHangThe[nextIndex].classList.add("hoat__dong");
      break;
    }
  }
});

prev.addEventListener("click", () => {
  for (let index = 0; index < khachHangThe.length; index++) {
    if (khachHangThe[index].classList.contains("hoat__dong")) {
      const prevIndex = (index ? index : khachHangThe.length) - 1;
      khachHangThe[index].classList.remove("hoat__dong");
      khachHangThe[prevIndex].classList.add("hoat__dong");
      break;
    }
  }
});

// Hiệu ứng cuộn cho phần đăng ký
ScrollReveal().reveal(".dang__ky__muc .phan__muc__tieu__de", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".dang__ky__muc .phan__muc__mo__ta", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".dang__ky__muc form", {
  ...scrollRevealOption,
  delay: 1000,
});
// ------------------------------------Khách hàng noí gì?------------