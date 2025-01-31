//  Dynamic Projects Data
const projects = [
    { name: "Garment Website", link: "https://github.com/Venkhatraman97/Garment", image: "images/garments.png" },
    { name: "Photography Website", link: "https://github.com/Venkhatraman97/Photography", image: "images/photography.png" },
    { name: "JavaScript To-do List", link: "https://github.com/Venkhatraman97/To-do-list-", image: "images/to-do list.png" },
    { name: "JavaScript Poll App", link: "https://github.com/Venkhatraman97/Online-Polling", image: "images/online polling.png" }

];

//  Display Projects Dynamically
function renderProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = ""; 

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}" width="100%">
            <h3>${project.name}</h3>
            <a href="${project.link}" class="btn btn-primary">View</a>
        `;
        container.appendChild(projectCard);
    });
}

//  Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

//  Smooth Scroll for Navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

//  Run Functions
renderProjects();
