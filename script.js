document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Dynamic Projects
const projects = [
    { title: "Payroll Service Development", description: "Automated payroll processing system." },
    { title: "AI-Driven Crop Disease Prediction", description: "Identifies crop diseases and suggests treatments." },
    { title: "Smart Saline Bottle", description: "IoT-based saline monitoring system." },
    { title: "Stock Market Tracker", description: "AI-powered stock trend analysis." }
];

const projectList = document.getElementById("project-list");
projects.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectItem);
});

// Dynamic Blog
const blogs = [
    { title: "Future of AI", content: "Exploring AI innovations and trends." },
    { title: "Cybersecurity Challenges", content: "Latest threats and countermeasures." }
];

const blogList = document.getElementById("blog-list");
blogs.forEach(blog => {
    const blogItem = document.createElement("div");
    blogItem.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    blogList.appendChild(blogItem);
});
