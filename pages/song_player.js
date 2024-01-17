function playSong(songPath) {
  const audioPlayer = document.getElementById("audioPlayer");

  audioPlayer.src = songPath;
  audioPlayer.play();
}
