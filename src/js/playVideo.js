let playBtn = document.querySelector('[data-videobtn="play"]'), play = 1,
    video = document.querySelector('.video-content');

// if (video && window.matchMedia("(max-width: 767px)").matches) {
//   video.autoplay = true;
//   video.loop = true;
// }

// function playVideo(evt) {
//   if (play) {
//     video.currentTime = 0;
//     play = 0;
//   }
//   video.addEventListener('pause', playVideoHandler);
//   stateVideo(true);
// }

// // Обработчики событий play/pause (для воспроизведения с браузера, а не при клике)
// function playVideoHandler() {
//   video.removeEventListener('pause', playVideoHandler);
//   video.addEventListener('play', pauseVideoHandler);
//   video.removeEventListener('touchstart', playVideoHandler);
//   stateVideo(false);
// }

// function pauseVideoHandler() {
//   video.addEventListener('pause', playVideoHandler);
//   video.removeEventListener('play', pauseVideoHandler);
//   video.addEventListener('touchstart', playVideoHandler);
//   stateVideo(true);
// }
// const player = new Plyr('.video-content', playerSettings);
// let controls = document.querySelector('.plyr__controls');
// if (controls) controls.style.display = 'none';



// // INIT
// if (playBtn) {
//   playBtn.addEventListener('click', playVideo);
//   video.addEventListener('play', pauseVideoHandler);
// }

// function playVideo(evt) {
//   stateVideo(true);
// }

// function stopVideo() {
//   stateVideo(false);
// }

// function stateVideo(param) {
//   param ? player.play() : player.pause();
//   controls.style.display = param ? '' : 'none';
//   // video[param ? 'removeAttribute' : 'setAttribute']('muted', '');
//   // video.muted = !param;
//   // video.loop = param ? true : false;
//   // video.volume = param ? 1 : 0;
//   playBtn.style.display = param ? 'none' : '';

//   video[param ? 'addEventListener' : 'removeEventListener']('click', stopVideo);
//   video[param ? 'addEventListener' : 'removeEventListener']('touchstart', stopVideo);
// }

const playerSettings = {
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
  volume: 1,
};
// Setup the player
const player = new Plyr('.video-content', playerSettings);
