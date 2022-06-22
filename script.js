const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".list-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".list-nav").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const modal_container = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".closeBtn");
const seeProject = document.querySelector(".seeProject");
const modal = document.querySelector(".modal");
// array to store element
let projectList = {
  project1: {
    name: "Tonic",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: new Image(),
    technologies: ["html", "css", "javascript"],
    link_live_version: new URL("https://www.google.com"),
    link_to_source: new URL("https://www.google.com"),
    description: ["Canpoy", "Backend dev", 2015],
  },
  project2: {
    name: "project2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: (new Image().src =
      "/assets/images/Snapshoot-Portfolio.png"),
    technologies: ["html", "css", "javascript"],
    link_live_version: new URL("https://www.google.com"),
    link_to_source: new URL("https://www.google.com"),
  },
};

seeProject.addEventListener("click", () => {
  modal_container.classList.add("show");

  // add header
  let header = document.createElement("h2");
  header.innerHTML = projectList.project1.name;
  header.className = "work-txt-js";
  modal.appendChild(header);
  modal_container.appendChild(modal);
  document.body.appendChild(modal_container);

  // add the second line
  let subtitle = document.createElement("h6");
  subtitle.innerHTML = projectList.project1.description[0];

  // add style to subtitle
  subtitle.classList.add("first-element-ul-js");
  modal.appendChild(subtitle);
  modal_container.appendChild(modal);
  document.body.appendChild(modal_container);

  // the ul contains dev and year
  let ulist = document.createElement("ul");
  let li = document.createElement("li");
  li.innerHTML = projectList.project1.description[1];
  li.classList.add("ul-li-js");
  let li1 = document.createElement("li");
  li1.innerHTML = projectList.project1.description[2];

  // add style ul 
  ulist.classList.add("list-project-js");
  ulist.appendChild(li);
  ulist.appendChild(li1);
  modal.appendChild(ulist);
  modal_container.appendChild(modal);
  document.body.appendChild(modal_container);

  // add img
  let img = document.createElement("img");
  img.innerHTML = projectList.project1.featured_image;
  img.src = "/assets/images/Snapshoot-Portfolio.png";
  img.classList.add("snapshoot-potofolio-js");
  modal.appendChild(img);
  modal_container.appendChild(modal);
  document.body.appendChild(modal_container);

  // add paragraph
  let p = document.createElement("p");
  p.innerHTML = projectList.project1.text;
  p.classList.add("work-paragraph-js");
  modal.appendChild(p);
  modal_container.appendChild(modal);
  document.body.appendChild(modal_container);
  // add technologies
  let technolgiy = document.createElement("ul");
  technolgiy.className = "work-buttons-js ";
  // work buttons
  for (let i = 0; i < 3; i++) {
    li = document.createElement("li");
    li.innerHTML = projectList.project1.technologies[i];
    // add style
    technolgiy.appendChild(li);
  }
  modal.appendChild(technolgiy);
  modal_container.appendChild(modal);
  document.body.appendChild(modal_container);
});
