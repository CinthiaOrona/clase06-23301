/*********** VIDEO ************/

export default class Video {
    constructor(parentID, src, className, width, height) {
        this.parentID = parentID;
        this.src = src;
        this.className = className;
        this.width = width;
        this.height = height;
    }

    render() {
        let myApp = document.getElementById("app");
        myApp.className = "container mt-5 mx-auto d-flex flex-column";

        let videoContainer = document.createElement("div");
        myApp.append(videoContainer);


        let myVideoHTML = document.createElement("video");
        myVideoHTML.src = this.src;
        myVideoHTML.className = this.className;
        myVideoHTML.width = this.width;
        myVideoHTML.height = this.height;
        myVideoHTML.setAttribute("controls", "");
        myVideoHTML.setAttribute("type", "video/mp4");      
        myVideoHTML.setAttribute("loop", "");
        videoContainer.append(myVideoHTML);

    }
}

