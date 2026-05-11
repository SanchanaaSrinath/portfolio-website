// Static Projects Display

const projects = [

  {
    title: "Personal Portfolio Website",
    description:
      "A responsive full-stack portfolio website developed using HTML, CSS, JavaScript, Node.js and Express.js.",

    link: "https://github.com/your-username/portfolio"
  },

  {
    title: "Student Management System",
    description:
      "A CRUD-based web application used to manage student records using Node.js.",

    link: "https://github.com/your-username/student-management"
  },

  {
    title: "To-Do List Application",
    description:
      "A simple and interactive task management application developed using JavaScript.",

    link: "https://github.com/your-username/todo-app"
  }

];

const container = document.getElementById("projects");

projects.forEach(project => {

  const div = document.createElement("div");

  div.classList.add("project-card");

  div.innerHTML = `
    <h3>${project.title}</h3>

    <p>${project.description}</p>

    <button onclick="window.open('${project.link}')">
      View Project
    </button>
  `;

  container.appendChild(div);

});

// Contact Form

document.getElementById("contactForm")
  .addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Message sent successfully!");

    this.reset();

});