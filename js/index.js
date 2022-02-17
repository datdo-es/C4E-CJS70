import Header from "./containers/header/index.js";
import Home from "./containers/home/index.js";
import Footer from "./containers/footer/index.js";

class App {
  $activeScreen;
  constructor() {
    this.setUpMain();
  }

  setUpMain() {
    let screen;
    //TODO:create home screen
    screen = new Home();
    this.changeActiveScreen(screen);
  }

  changeActiveScreen(screen) {
    // login
    const appEle = document.getElementById("app");
    appEle.innerHTML = "";

    let header = new Header();
    let footer = new Footer();

    //  tạo ra body
    let bodyEle = document.getElementById("body");
    if (!bodyEle) {
      bodyEle = document.createElement("div");
      bodyEle.id = "body";
      
    }

    bodyEle.innerHTML = "";

    header.render(appEle);
    appEle.append(bodyEle);
    footer.render(appEle);

    if (screen) {
      this.$activeScreen = screen;
      screen.render(bodyEle);
    }
  }
}

const app = new App();
export default app;
