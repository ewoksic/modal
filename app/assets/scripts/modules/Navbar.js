class Navbar {
  constructor() {
    this.navToggle = document.querySelector(".nav-toggle");
    this.links = document.querySelector(".links");
    this.events();
  }
  events() {
    this.navToggle.addEventListener("click", () => toggleNavbar());
  }

  toggleNavbar() {
    this.links.classList.toggle("show-links");
  }
}

export default Navbar;
