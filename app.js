const buttonFormation = document.querySelector("#nav_button_formation");
buttonFormation.addEventListener("click", () => {
  document.querySelector(".formation").classList.remove("displayNone");
  document.querySelector(".career").classList.add("displayNone");
  document.querySelector(".skills").classList.add("displayNone");
  document.querySelector(".hobbies").classList.add("displayNone");
  document.querySelector(".formation").classList.add("section_size");
  for (let i = 0; i < 4; i++) {
    document.querySelector("img").classList.add("imgOnClick");
  }
});

const buttonCareer = document.querySelector("#nav_button_career");
buttonCareer.addEventListener("click", () => {
  document.querySelector(".formation").classList.add("displayNone");
  document.querySelector(".career").classList.remove("displayNone");
  document.querySelector(".skills").classList.add("displayNone");
  document.querySelector(".hobbies").classList.add("displayNone");
  document.querySelector(".career").classList.add("section_size");
});

const buttonskills = document.querySelector("#nav_button_skills");
buttonskills.addEventListener("click", () => {
  document.querySelector(".formation").classList.add("displayNone");
  document.querySelector(".career").classList.add("displayNone");
  document.querySelector(".skills").classList.remove("displayNone");
  document.querySelector(".hobbies").classList.add("displayNone");
  document.querySelector(".skills").classList.add("section_size");
});

const buttonHobbies = document.querySelector("#nav_button_hobbies");
buttonHobbies.addEventListener("click", () => {
  document.querySelector(".formation").classList.add("displayNone");
  document.querySelector(".career").classList.add("displayNone");
  document.querySelector(".skills").classList.add("displayNone");
  document.querySelector(".hobbies").classList.remove("displayNone");
  document.querySelector(".hobbies").classList.add("section_size");
});

const ResetStyleSection = document.querySelector(".container-header-work");
ResetStyleSection.addEventListener("click", () => {
  location.reload();
});

const buttonCoordonnees = document.querySelector("#nav_button_coordonnees");
buttonCoordonnees.addEventListener("click", () => {
  document.querySelector(".Coordonnees").classList.toggle("displayNone");
});
