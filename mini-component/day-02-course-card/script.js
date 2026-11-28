
const courses = [

    {
        title: "C Programming",
        description: "Learn programming fundamentals from scratch and build a strong foundation.",
        image: "c-programming-course.png",
        imageAlt: "C programming course",
        duration: "30 Days",
        level: "Beginner",
        levelIcon: "level-up.png",
        link: "#"
    },

    {
        title: "C++ Programming",
        description: "Learn object-oriented programming and develop problem-solving skills.",
        image: "cpp-course.png",
        imageAlt: "C++ programming course",
        duration: "45 Days",
        level: "Intermediate",
        levelIcon: "level-up.png",
        link: "#"
    },

    {
        title: "Java Programming",
        description: "Explore Java fundamentals and learn to build powerful applications.",
        image: "java-course.png",
        imageAlt: "Java programming course",
        duration: "60 Days",
        level: "Intermediate",
        levelIcon: "level-up.png",
        link: "#"
    },

    {
        title: "Python Programming",
        description: "Start programming with Python and explore its practical applications.",
        image: "python-course.png",
        imageAlt: "Python programming course",
        duration: "30 Days",
        level: "Beginner",
        levelIcon: "level-up.png",
        link: "#"
    },

    {
        title: "Web Development",
        description: "Learn HTML, CSS and JavaScript to build modern websites.",
        image: "web-course.png",
        imageAlt: "Web development course",
        duration: "60 Days",
        level: "Beginner",
        levelIcon: "level-up.png",
        link: "#"
    },

    {
        title: "JavaScript",
        description: "Learn JavaScript and make your websites interactive.",
        image: "javascript-course.png",
        imageAlt: "JavaScript course",
        duration: "30 Days",
        level: "Intermediate",
        levelIcon: "level-up.png",
        link: "#"
    }

];


// Select the HTML elements
const coursesGrid = document.querySelector(".courses-grid");
const originalCard = document.querySelector(".course-card");

// Create a reusable template
const templateCard = originalCard.cloneNode(true);

// Remove the original card
originalCard.remove();


// Function to update card information
function updateCourseCard(card, course) {

    card.querySelector(".course-image")
        .setAttribute("src", course.image);

    card.querySelector(".course-image")
        .setAttribute("alt", course.imageAlt);

    card.querySelector("h2").textContent = course.title;

    card.querySelector(".course-description").textContent =
        course.description;

    card.querySelector("#duration").textContent =
        "Duration: " + course.duration;

    card.querySelector("#level").textContent =
        "Level: " + course.level;
        
    card.querySelector(".image-icon img")
        .setAttribute("src", course.levelIcon);

    card.querySelector(".course-btn")
        .setAttribute("href", course.link);

}


// Generate course cards
courses.forEach(function (course) {

    const newCard = templateCard.cloneNode(true);

    updateCourseCard(newCard, course);

    coursesGrid.appendChild(newCard);

});
