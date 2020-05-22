let playBtn = document.querySelector('[videobtn="play"]'),
    video = document.querySelector('.video-content');

let play = 1;

if (playBtn) {
  playBtn.addEventListener('click', playVideo);
  video.volume = 0;
}

function playVideo(evt) {
  if (play) {
    video.currentTime = 0;
    play = 0;
  }
  video.addEventListener('pause', playVideoHandler);
  stateVideo(true);
}

function stateVideo(param) {
  param ? video.play() : video.pause();
  video[param ? 'removeAttribute' : 'setAttribute']('muted', '');
  video.muted = !param;
  video.volume = param ? 1 : 0;
  playBtn.style.display = param ? 'none' : '';
  video.classList[param ? 'add' : 'remove']('video-pointer');
  video[param ? 'addEventListener' : 'removeEventListener']('click', stopVideo);
}

function stopVideo() {
  stateVideo(false);
}

// Обработчики событий play/pause (для воспроизведения с браузера, а не при клике)
function playVideoHandler() {
  video.removeEventListener('pause', playVideoHandler);
  video.addEventListener('play', pauseVideoHandler);
  stateVideo(false);
}

function pauseVideoHandler() {
  video.addEventListener('pause', playVideoHandler);
  video.removeEventListener('play', pauseVideoHandler);
  stateVideo(true);
}
