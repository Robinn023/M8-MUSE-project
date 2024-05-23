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