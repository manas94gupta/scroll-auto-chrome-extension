chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var speed = request.speed;
        switch (request.directive) {
        case "scroll":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                // file: "pageScroll.js", // script to inject into page and run in sandbox
                code: 'var speed = ' + JSON.stringify(speed),
                // allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            }, function() {
                chrome.tabs.executeScript(null, {
                    file: "pageScroll.js",
                    allFrames: true
                });
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Something went wrong, try again");
        }
    }
);
