let playBtn = document.querySelector('[data-videobtn="play"]'), play = 1,
    video = document.querySelector('.video-content');

const playerSettings = {
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
  volume: 1,
};
// Setup the player
const player = new Plyr('.video-content', playerSettings);
