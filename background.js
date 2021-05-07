// Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    var body = document.querySelector('body');

    if(msg.name == "playTrack"){
        var trackName = msg.track;
        var audioElement = document.querySelector('.audio-element');
        audioElement.src = 'audio/' + trackName + '.mp3';
        audioElement.play();
    }

    if(msg.name == "pauseTrack"){
        var audioElement = document.querySelector('.audio-element');
        audioElement.src = 'audio/' + trackName + '.mp3';
        audioElement.pause();
    }


});