var chicken = document.getElementById("chicken-image")

function positionChicken() {
    let random1 = Math.floor(Math.random() * 1000).toString()
    let random2 = Math.floor(Math.random() * 1900).toString()
    console.log(random1, random2)
    chicken.style.top = random1 + "px"
    chicken.style.left = random2 + "px"
}

positionChicken()