// Code from https://css-tricks.com/viewport-sized-typography/
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

function vmin(v) {
    return Math.min(vh(v), vw(v));
}

function vmax(v) {
    return Math.max(vh(v), vw(v));
}
console.info(vh(20), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
console.info(vw(30), Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
console.info(vmin(20));
console.info(vmax(20));

// Code from https://gomakethings.com/detecting-scroll-distances-with-vanilla-js/

var scrollDistance = function(callback, refresh) {

    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;

    // Variables
    var isScrolling, start, end, distance;

    // Listen for scroll events
    window.addEventListener('scroll', function(event) {

        // Set starting position
        if (!start) {
            start = window.pageYOffset;
        }

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {

            // Calculate distance
            end = window.pageYOffset;
            distance = end - start;

            // Run the callback
            callback(distance, start, end);

            // Reset calculations
            start = null;
            end = null;
            distance = null;

        }, refresh || 66);

    }, false);
};

scrollDistance(function(distance, start) {
    let viewheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    let half = viewheight / 2
    let onscroll = viewheight / 2.2
    let displacement = distance + start
    console.log(`Displacement from top: ${displacement}`)
    if (displacement > onscroll) {
        $('header').css('background', 'black')
    } else {
        $('header').css('background', 'none')
    }

    if (displacement >= onscroll) {
        $('#info-about').addClass('onscroll')
        $('#info-research').addClass('onscroll')
        $('#info-evaluation').addClass('onscroll')
        $('.info-wrapper').removeClass('wrapper_offscroll')
        $('.info-wrapper').addClass('wrapper_onscroll')
        $('body').addClass('onscroll')
        console.log('show info')
    } else {
        $('#info-about').removeClass('onscroll')
        $('#info-research').removeClass('onscroll')
        $('#info-evaluation').removeClass('onscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper').addClass('wrapper_offscroll')

        $('body').removeClass('onscroll')
        console.log('hide info')
    }

});