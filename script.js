// Navbar Links (Reusable)
const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
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
  { class: "ri-html5-fill html", name: "HTML" },
  { class: "ri-css3-fill css", name: "CSS" },
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
              Hi, I’m Mehak—a curious <span class="primary">coder</span> with a
              passion for building things that work (and sometimes things that
              don’t, but that’s part of the fun). I love
              <span class="primary">solving problems</span>, designing intuitive
              interfaces, and <span class="primary">crafting meaningful</span>
              digital experiences.
            </p>
            <p>
              Currently diving deep into
              <span class="primary">MERN Stack</span> development, I’m leveling
              up my skills in <span class="primary">React</span>,
              <span class="primary">Node.js</span>, and
              <span class="primary">responsive design</span>. When I’m not
              coding or obsessing over K-dramas, you’ll probably find me
              figuring out how to make my
              <span class="primary">next project</span> just a little bit
              cooler.
            </p>
            <p>
              Always learning, always creating. Let’s build something
              <span class="primary">awesome</span> together!
            </p>
            `;
