

let string = document.getElementById("string")

let changebtn = document.getElementById("change")

changebtn.addEventListener("click", function(){string.innerText = "Good Morning!"});

let fontbtn = document.getElementById("fontsize")

fontbtn.addEventListener("click", function(){string.style.fontSize = "x-large"});


let fontsmaller = document.getElementById("fontSmaller")
fontsmaller.addEventListener("click", function(){string.style.fontSize = "x-small"});


let colorChange = document.getElementById("colorChange")
colorChange.addEventListener("click", function(){string.style.color = "blue"});

let backChange = document.getElementById("back")
backChange.addEventListener("click", function(){string.style.backgroundColor = "pink"});

let image = document.getElementById("image")

let imagechange = document.getElementById("imagechange")
imagechange.addEventListener("click", function(){image.src ="https://images.pexels.com/photos/2417848/pexels-photo-2417848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"});





