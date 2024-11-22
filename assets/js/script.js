"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * new
 */

// document.querySelectorAll(".list-link").forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault(); // 防止跳轉
//     const hiddenContent = this.nextElementSibling; // 找到相鄰的隱藏內容
//     if (hiddenContent) {
//       hiddenContent.classList.toggle("show"); // 切換展開/收起
//     }
//   });
// });

// 選取所有的列表連結
const listLinks = document.querySelectorAll(".hero-list .list-link");

// 為每個連結添加點擊事件
listLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // 防止默認的跳轉行為

    // 獲取當前項目的隱藏內容
    const hiddenContent = link.nextElementSibling;

    // 如果當前項目已展開，則直接隱藏並返回
    if (hiddenContent.classList.contains("show")) {
      hiddenContent.classList.remove("show");
      return;
    }

    // 隱藏所有已展開的隱藏內容
    document.querySelectorAll(".hidden-content.show").forEach((content) => {
      content.classList.remove("show");
    });

    // 展開當前項目
    hiddenContent.classList.add("show");
  });
});
