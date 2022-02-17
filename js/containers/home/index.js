import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";

import app from "../../index.js";

class Home{
    container;
    constructor(){
        this.container = document.createElement("div");
        this.container.classList.add("row");
    }

    render(appEle){
        // this.formRegister.append(this.titleScreen,this.name.render(),this.email.render(), this.password.render(),this.repassword.render(),this.btnSubmit.render(),this.link);
        // this.container.append(this.imageCover, this.formRegister);
        appEle.appendChild(this.container);
    }
}
export default Home;