const topHat = document.getElementsByClassName("top-hat")[0];
const zCorgi = document.getElementsByClassName("zindex-corgi")[0];

zCorgi.addEventListener("click", (e) => {
    if (parseInt(topHat.style.zIndex) === 1) {
        topHat.style.zIndex = -1;
    } else {
        topHat.style.zIndex = 1;
    }
});
