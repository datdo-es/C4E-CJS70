import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";

import app from "../../index.js";
import {getDataTour} from "../../firebase/store.js";

class Home{
    container;
    slide;
    card

      // Data
    title;
    desc;
    price;
    image;
    date;

    item;
    constructor(item){
        this.item = item

        this.container = document.createElement("div");
        this.container.classList.add("container", "centerContent");

        this.slide = document.createElement("div");
        this.slide.classList.add("col-4", "card");
        this.slide.innerHTML=`
            <div class="">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`

        this.image = document.createElement("img");
        this.image.classList.add("card-img-top");

        this.card = document.createElement("div");
        this.card.classList.add("card-body");

        this.title = document.createElement("p");
        this.title.classList.add("card-title");

        this.price = document.createElement("p");
        this.price.classList.add("card-price");

        this.desc = document.createElement("p");
        this.desc.classList.add("card-text");

        this.date = document.createElement("p");
        this.date.classList.add("card-date");

        this.setUpData()
    }
    
    async setUpData (){
        const datafill = await getDataTour();
        if (datafill) {
            this.datafill = datafill.id;
      
            this.title.setAttribute("value", datafill.title);
            this.desc.setAttribute("value", datafill.desc);
            this.image.setAttribute("value", datafill.image);
            this.price.setAttribute("value", datafill.image);
            this.date.setAttribute("value", datafill.image);
      
            this.image.style.backgroundImage = `url(${datafill.image})`;
          } else {
            this.userID = "";
          }
        // console.log(datafill)
        // this.title = cons.title;
        // this.desc = cons.desc;
        // this.image = cons.image;
        // this.price = cons.price;
        // this.date = cons.users;
    
        // this.item = cons;
    
        // this.fillDataToEle();
    }

    fillDataToEle = () =>{
        this.image.src = `url(${this.image})`;
        this.title.innerText = this.title;
        this.desc.innerText = this.desc;
        this.price.innerText = this.price;
        this.date.innerText = this.date;
    }

    handleChangeScreen = (e)=>{
        e.preventDefault();
        app.changeActiveScreen(login);
    };

    render(appEle){
        this.container.append(this.slide);
        appEle.appendChild(this.container);
    }
}
export default Home;