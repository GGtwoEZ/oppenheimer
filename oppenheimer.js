const audio = document.getElementById('audio');
const playStopButton = document.getElementById('playStopButton');

playStopButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playStopButton.style.backgroundImage = "url('../PauseButton.png')";
  } else {
    audio.pause();
    playStopButton.style.backgroundImage = "url('../PlayButton.png')";
  }
});
