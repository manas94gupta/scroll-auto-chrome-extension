pageScroll(speed);

function pageScroll() {
    console.log(speed);
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,speed);
}
