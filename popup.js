document.getElementById('play').addEventListener('click', () => {
    let track = document.querySelector('select').value;
    chrome.runtime.sendMessage({name: "playTrack", track: track});
});

document.getElementById('pause').addEventListener('click', () => {
    chrome.runtime.sendMessage({name: "pauseTrack"});
});