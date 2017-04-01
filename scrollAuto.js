document.addEventListener('DOMContentLoaded', function() {
    var scroll = document.getElementById('scroll');
    var speed = document.getElementById('speed');
    scroll.addEventListener('click', scrollHandler);
    speed.addEventListener('change', scrollHandler);

    var stop = document.getElementById('stop');
    stop.addEventListener('click', stopHandler);
});

function scrollHandler(e) {
    console.log('scroll');
    var speed = document.getElementById('speed').value;
    chrome.runtime.sendMessage({directive: "scroll", speed: speed}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function stopHandler(e) {
    console.log('stop');
    chrome.runtime.sendMessage({directive: "stop"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}


// // To execute another script
// chrome.tabs.executeScript({
//     file: 'webpage.js'
// });
