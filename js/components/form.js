//**********FORMULARIO**************/

export default class Formulario {
    constructor(parentID, className, elementID) {
        this.parentID = parentID;
        this.className = className;
        this.elementID = elementID;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.className = "container mt-5 mx-auto d-flex flex-column";

        //Estilizado del formulario
        let formContainer = document.createElement("div");
        formContainer.className = "m-4";
        myApp.append(formContainer);

        let myFormHTML = document.createElement("form");
        myFormHTML.setAttribute("id", this.elementID);
        myFormHTML.setAttribute("novalidate", "");
        myFormHTML.className = this.className;
        myFormHTML.color = this.color;
        formContainer.append(myFormHTML);

    }
}

