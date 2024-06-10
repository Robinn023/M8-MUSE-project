document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.stopPropagation();
    var dropdown = document.getElementById('myDropdown');
    dropdown.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('myDropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

document.getElementById('myDropdown').addEventListener('mouseleave', function() {
    var dropdown = document.getElementById('myDropdown');
    dropdown.classList.remove('show');
});

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

let knop = document.getElementById("knop");
let figure = document.getElementById("figure");
let f = true;

knop.onclick = function(){
    if(f){
        figure.style.display = "flex";
        f = false;
    }
    else{
        figure.style.display = "none";
        f = true;
    }
} 




