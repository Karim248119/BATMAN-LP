function playAudio() {
  var audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.play();
}
const nav = document.querySelectorAll(".nav");
nav.forEach(function (e) {
  e.addEventListener("click", function () {
    e.classList.toggle("blue");
  });
});
