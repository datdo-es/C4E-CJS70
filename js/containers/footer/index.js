class Footer{
    container;
    body;
    mainfooter;

    tour;
    hottour;

    social;

    constructor(){
        this.container = document.createElement("div");
        this.container.classList.add("row");

        this.body = document.createElement("div");
        this.body.classList.add("row");

        this.mainfooter = document.createElement("div");
        this.mainfooter.classList.add("row");

        this.tour = document.createElement("div");
        this.tour.classList.add("row");

        this.hottour = document.createElement("div");
        this.hottour.classList.add("row");

        this.social = document.createElement("div");
        this.social.classList.add("row");
    }

    render(appEle){
        this.container.append(this.body,this.mainfooter,this.tour, this.hottour,this.social);
        appEle.appendChild(this.container);
    }
}
export default Footer;