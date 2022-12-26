var typed = new Typed(".typing", {
  strings: ["", "Web Developer", "UI Designer", "Content Writer", "Tech Geek"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: !0,
});
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll("section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  let e = navList[i].querySelector("a");
  e.addEventListener("click", function () {
    removeBackSection();
    for (let e = 0; e < totalNavList; e++)
      navList[e].querySelector("a").classList.contains("active") &&
        addBackSection(e),
        navList[e].querySelector("a").classList.remove("active");
    this.classList.add("active"),
      showSection(this),
      window.innerWidth < 1300 && asideSectionTogglerBtn();
  });
}
function removeBackSection() {
  for (let e = 0; e < totalSection; e++)
    allSection[e].classList.remove("back-section");
}
function addBackSection(e) {
  allSection[e].classList.add("back-section");
}
function showSection(e) {
  for (let t = 0; t < totalSection; t++)
    allSection[t].classList.remove("active");
  let a = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + a).classList.add("active");
}
function updateNav(e) {
  for (let t = 0; t < totalNavList; t++) {
    navList[t].querySelector("a").classList.remove("active");
    let a = e.getAttribute("href").split("#")[1];
    a === navList[t].querySelector("a").getAttribute("href").split("#")[1] &&
      navList[t].querySelector("a").classList.add("active");
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  let e = this.getAttribute("data-section-index");
  showSection(this), updateNav(this), removeBackSection(), addBackSection(e);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
function asideSectionTogglerBtn() {
  aside.classList.toggle("open"), navTogglerBtn.classList.toggle("open");
  for (let e = 0; e < totalSection; e++) allSection[e].classList.toggle("open");
}
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
