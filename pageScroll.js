console.log(speed);
pageScroll();

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,30);
}
