let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove',cursor)

function positionChicken() {
    let random1 = Math.floor(Math.random() * 900).toString()
    let random2 = Math.floor(Math.random() * 1800).toString()
    console.log(chicken)
    chicken.style.top = random1 + "px"
    chicken.style.left = random2 + "px"
}

function cursor(e){
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';

}

window.onload = function() {
    var chicken = document.querySelectorAll("chicken")
    positionChicken()
} 