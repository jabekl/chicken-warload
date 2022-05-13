var mouseCursor = document.querySelector('.cursor');
var counter = document.getElementById("counter")
var nameForm = document.getElementById("name-form")


function chickenFunction() {
    // position chicken
    let random1 = Math.floor(Math.random() * (document.documentElement.clientHeight - 50)).toString()
    let random2 = Math.floor(Math.random() * (document.documentElement.clientWidth - 50)).toString()
    chicken.style.top = random1 + "px"
    chicken.style.left = random2 + "px"


}

function closeNameForm() {
  nameForm.style.top = "0%";
  nameForm.style.left = "0%";
  nameForm.style.transform = "translate(-100%, -100%)"
  const username = document.getElementById("username-input").value
  console.log(username)
}

function cursor(e){
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';

}

function showNameForm() {
  nameForm.style.top = "50%";
  nameForm.style.left = "50%";
  nameForm.style.transform = "translate(-50%, -50%)"
}
  
function explode(x, y) {
    var particles = 15,
      explosion = $('<div class="explosion"></div>');
  
    $('body').append(explosion);
  
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);
  
    for (var i = 0; i < particles; i++) {
      var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), 
        elm = $('<div class="particle" style="' +
          'background-color: rgb(' + color + ') ;' +
          'top: ' + y + 'px; ' +
          'left: ' + x + 'px"></div>');
  
      if (i == 0) {
        elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
          explosion.remove();
        });
      }
      explosion.append(elm);
    }
    counter.innerText = Number(counter.innerText) + 1
    chickenFunction()
  }
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }



window.onload = function() {
    showNameForm()  
    var chicken = document.getElementById("chicken")
    chickenFunction()
    window.addEventListener('mousemove',cursor)
    chicken.addEventListener("click", (e) => {
        explode(e.pageX, e.pageY);
    })
} 
