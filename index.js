const feature = document.getElementById("feature");
const featureSideBar = document.getElementById("sidebar-feature");
const companySidebar = document.getElementById("sidebar-company");
const sidebarList = document.getElementById("sidebar-list");
const companyList = document.getElementById("list-company");
const company = document.getElementById("company");
const featureItem = document.getElementById("feature-item");
const arrowCompany = document.getElementById("arrow-company");
const arrowFeature = document.getElementById("arrow-feature");
const companyItem = document.getElementById("company-item");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const checArrow = (name) => {
  if (
    name.src ===
    "http://127.0.0.1:5500/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg"
  ) {
    name.src = "./images/icon-arrow-up.svg";
  } else {
    name.src = "./images/icon-arrow-down.svg";
  }
};
feature.addEventListener("click", () => {
  featureItem.classList.toggle("hidden");
  checArrow(arrowFeature);
});
company.addEventListener("click", () => {
  companyItem.classList.toggle("hidden");
  checArrow(arrowCompany);
});
menu.addEventListener("click", () => {
  sidebar.classList.toggle("show-off");
  overlay.classList.toggle("hidden");
});
close.addEventListener("click", () => {
  sidebar.classList.remove("show-off");
  overlay.classList.add("hidden");
});
featureSideBar.addEventListener("click", () => {
  sidebarList.classList.toggle("hidden");
  const img = featureSideBar.getElementsByClassName("arrow-down");
  checArrow(img[0]);
});
companySidebar.addEventListener("click", () => {
  companyList.classList.toggle("hidden");
  const img = companySidebar.getElementsByClassName("arrow-down");
  checArrow(img[0]);
});
