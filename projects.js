const projects = [
  {
    name: "Amazon Clone",
    image: "images/Portfolio/4.png",
    features: [
      'Sign-in functionality using <span class="primary">Local Storage</span>',
      'Country flag updates dynamically using <span class="primary">Flag API</span>',
      'Category-based <span class="primary">product filtering</span>',
      'Search functionality for <span class="primary">quick product lookup</span>',
      'Detailed product page with <span class="primary">"More for you"</span> section',
      'Fully <span class="primary">responsive design</span> for all devices',
    ],
    techStack: "HTML, CSS, JavaScript",
    github: "https://github.com/kaniz-naqvi/Amazon/",
    liveDemo: "https://kaniz-naqvi.github.io/Amazon/",
  },
  {
    name: "Contact Manager",
    image: "images/Portfolio/3.png",
    features: [
      'Easily <span class="primary">add contacts</span> with name, number, and email',
      'Update existing contacts with <span class="primary">edit functionality</span>',
      '<span class="primary">Search contacts</span> instantly by name or number',
      'Contacts are stored using <span class="primary">Local Storage</span> for persistence',
      'Remove unwanted contacts with a <span class="primary">delete option</span>',
    ],
    techStack: "React, Bootstrap",
    github: "https://github.com/kaniz-naqvi/Contact-Manager/",
    liveDemo: "https://contact-manager-black.vercel.app/",
  },
  {
    name: "Movie Land",
    image: "images/Portfolio/5.png",
    features: [
      'A <span class="primary">clean and intuitive UI</span> for easy movie discovery',
      '<span class="primary">Search movies</span> instantly by name with quick results',
      'Displays <span class="primary">movie poster</span> along with release year',
      '<span class="primary">Fast-loading</span> content for a smooth browsing experience',
      '<span class="primary">Fully responsive design</span> across all devices',
    ],
    techStack: "React, CSS",
    github: "https://github.com/kaniz-naqvi/Movie-App",
    liveDemo: "https://movie-app-xi-steel-47.vercel.app/",
  },
];
function renderProjects() {
  const projectsContainer = document.querySelector(".projects");

  projectsContainer.innerHTML += projects
    .map(
      (project) => `
          <div class="proj">
            <article>
              <h3>${project.name}</h3>
              <ul>
                <li><strong>Features:</strong></li>
                <ul>${project.features
                  .map((f) => `<li>${f}</li>`)
                  .join("")}</ul>
                <li><strong>Tech Stack:</strong> ${project.techStack}</li>
                <strong>Links:</strong>
            <a href="${
              project.github
            }" target="_blank" class="primary">GitHub</a> |
            <a href="${
              project.liveDemo
            }" target="_blank" class="primary">Live Demo</a>
              </ul>
            </article>
            <div class="img">
              <img src="${project.image}" alt="${project.name}" />
            </div>
          </div>
        `
    )
    .join("");
}

// Call the function after DOM loads
document.addEventListener("DOMContentLoaded", renderProjects);
