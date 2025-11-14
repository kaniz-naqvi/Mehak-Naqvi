// --- Services Data ---
const services = [
  {
    title: "Frontend Development",
    icon: "ri-computer-line",
    description:
      "I design and build responsive business websites using React and Tailwind CSS or Bootstrap focused on performance, clean structure, and engaging user experience.",
  },
  {
    title: "Backend Engineering",
    icon: "ri-database-2-line",
    description:
      "I create secure and scalable backends using Node.js, Express, and PostgreSQL to handle complex data operations and automation needs.",
  },
  {
    title: "Full Stack Solutions",
    icon: "ri-stack-line",
    description:
      "I handle frontend, backend, and basic DevOps (hosting, CI/CD) for complete project delivery from concept to deployment .",
  },
  {
    title: "UI/UX Design Thinking",
    icon: "ri-palette-line",
    description:
      "I enhance existing websites’ usability and design for better conversions and smoother user journeys.",
  },
  {
    title: "Portfolio & Personal Branding",
    icon: "ri-profile-line",
    description:
      "I design modern portfolio websites and landing pages that help professionals and businesses attract clients and showcase services effectively.",
  },
  {
    title: "Maintenance & Feature Enhancements",
    description:
      "I offer long-term support for existing websites bug fixes, performance improvements, and new feature integration.",
  },
];

// --- Render Services ---
function renderServices() {
  const servicesContainer = document.querySelector(".services-grid");
  if (!servicesContainer) return;

  servicesContainer.innerHTML = services
    .map(
      (service) => `
      <div class="service-card">
        <i class="${service.icon} service-icon"></i>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
      </div>
    `
    )
    .join("");
}

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
    name: "LikhSpire",
    image: "images/Portfolio/home.png", 
    features: [
      'Full <span class="primary">CRUD functionality</span> for blog posts',
      'Users can <span class="primary">write, edit, view, and delete</span> their blogs',
      'Responsive UI built manually using <span class="primary">Bootstrap</span>',
      'Backend powered by <span class="primary">Node.js, Express, PostgreSQL</span>',
      'UI mimics <span class="primary">Medium’s front page</span> layout',
      'Project showcases <span class="primary">prompt engineering & creative naming</span>'
    ],
    techStack: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, PostgreSQL",
    github: "https://github.com/kaniz-naqvi/likhspire",
    liveDemo: ""
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
          <div class="img">
            <a href="${project.liveDemo}" target="_blank">
              <img src="${project.image}" alt="${project.name}" />
              </a>
            </div>
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
            
          </div>
        `
    )
    .join("");
}

// Call the function after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderServices();
});
