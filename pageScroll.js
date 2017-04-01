pageScroll(speed, dist);

function pageScroll() {
    window.scrollBy(0,dist);
    scrolldelay = setTimeout(pageScroll,speed);
}
