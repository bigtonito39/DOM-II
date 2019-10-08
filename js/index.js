// Your code goes here

const funBusBig = document.querySelector("img");

//event listener function to make an image full screen and compatible in any brower
//when double clicked
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