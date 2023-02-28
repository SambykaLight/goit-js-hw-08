import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);


const currentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(currentTime, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem(currentTime)) || 0);

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});