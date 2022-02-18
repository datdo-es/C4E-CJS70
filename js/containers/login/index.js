import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import Register from "../signin/index.js";
import app from "../../index.js";

import {checkEmail, checkPassword} from "../../common/validation.js";

class LoginScreen {
  email;
  password;
  btnSubmit;
  link;

  row;

  container;
  formLogin;
  titleScreen;
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("container", "screen");

    this.row = document.createElement("div");
    this.row.classList.add("row","centerContent");

    this.formLogin = document.createElement("form");
    this.formLogin.classList.add("form-container", "col-12");
    this.formLogin.addEventListener("submit", this.handleSubmit);

    this.titleScreen = document.createElement("div");
    this.titleScreen.classList.add("big-title");
    this.titleScreen.innerText = "Login";

    this.link = document.createElement("a");
    this.link.classList.add("sign-link", "text-center");
    this.link.innerText = "Do not have an account";
    this.link.addEventListener("click", this.handleChangeScreen);

    this.email = new InputComponent(
      "Email address",
      "email",
      "login-email",
      "email"
    );
    this.password = new InputComponent(
      "Password",
      "password",
      "login-password",
      "password"
    );
    this.btnSubmit = new ButtonComponent("Sign in", ["bg-btn", "btn", "btn-login"]);
  }

  handleChangeScreen = (e) => {
    e.preventDefault();
    const signUp = new Register();
    app.changeActiveScreen(signUp);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    let isError = false;
    if (checkEmail(email.value) !== null) {
      this.email.setError(checkEmail(email.value));
      isError = true;
    }
    if (checkPassword(password.value) !== null) {
      this.password.setError(checkPassword(password.value));
      isError = true;
    }
    if (!isError) {
      const userLogin = await loginWithEmailPassword(
        email.value,
        password.value
      );
      const mainScreen = new InfoScreen();
      app.changeActiveScreen(mainScreen);
    }
  };

  render(containerEle) {
    this.formLogin.append(
      this.titleScreen,
      this.email.render(),
      this.password.render(),
      this.btnSubmit.render(),
      this.link
    );
    this.row.append(this.formLogin);
    this.container.append(this.row)
    containerEle.appendChild(this.container);
  }
}
export default LoginScreen;
