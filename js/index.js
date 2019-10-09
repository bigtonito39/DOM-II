// Your code goes here

const funBusBig = document.querySelector("img");

//event listener function to make an image full screen and compatible in any brower
//when double clicked "dblclick"
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

//will make images to get bigger and smaller
const images = document.querySelectorAll(".content-section img");;

function mouseinOut() {
    //since images is a node list you have to do a for loop so that i = to 0 or 1
    for (let i = 0; i < images.length; i++) {
        //event listener to make an image 90% when the mouse is not arround "mouseout:
        images[i].addEventListener("mouseout", (e) => {
            e.target.style.maxWidth = "90%";
            event.stopPropagation()
        });
        //event listener to make an image zoom out when mouse "mouseover"
        images[i].addEventListener("mouseover", (e) => {
            e.target.style.maxWidth = "300%";
            event.stopPropagation()
        });
    }
}
mouseinOut();

//make image disapear when wheeling the mouse;
const wheeloutIn = document.querySelector(".content-destination img");

function wheelinOut() {

    wheeloutIn.addEventListener("wheel", (e) => {
        e.target.style.display = "none";
        event.stopPropagation()

    })
};
wheelinOut()

//give a message when someone finish loading our page

window.addEventListener('load', () => {
    alert('Thanks for vising our site, let us know if you have any questions !');
});

//using select
const intro = document.querySelector(".home h2");
const introEl = document.createElement("h3");
intro.append(introEl);


intro.addEventListener('select', (event) => {
    event.stopPropagation()
    const log = document.querySelector('.intro h3');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = "you selected:" + " " + selection;

});

//focus using "focus" eveny"
const nav = document.querySelector('.nav');
nav.addEventListener('focus', (event) => {

    event.target.style.background = 'blue';
    event.target.style.color = "white";
}, true);

// remove menu when right clicking using "contextmenu"

const buttons = document.querySelector(".btn")
buttons.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})