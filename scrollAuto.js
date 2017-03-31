document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('scroll');
    btn.addEventListener('click', clickHandler);
});

function clickHandler(e) {
    var speed = document.getElementById('speed').value;
    chrome.runtime.sendMessage({directive: "scroll", speed: speed}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}


// // To execute another script
// chrome.tabs.executeScript({
//     file: 'webpage.js'
// });
