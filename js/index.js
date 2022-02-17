import Header from "./containers/header/index.js";
import Home from "./containers/home/index.js";
import LoginScreen from "./containers/login/index.js"
import Footer from "./containers/footer/index.js";

class App{
    $activeScreen
    constructor(){
        this.setUpMain();
    }
    setUpMain() {
        let screen;
        this.changeActiveScreen(screen);
    };
    changeActiveScreen(screen) {
        const appEle = document.getElementById("app");
        let header = new Header();
        let bodyEle = new LoginScreen();
        let footer = new Footer();
        // appEle.append(header.render(appEle), bodyEle.render(appEle), footer.render(appEle))
        header.render(appEle)
        bodyEle.render(appEle)
        footer.render(appEle)

        if (bodyEle) {
          if (this.$activeScreen) {
            bodyEle.innerHTML = "";
          }
          this.$activeScreen = screen;
          screen.render(bodyEle);
        }
    
    }
}

const app = new App();
export default app;