//**********INPUTS**************/
export default class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        let InputContainer = document.createElement("div");
        InputContainer.className = "justify-content m-4 mx-auto";
        myApp.append(InputContainer);


        let myInputHTML = document.createElement("input");
        myInputHTML.setAttribute("type", this.type);
        myInputHTML.setAttribute("placeholder", "Ingrese su " + this.type);
        myInputHTML.setAttribute("required", "");
        myInputHTML.className = "form-control";
        InputContainer.append(myInputHTML);

    }
}
