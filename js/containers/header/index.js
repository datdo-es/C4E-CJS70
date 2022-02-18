import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import app from "../../index.js";
import LoginScreen from "../login/index.js";

class Header {
  container;
  body;
  menu;
  bar;
  search;
  logo;

  home;
  contact;
  sigin;
  login;

  social;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("row", "header");

    this.body = document.createElement("div");
    this.body.classList.add("ts-contain");

    this.logo = document.createElement("div");
    this.logo.classList.add("logo");
    this.logo.innerHTML = `<img src="./img/logo.jpg">`;

    this.bar = document.createElement("div");
    this.bar.classList.add("bar");

    this.menu = document.createElement("nav");
    this.menu.classList.add(
      "menu",
      "navbar",
      "navbar-expand-lg",
      "bg-dark",
      "navbar-light"
    );
    this.menu.innerHTML = `
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <div class="nav-link" id="menu-login">Login <span class="sr-only">(current)</span></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" >Features</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" >Pricing</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" >Disabled</div>
                    </li>
                </ul>
            </div>
        `;

    this.search = new InputComponent("search");

    this.social = document.createElement("ul");
    this.social.classList.add("social");
    this.social.innerHTML = `	
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-google"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-linkedin-in"></i>
        <i class="fa fa-pinterest"></i>
		`;
  }

  handleChangeScreen = (e) => {
    e.preventDefault();
    const login = new LoginScreen();
    app.changeActiveScreen(login);
  };

  render(appEle) {
    this.container.append(this.body, this.bar);
    this.body.append(this.logo);
    this.menu.append(this.social);
    this.bar.append(this.menu);

    appEle.append(this.container);

    const menuLogin = document.getElementById("menu-login");
    menuLogin.addEventListener("click", this.handleChangeScreen);
  }
}
export default Header;
