const trendingNews = document.querySelectorAll(".trending-img");
const trendingCount = document.querySelectorAll(".trending-count");
const theme_toggle_btn = document.getElementById("theme-toggle-btn");
const body = document.querySelector("body");
const search_btn = document.getElementById("search-btn");
const search_container = document.querySelector(".search-container");
const search_container_close_btn = document.querySelector(
    ".search-container .close-btn"
);
const ham_menu_container = document.querySelector(".ham-menu-container > ul");
const ham_menu = document.querySelector(".sub-nav .ham-menu");

ham_menu.addEventListener("click", () => {
    ham_menu.classList.toggle("active-ham-menu");
    ham_menu_container.classList.toggle("active-ham-menu-container");
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 3,
        },
    },
});

let count = 0;

trendingNews.forEach((element) => {
    trendingCount[count].innerHTML = count + 1;
    count += 1;
});

theme_toggle_btn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        theme_toggle_btn.classList.add("ri-sun-line");
        theme_toggle_btn.classList.remove("ri-moon-clear-line");
    } else {
        localStorage.setItem("theme", "dark");
        theme_toggle_btn.classList.remove("ri-sun-line");
        theme_toggle_btn.classList.add("ri-moon-clear-line");
    }
});

const check_local_storage = () => {
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        theme_toggle_btn.classList.add("ri-sun-line");
        theme_toggle_btn.classList.remove("ri-moon-clear-line");
    } else if (localStorage.getItem("theme") === "dark") {
        body.classList.remove("light-theme");
        theme_toggle_btn.classList.remove("ri-sun-line");
        theme_toggle_btn.classList.add("ri-moon-clear-line");
    }
};
check_local_storage();

search_btn.addEventListener("click", () => {
    ham_menu_container.classList.remove("active-ham-menu-container");
    ham_menu.classList.remove("active-ham-menu");

    search_container.classList.add("show");
    search_container.classList.remove("hidden");
});
search_container_close_btn.addEventListener("click", () => {
    search_container.classList.remove("show");
    search_container.classList.add("hidden");
});
