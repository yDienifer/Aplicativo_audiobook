const CHAPTER_COUNT = 10;
const BACKWARD_BUTTON = document.getElementById('backward-button');
const PLAY_PAUSE_BUTTON = document.getElementById('play-pause-button');
const ICON_PLAY_PAUSE = document.getElementById('player-controls__icon-play-pause');
const FORWARD_BUTTON = document.getElementById('forward-button');
const AUDIO_CHAPTER = document.getElementById('player-audio__audio-chapter');
const HEADER_CHAPTER = document.getElementById('player-header__chapter');
const PROGRESS_BAR = document.getElementById('progress');

let isPlaying = false;
let currentTrack = 1;

function playTrack() {
    ICON_PLAY_PAUSE.classList.replace('bi-play-circle-fill', 'bi-pause-circle-fill');
    AUDIO_CHAPTER.play();
    isPlaying = true;
}

function pauseTrack() {
    ICON_PLAY_PAUSE.classList.replace('bi-pause-circle-fill', 'bi-play-circle-fill');
    AUDIO_CHAPTER.pause();
    isPlaying = false;
}

function togglePlayPause() {
    isPlaying ? pauseTrack() : playTrack();
}

function advanceTrack() {
    currentTrack = (currentTrack === CHAPTER_COUNT) ? 1 : currentTrack += 1;
    HEADER_CHAPTER.innerText = `Capítulo ${currentTrack}`;
    AUDIO_CHAPTER.src = `./assets/audio/dom-casmurro/${currentTrack}.mp3`;
    playTrack();
}

function returnTrack() {
    currentTrack = (currentTrack === 1) ? CHAPTER_COUNT : currentTrack -= 1;
    HEADER_CHAPTER.innerText = `Capítulo ${currentTrack}`;
    AUDIO_CHAPTER.src = `./assets/audio/dom-casmurro/${currentTrack}.mp3`;
    playTrack();
}

function progressBar() {
    AUDIO_CHAPTER.addEventListener('timeupdate', function () { // O evento timeupdate é disparado continuamente enquanto o áudio está sendo reproduzido.

        // % = valor inicial / valor final
        let percent = (AUDIO_CHAPTER.currentTime / AUDIO_CHAPTER.duration) * 100;
        PROGRESS_BAR.style.width = percent + '%';
    })
}

PLAY_PAUSE_BUTTON.addEventListener('click', togglePlayPause);
FORWARD_BUTTON.addEventListener('click', advanceTrack);
BACKWARD_BUTTON.addEventListener('click', returnTrack);
document.addEventListener('DOMContentLoaded', progressBar);