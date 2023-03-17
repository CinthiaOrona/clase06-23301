//*********BUTTONS*********/

export default class Button {
    constructor(parentID, text, className, type) {
        this.parentID = parentID;
        this.text = text;
        this.className = className;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        let buttonContainer = document.createElement("div");
        buttonContainer.className = "justify-content mt-2 mx-auto";
        myApp.append(buttonContainer);

        let myButtonHTML = document.createElement("button");
        myButtonHTML.setAttribute("type", this.type); //implicito en el elemento
        myButtonHTML.className = this.className;
        myButtonHTML.innerHTML = this.text;
        buttonContainer.append(myButtonHTML);
    }

}