const btnToggle = document.getElementById("btnToggle");
const nav = document.querySelector(".navigation");
const main = document.querySelector(".container");
const navItem = document.querySelectorAll(".navigation__item");
const navBg = document.querySelector(".navigation__nav");

// navBg.addEventListener("click", (e) => {
//     nav.classList.toggle("active");
//     main.classList.toggle("hide");
// });

btnToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    main.classList.toggle("hide");
});

navItem.forEach((item) =>
    item.addEventListener("click", () => {
        nav.classList.toggle("active");
        main.classList.toggle("hide");
    })
);

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupOpen = document.querySelectorAll("a[href='#popup']");
const popupBox = document.querySelector("#popup");

popupClose.addEventListener("click", (e) => {
    // e.stopPropagation();

    popupBox.classList.toggle("hide");
});

popupOpen.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        // e.stopPropagation();

        popupBox.classList.toggle("hide");
    })
);

// popup.addEventListener("click", (e) => {
//     e.stopPropagation();
//     popupBox.classList.toggle("hide");
// });

window.addEventListener("click", (e) => {
    if (e.target == popupBox) {
        popupBox.classList.toggle("hide");
    }
});
