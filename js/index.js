import Header from "./containers/header/index.js";
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
        let bodyEle = document.createElement("div");
        let footer = new Footer();
        appEle.append(header.render(appEle), bodyEle, footer.render(appEle))
    
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