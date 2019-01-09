const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("mouseover", function () {
        console.log("play");
        this.play();

    });
    video.addEventListener("mouseout", function () {
        console.log("pause")
        this.pause();
    });
    video.addEventListener("touchstart", function () {
        console.log("touchplay");
        this.play();
    });
    video.addEventListener("touchend", function () {
        console.log("touchpause")
        this.play();
    });
});

closeSidebar();

function openSidebar() {
    document.getElementById("burgermenu").style.display = "block";
    console.log("open");
}

function closeSidebar() {
    document.getElementById("burgermenu").style.display = "none";
    console.log("close");
}



//document.querySelector(".hbutton").addEventListener("click", flipclick);
//
//function flipclick {
//    document.querySelector("#wrapper").classList.add(".flip_page");
//}
