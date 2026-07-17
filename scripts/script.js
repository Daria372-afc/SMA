// =========================
// Переключение вкладок
// =========================

const tabs = document.querySelectorAll(".services__tab");
const lists = document.querySelectorAll(".services__list");
const showMoreButton = document.querySelector(".services__button");

const VISIBLE_CARDS = 9;

function updateServices() {

    const activeList = document.querySelector(".services__list--active");

    const cards = activeList.querySelectorAll(".service-card");

    cards.forEach((card, index) => {

        if (index < VISIBLE_CARDS) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

    showMoreButton.style.display =
        cards.length > VISIBLE_CARDS ? "block" : "none";
}

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const currentTab = tab.dataset.tab;

        tabs.forEach(item =>
            item.classList.remove("services__tab--active")
        );

        tab.classList.add("services__tab--active");

        lists.forEach(list => {

            list.classList.remove("services__list--active");

            if (list.dataset.content === currentTab) {
                list.classList.add("services__list--active");
            }

        });

        updateServices();

    });

});

// =========================
// Кнопка "Показать ещё"
// =========================

showMoreButton.addEventListener("click", () => {

    const activeList = document.querySelector(".services__list--active");
    const cards = activeList.querySelectorAll(".service-card");

    cards.forEach((card, index) => {

        if (index >= VISIBLE_CARDS) {

            card.style.display = "";

            card.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(20px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 350,
                    delay: (index - VISIBLE_CARDS) * 60,
                    easing: "ease-out",
                    fill: "both"
                }
            );
        }

    });

    showMoreButton.style.display = "none";

});

updateServices();


// =========================
// TOOLS MARQUEE
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const splide = new Splide(".tools__slider", {

        type: "loop",

        arrows: false,
        pagination: false,

        drag: false,

        perPage: 8,
        perMove: 1,

        gap: "40px",

        autoWidth: true,

        clones: 16,

        autoScroll: {
            speed: -1.2,
            pauseOnHover: true,
            pauseOnFocus: false,
        },

    });

    splide.mount(window.splide.Extensions);

});