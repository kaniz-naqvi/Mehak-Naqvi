// Navbar Links (Reusable)
const navItems = ["Home", "About", "Skills", "Projects", "Contact", "Services"];
const navigators = document.querySelector(".navigators");

if (navigators) {
  navigators.innerHTML = navItems
    .map(
      (item) =>
        `<li class="hover-effect"><a href="#${item.toLowerCase()}">${item}</a></li>`
    )
    .join("");
}

// Social Icons Renderer Class
class IconRenderer {
  constructor(icons) {
    this.icons = icons;
  }

  render() {
    return this.icons
      .map(
        ({ link, class: iconClass, iconClass: iClass }) =>
          `<a href="${link}" target="_blank" class="${iconClass}">
             <i class="${iClass}"></i>
           </a>`
      )
      .join("");
  }
}

const socialIcons = new IconRenderer([
  {
    link: "https://www.instagram.com/kinz_naqvi_/",
    class: "instagram",
    iconClass: "ri-instagram-line",
  },
  {
    link: "https://www.linkedin.com/in/mehak-fatima-naqvi/",
    class: "linkedin",
    iconClass: "ri-linkedin-box-line",
  },
  {
    link: "https://github.com/kaniz-naqvi",
    class: "github",
    iconClass: "ri-github-line",
  },
]);

document.querySelectorAll(".social-icons").forEach((element) => {
  element.innerHTML = socialIcons.render();
});

// Skills Icons Renderer
const skills = [
  //<i class="ri-database-line"></i>
  { class: "ri-nodejs-line express-js", name: "Express JS" },
  { class: "ri-database-line PostgreSQL", name: "PostgreSQL" },
  { class: "ri-tailwind-css-fill tailwind", name: "Tailwind CSS" },
  { class: "ri-bootstrap-fill bootstrap", name: "Bootstrap" },
  { class: "ri-mac-line mac", name: "Responsive Web Design" },
  { class: "ri-reactjs-fill react", name: "React" },
  { class: "ri-git-merge-line git", name: "Git" },
];

// Reusable Function to Render Icons
function renderIcons(containerSelector, icons) {
  const container = document.querySelector(containerSelector);
  if (container) {
    container.innerHTML = icons
      .map(
        ({ class: iconClass, name }) =>
          `<i class="${iconClass}" data-name="${name}"></i>`
      )
      .join("");
  }
}
renderIcons(".icons.skills-icon", skills);

document.querySelector(".intro").innerHTML = `
<p>
              I'm <strong class="primary">Mehak Fatima Naqvi</strong>, a
              <strong class="primary">Full Stack Developer</strong> focused on creating
              responsive, scalable, and user-friendly web applications. I
              specialize in building modern interfaces using
              <strong class="primary">React</strong>, crafting efficient backends with
              <strong class="primary">Node.js</strong>, and ensuring seamless user experiences
              through clean UI and intuitive UX design.
            </p>
            <p>
              My expertise lies in <span class="primary">translating complex ideas into elegant</span>,
              maintainable code. I collaborate with startups and small
              businesses to bring their digital products to life — balancing
              performance, aesthetics, and purpose in every project.
            </p>
`;
