// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});

// Dynamic project gallery
const projects = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        imageUrl: 'images/project1.jpg',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        imageUrl: 'images/project2.jpg',
        link: '#'
    },
    // Add more projects as needed
];

function createProjectGallery() {
    const gallery = document.querySelector('.project-gallery');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        
        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.alt = project.title;
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        
        projectLink.appendChild(projectImage);
        projectLink.appendChild(projectTitle);
        projectLink.appendChild(projectDescription);
        
        projectElement.appendChild(projectLink);
        gallery.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createProjectGallery();
});
