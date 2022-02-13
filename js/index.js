import Header from "./containers/footer/index.js";
// import Body from "./containers/footer/index.js";
import Footer from "./containers/footer/index.js";

class App{
    $activeScreen
    constructor(){
        this.setUpMain();
    }
    setUpMain() {
        // let header = new Header;
        // let body = new Body;
        let footer = new Footer();
        // let screen;
        screen.appendChild(
            // header.render(),
            // body.render(),
            footer.render(),
        );
        this.changeActiveScreen(screen);
    };
    changeActiveScreen(screen) {
        const appEle = document.getElementById("app");
        if (appEle) {
            if (this.$activeScreen) {
                appEle.innerHTML = "";
            }
            this.$activeScreen = screen;
            screen.render(appEle);
        }
    }
}

const app = new App();
export default app;