let menuBtn=document.querySelector('.menu-btn')
let navLinks=document.querySelector('.nav-links')


menuBtn.addEventListener('click',function(){
    navLinks.classList.toggle('show')
    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
    
})

const coursesBtn = document.querySelector(".courses-btn");
const courseDropdown = document.querySelector(".course-dropdown");
coursesBtn.addEventListener("click", function () {

    courseDropdown.classList.toggle("open");

});


// const courseDropdown = document.querySelector(".course-dropdown");

// courseDropdown.addEventListener("mouseenter", function () {
//     courseDropdown.classList.add("open");
// });

// courseDropdown.addEventListener("mouseleave", function () {
//     courseDropdown.classList.remove("open");
// });