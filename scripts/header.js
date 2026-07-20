let buttonOpenBG = document.querySelector(".header__btn-bg");
let burgerMenu = document.querySelector(".burger-menu");
let buttonCloseBG = document.querySelector(".burger-menu__close");

buttonOpenBG.addEventListener("click", () => {
    burgerMenu.classList.add("burger-menu--open");
});

buttonCloseBG.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu--open");
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(32, 41, 56, 0.75)";
        } else {
            header.style.backgroundColor = "rgb(32, 41, 56)";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".input-telephone");

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    }

    function mask(event) {
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        this.value = matrix.replace(/./g, function (char) {
            return /[_\d]/.test(char) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                  ? ""
                  : char;
        });

        if (event.type === "blur") {
            if (this.value.length < 4) this.value = "";
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("input", mask);
        input.addEventListener("focus", mask);
        input.addEventListener("blur", mask);
    });
});

const popupTriggers = document.querySelectorAll(".open-popup"),
    popup = document.querySelector(".popup"),
    closeBtn = popup ? popup.querySelector(".popup-close") : null;

popupTriggers.forEach((t) =>
    t.addEventListener("click", () =>
        popup ? popup.classList.add("popup--active") : null,
    ),
);
popup
    ? popup.addEventListener("click", (e) =>
          e.target === popup ? popup.classList.remove("popup--active") : null,
      )
    : null;
closeBtn
    ? closeBtn.addEventListener("click", () =>
          popup.classList.remove("popup--active"),
      )
    : null;