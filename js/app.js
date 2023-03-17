/// Importar funciones o clases
import Button from "./components/button.js";
import Input from "./components/input.js";
import Formulario from "./components/form.js";
import Video from "./components/video.js";

//// DATOS
const manyButtons = ["Login", "Close", "Visit", "Register"];
const manyInputs = ["text", "password", "date", "number"];
const manyForms = ["form1", "form2", "form3", "form4"];
const manyVideos = ["video1", "video2", "video3", "video4"];

/// FUNCIONES  /// 

//DE BOTONES
function renderButton(text) {
    let newButton = new Button("app", text, "btn btn-primary"); //lo que esta en el constructor
    newButton.render();
}

//Funcion donde el parametro es un array, lo guardo en una variable y luego la llamo
function obtenerLogin(manyButtons) {
    let arr = manyButtons.filter(element => element === "Login").forEach(element => renderButton(element));
    return arr;
}
//obtenerLogin(manyButtons);

//DE INPUTS
function renderInput(type) {
    let input_type = "none";

    switch (type) {
        case "password":
            input_type = "password";
            break;
        case "date":
            input_type = "date";
            break;
        case "number":
            input_type = "number";
            break;
        default:
            input_type = "text";
            break;
    }
    let someInput = new Input("app", input_type);
    someInput.render();
}


//Mostrar cada input
//manyInputs.forEach(element => renderInput(element));

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function filtrarInputs(arrInput, type) {
    let arr = arrInput.filter(element => element === type).forEach(element => renderInput(element));
    return arr;
}
//filtrarInputs(manyInputs, "date");

//Funcion que filtra por default hasta 3 parametros de input
function obtenerTresInputs(arrInput, type1, type2, type3) {
    let inputElegido = arrInput.filter(element => element === type1 && type2 && type3).forEach(element => renderInput(element));
    return inputElegido;
}
//obtenerTresInputs(manyInputs, "text", "password", "date");
//////////////////////////////////////////////////
/////////////////////////////////////////////////

//DE FORMS
function mostrarFormArmado() {
    let formLogin = new Formulario("app", "form bg-light p-5 border border-primary rounded needs-validation", "form1");
    let input1 = new Input("form1", "text");
    let input2 = new Input("form1", "password");
    let button1 = new Button("form1", "Login", "btn btn-primary", "submit");

    formLogin.render();
    input1.render();
    input2.render();
    button1.render();
}
//mostrarFormArmado();
////////////////////////////////////////////////////
///////////////////////////////////////////////////

function renderForm() {
    let newForm = new Formulario("app", "form bg-light p-5 border border-primary");
    newForm.render();
}
//manyForms.forEach(element => renderForm(element));

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function obtenerForm(arrForm) {
    let arr = arrForm.filter(element => element === "form1").forEach(element => renderForm(element));
    return arr;
}
//obtenerForm(manyForms);

//Filtar inputs por tipo en cada formulario
function inputsSegunFormulario(arrInput, arrForm, type, elementID) {
    let arr = arrInput.filter(element => element === type).forEach(element => renderInput(element));
    let arr2 = arrForm.filter(element => element === elementID).forEach(element => renderForm(element));
    return arr, arr2;
}
//inputsSegunFormulario(manyInputs, manyForms, "date", "form1");

/// DE VIDEOS

////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Instancio un video
let url = "https://mdbcdn.b-cdn.net/img/video/forest.mp4";
const myVideo = new Video("app", url, "hover-to-play", 320, 240);
myVideo.render();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//Muestro todos los videos del array
//manyVideos.forEach(element => renderVideo(element));

//Muestro un video en especifico
function renderVideo() {
    let newVideo = new Video("app", "video1", "border rounded", 170, 170);
    newVideo.render();
}
//renderVideo();

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function obtenerVideo(arrVideo) {
    let arr = arrVideo.forEach(element => renderVideo(element));
    return arr;
}
//obtenerVideo(manyVideos);


/// LOGICA ///

///////////////////////////////////////////////
//*********VALIDACION FORMULARIO**************/
(() => {

    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated')
        }, false)
    });
})();

///////////////////////////////////////////////
//********* LOOPING VIDEO MOUSSEOVER **************/
(() => {

    'use strict'

    const clip = document.querySelectorAll(".hover-to-play");
    for (let i = 0; i < clip.length; i++) {
        clip[i].addEventListener("mouseenter", function (e) {
            clip[i].play();
        }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); });
    }

})();