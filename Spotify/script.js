function playAll(songNumber) {
    var audioElement = document.getElementById("song");
    var songFileName = "songs/" + songNumber + ".mp3";
    var playBtn=document.getElementById("play-pause");
    var currentRow=document.getElementById("song" + songNumber);

    if (audioElement.getAttribute("src") === songFileName && !audioElement.paused) {
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-removebg-preview.png">';
        currentRow.classList.remove("highlight");
    } else {
        audioElement.setAttribute("src", songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pausebtn.png">';
        currentRow.classList.add("highlight");
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pausebtn.png">';
    }
    else {
        audio.pause();
        playBtn.innerHTML='<img src="images/play-removebg-preview.png">';
    }
}
