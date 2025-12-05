let audio = document.getElementById("myAudio");
let fileInput = document.getElementById("audioFile");

fileInput.addEventListener("change", function() {
    let file = this.files[0];

    if (file) {
        let audioURL = URL.createObjectURL(file);
        audio.src = audioURL;
        audio.play();
    }
});