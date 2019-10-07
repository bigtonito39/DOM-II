// Your code goes here

const funBusBig = document.querySelector("img");

funBusBig.addEventListener("dblclick", () => {

    if (funBusBig.requestFullScreen) {
        funBusBig.requestFullScreen();
    } else if (funBusBig.mozRequestFullScreen) {
        funBusBig.mozRequestFullScreen();
    } else if (funBusBig.webkitRequestFullScreen) {
        funBusBig.webkitRequestFullScreen();
    } else {
        false;
    }
});