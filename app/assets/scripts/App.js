import "../styles/styles.css";
import "lazysizes";
import Modal from "./modules/Modal";
import Navbar from "./modules/Navbar";

new Modal();
new Navbar();

if (module.hot) {
  module.hot.accept();
}
