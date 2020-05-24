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
    let on_scroll = viewheight / 2.2
    let on_scroll2 = viewheight / 10
    let displacement = distance + start
    console.log(`Displacement from top: ${displacement}`)
    if (displacement > on_scroll) {
        $('header').css('background', 'black')
            // nav
        $('.button-wrapper').addClass('onscroll')
            // $('.nav-content').css('color', 'white')
    } else {
        $('header').css('background', 'none')
            // nav
        $('.button-wrapper').removeClass('onscroll')
            // $('.nav-content').css('color', 'black')

    }

    // if (displacement >= on_scroll2) {
    // $('#info-about').addClass('onscroll')
    // $('#info-research').addClass('onscroll')
    // $('#info-evaluation').addClass('onscroll')
    // $('.info-wrapper').removeClass('wrapper_offscroll')
    // $('.info-wrapper').addClass('wrapper_onscroll')
    // $('body').addClass('onscroll')
    // console.log('show info')
    // } else {
    //     $('#info-about').removeClass('onscroll')
    //     $('#info-research').removeClass('onscroll')
    //     $('#info-evaluation').removeClass('onscroll')
    //     $('.info-wrapper').removeClass('wrapper_onscroll')
    //     $('.info-wrapper').addClass('wrapper_offscroll')

    //     $('body').removeClass('onscroll')
    //     console.log('hide info')
    // }
});

$('#info-about').addClass('onscroll')
$('#info-research').addClass('onscroll')
$('#info-evaluation').addClass('onscroll')

$('#info-research-0').addClass('onscroll')
$('#info-research-1').addClass('onscroll')
$('#info-research-2').addClass('onscroll')
$('#info-research-3').addClass('onscroll')
$('#info-research-4').addClass('onscroll')

$('#info-evaluation-0').addClass('onscroll')

$('.info-wrapper').removeClass('wrapper_offscroll')
$('.info-wrapper').addClass('wrapper_onscroll')
$('.info-wrapper-2').removeClass('wrapper_offscroll')
$('.info-wrapper-2').addClass('wrapper_onscroll')
$('body').addClass('onscroll')
console.log('show info')
    // DETECT_SCROLL CODE ENDS


// HOME PAGE CODE STARTS
// showcase
const info_delay = 500

// showcase LOCATION INDICATORS
function showcase_location(welcome_now, research_now, evaluation_now) {

    function remove_research_slide() {
        $('#showcase-welcome').removeClass('research-slide')
        $('#showcase-research').removeClass('research-slide')
        $('#showcase-evaluation').removeClass('research-slide')
    }

    function remove_evaluation_slide() {
        $('#showcase-welcome').removeClass('evaluation-slide')
        $('#showcase-research').removeClass('evaluation-slide')
        $('#showcase-evaluation').removeClass('evaluation-slide')
    }

    if (welcome_now == true) {
        $('.welcome').addClass('showcase_current')
        $('.research').removeClass('showcase_current')
        $('.evaluation').removeClass('showcase_current')
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')


        remove_research_slide()
        remove_evaluation_slide()

        setTimeout(function() {

            $('#info-research').css('display', 'none')
            $('#info-evaluation').css('display', 'none')
            $('#info-about').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()
        }, info_delay)


        console.log('location 1')
    } else if (research_now == true) {
        $('.welcome').removeClass('showcase_current')
        $('.research').addClass('showcase_current')
        $('.evaluation').removeClass('showcase_current')

        $('#showcase-welcome').addClass('research-slide')
        $('#showcase-research').addClass('research-slide')
        $('#showcase-evaluation').addClass('research-slide')
        remove_evaluation_slide()
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')

        setTimeout(function() {
            $('#info-about').css('display', 'none')
            $('#info-evaluation').css('display', 'none')
            $('#info-research').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()

        }, info_delay)

        console.log('location 2')
    } else if (evaluation_now == true) {
        $('.welcome').removeClass('showcase_current')
        $('.research').removeClass('showcase_current')
        $('.evaluation').addClass('showcase_current')

        remove_research_slide()
        $('#showcase-welcome').addClass('evaluation-slide')
        $('#showcase-research').addClass('evaluation-slide')
        $('#showcase-evaluation').addClass('evaluation-slide')
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')
        setTimeout(function() {

            $('#info-about').css('display', 'none')
            $('#info-research').css('display', 'none')
            $('#info-evaluation').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()

        }, info_delay)


        console.log('location 3')
    }
}

// STATE CHANGER
function welcome_is_now() {
    return welcome_now = true,
        research_now = false,
        evaluation_now = false
}

function research_is_now() {
    return welcome_now = false,
        research_now = true,
        evaluation_now = false
}

function evaluation_is_now() {
    return welcome_now = false,
        research_now = false,
        evaluation_now = true
}

$('.welcome').click(function() {
    welcome_is_now()

    showcase_location(welcome_now, research_now, evaluation_now)
});
$('.research').click(function() {
    research_is_now()

    showcase_location(welcome_now, research_now, evaluation_now)
});
$('.evaluation').click(function() {
    evaluation_is_now()

    showcase_location(welcome_now, research_now, evaluation_now)
});


// CHEVRONS
// left chevron JS
$('.click-left').mouseenter(function() {
    $('.fa-chevron-left').addClass('bounce_left')
})
$('.click-left').mouseout(function() {
    $('.fa-chevron-left').removeClass('bounce_left')
})

$('#left-research').click(function() {
    console.log('move to welcome')
    welcome_is_now()

    showcase_location(welcome_now, research_now, evaluation_now)
})
$('#left-evaluation').click(function() {
    console.log('move to research')
    research_is_now()

    showcase_location(welcome_now, research_now, evaluation_now)
})

// right chevron JS
$('.click-right').mouseenter(function() {
    $('.fa-chevron-right').addClass('bounce_right')
})
$('.click-right').mouseout(function() {
    $('.fa-chevron-right').removeClass('bounce_right')
})

$('#right-welcome').click(function() {
    console.log('move to research')
    research_is_now()

    showcase_location(welcome_now, research_now, evaluation_now)
})
$('#right-research').click(function() {
        console.log('move to evaluation')
        evaluation_is_now()

        showcase_location(welcome_now, research_now, evaluation_now)
    })
    // config starts
welcome_is_now()
$('.welcome').addClass('showcase_current')
    // config ends

// View image button
let view_image = false
$('.showcase-button').click(function() {
    if (view_image == false) {
        // Header
        $('#header-container').css('opacity', '0')
            // Showcases
        $('#showcase').css('height', '100vh')
        $('#showcase-welcome').css('height', '100vh')
        $('#showcase-research').css('height', '100vh')
        $('#showcase-evaluation').css('height', '100vh')
            // research
        $('#showcase-research-0').css('height', '100vh')
        $('#showcase-research-1').css('height', '100vh')
        $('#showcase-research-2').css('height', '100vh')
        $('#showcase-research-3').css('height', '100vh')
        $('#showcase-research-4').css('height', '100vh')
            // evaluation
        $('#showcase-evaluation-0').css('height', '100vh')

        // GUI
        $('.showcase-text').css('padding', '1rem 1rem 1rem 1rem')
        $('.showcase-dark-overlay').addClass('no-gradient')
        $('.showcase-h2').css('opacity', '0')
        $('.showcase-p').css('opacity', '0')
        $('.showcase-button').css('opacity', '0.75')
        $('.showcase-button').css('margin-bottom', '1rem')
        $('.showcase-location').css('opacity', '0')
        $('.img-info').css('display', 'block')
        $('.click-left').css('z-index', '-1')
        $('.click-right').css('z-index', '-1')
            // etc.
        $('#content').css('height', '100vh')
        $('#wrapper').css('height', '100vh')
        $('footer').css('display', 'none')
            // Info
        $('#info').css('display', 'none')
        console.log(`view_image is ${view_image}`)
        return view_image = true
    } else if (view_image == true) {
        // Header
        $('#header-container').css('opacity', '1')
            // Showcases
        $('#showcase').css('height', '110vh')
        $('#showcase-welcome').css('height', '110vh')
        $('#showcase-research').css('height', '110vh')
        $('#showcase-evaluation').css('height', '110vh')
            // research
        $('#showcase-research-0').css('height', '110vh')
        $('#showcase-research-1').css('height', '110vh')
        $('#showcase-research-2').css('height', '110vh')
        $('#showcase-research-3').css('height', '110vh')
        $('#showcase-research-4').css('height', '110vh')
            // evaluation
        $('#showcase-evaluation-0').css('height', '110vh')

        // GUI
        $('.showcase-text').css('padding', '1rem 1rem 15vh 1rem')
        $('.showcase-dark-overlay').removeClass('no-gradient')
        $('.showcase-h2').css('opacity', '1')
        $('.showcase-p').css('opacity', '1')
        $('.showcase-button').css('opacity', '1')
        $('.showcase-button').css('margin-bottom', '2rem')
        $('.showcase-location').css('opacity', '1')
        $('.img-info').css('display', 'none')
        $('.click-left').css('z-index', '1')
        $('.click-right').css('z-index', '1')
            // etc.
        $('#content').css('height', 'auto')
        $('#wrapper').css('height', 'auto')
        $('footer').css('display', 'flex')
            // Info
        $('#info').css('display', 'block')
        console.log(`view_image is ${view_image}`)
        return view_image = false
    }

})

// HOMEPAGE RESEARCH

// showcase-research
const info_delay_2 = 500

// showcase LOCATION INDICATORS
function showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now) {

    function remove_1_slide() {
        $('#showcase-research-0').removeClass('1-slide')
        $('#showcase-research-1').removeClass('1-slide')
        $('#showcase-research-2').removeClass('1-slide')
        $('#showcase-research-3').removeClass('1-slide')
        $('#showcase-research-4').removeClass('1-slide')
    }

    function remove_2_slide() {
        $('#showcase-research-0').removeClass('2-slide')
        $('#showcase-research-1').removeClass('2-slide')
        $('#showcase-research-2').removeClass('2-slide')
        $('#showcase-research-3').removeClass('2-slide')
        $('#showcase-research-4').removeClass('2-slide')
    }

    function remove_3_slide() {
        $('#showcase-research-0').removeClass('3-slide')
        $('#showcase-research-1').removeClass('3-slide')
        $('#showcase-research-2').removeClass('3-slide')
        $('#showcase-research-3').removeClass('3-slide')
        $('#showcase-research-4').removeClass('3-slide')
    }

    function remove_4_slide() {
        $('#showcase-research-0').removeClass('4-slide')
        $('#showcase-research-1').removeClass('4-slide')
        $('#showcase-research-2').removeClass('4-slide')
        $('#showcase-research-3').removeClass('4-slide')
        $('#showcase-research-4').removeClass('4-slide')
    }

    if (_0_is_now == true) {
        $('._0_').addClass('showcase_current')
        $('._1_').removeClass('showcase_current')
        $('._2_').removeClass('showcase_current')
        $('._3_').removeClass('showcase_current')
        $('._4_').removeClass('showcase_current')
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')

        remove_1_slide()
        remove_2_slide()
        remove_3_slide()
        remove_4_slide()

        setTimeout(function() {

            $('#info-research-1').css('display', 'none')
            $('#info-research-2').css('display', 'none')
            $('#info-research-3').css('display', 'none')
            $('#info-research-4').css('display', 'none')
            $('#info-research-0').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()
        }, info_delay_2)


        console.log('location 1')
    } else if (_1_is_now == true) {
        $('._0_').removeClass('showcase_current')
        $('._1_').addClass('showcase_current')
        $('._2_').removeClass('showcase_current')
        $('._3_').removeClass('showcase_current')
        $('._4_').removeClass('showcase_current')

        $('#showcase-research-0').addClass('1-slide')
        $('#showcase-research-1').addClass('1-slide')
        $('#showcase-research-2').addClass('1-slide')
        $('#showcase-research-3').addClass('1-slide')
        $('#showcase-research-4').addClass('1-slide')
        remove_2_slide()
        remove_3_slide()
        remove_4_slide()
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')

        setTimeout(function() {
            $('#info-research-0').css('display', 'none')
            $('#info-research-2').css('display', 'none')
            $('#info-research-3').css('display', 'none')
            $('#info-research-4').css('display', 'none')
            $('#info-research-1').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()

        }, info_delay_2)

        console.log('location 2')
    } else if (_2_is_now == true) {
        $('._0_').removeClass('showcase_current')
        $('._1_').removeClass('showcase_current')
        $('._2_').addClass('showcase_current')
        $('._3_').removeClass('showcase_current')
        $('._4_').removeClass('showcase_current')

        remove_1_slide()
        $('#showcase-research-0').addClass('2-slide')
        $('#showcase-research-1').addClass('2-slide')
        $('#showcase-research-2').addClass('2-slide')
        $('#showcase-research-3').addClass('2-slide')
        $('#showcase-research-4').addClass('2-slide')
        remove_3_slide()
        remove_4_slide()
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')
        setTimeout(function() {

            $('#info-research-0').css('display', 'none')
            $('#info-research-1').css('display', 'none')
            $('#info-research-3').css('display', 'none')
            $('#info-research-4').css('display', 'none')
            $('#info-research-2').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()

        }, info_delay_2)


        console.log('location 3')
    } else if (_3_is_now == true) {
        $('._0_').removeClass('showcase_current')
        $('._1_').removeClass('showcase_current')
        $('._2_').removeClass('showcase_current')
        $('._3_').addClass('showcase_current')
        $('._4_').removeClass('showcase_current')

        remove_1_slide()
        remove_2_slide()
        $('#showcase-research-0').addClass('3-slide')
        $('#showcase-research-1').addClass('3-slide')
        $('#showcase-research-2').addClass('3-slide')
        $('#showcase-research-3').addClass('3-slide')
        $('#showcase-research-4').addClass('3-slide')
        remove_4_slide()
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')
        setTimeout(function() {

            $('#info-research-0').css('display', 'none')
            $('#info-research-1').css('display', 'none')
            $('#info-research-2').css('display', 'none')
            $('#info-research-3').css('display', 'block')
            $('#info-research-4').css('display', 'none')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()

        }, info_delay_2)


        console.log('location 4')
    } else if (_4_is_now == true) {
        $('._0_').removeClass('showcase_current')
        $('._1_').removeClass('showcase_current')
        $('._2_').removeClass('showcase_current')
        $('._3_').removeClass('showcase_current')
        $('._4_').addClass('showcase_current')

        remove_1_slide()
        remove_2_slide()
        remove_3_slide()
        $('#showcase-research-0').addClass('4-slide')
        $('#showcase-research-1').addClass('4-slide')
        $('#showcase-research-2').addClass('4-slide')
        $('#showcase-research-3').addClass('4-slide')
        $('#showcase-research-4').addClass('4-slide')
            // below showcase
        $('.info-wrapper').addClass('wrapper_offscroll')
        $('.info-wrapper').removeClass('wrapper_onscroll')
        $('.info-wrapper-2').addClass('wrapper_offscroll')
        $('.info-wrapper-2').removeClass('wrapper_onscroll')
        setTimeout(function() {

            $('#info-research-0').css('display', 'none')
            $('#info-research-1').css('display', 'none')
            $('#info-research-2').css('display', 'none')
            $('#info-research-3').css('display', 'none')
            $('#info-research-4').css('display', 'block')
                // wrapper
            $('.info-wrapper').removeClass('wrapper_offscroll')
            $('.info-wrapper').addClass('wrapper_onscroll')
            $('.info-wrapper-2').removeClass('wrapper_offscroll')
            $('.info-wrapper-2').addClass('wrapper_onscroll')
            scrollDistance()

        }, info_delay_2)


        console.log('location 5')
    }
}

// STATE CHANGER
function _0_now() {
    return _0_is_now = true,
        _1_is_now = false,
        _2_is_now = false,
        _3_is_now = false,
        _4_is_now = false
}

function _1_now() {
    return _0_is_now = false,
        _1_is_now = true,
        _2_is_now = false,
        _3_is_now = false,
        _4_is_now = false
}

function _2_now() {
    return _0_is_now = false,
        _1_is_now = false,
        _2_is_now = true,
        _3_is_now = false,
        _4_is_now = false
}

function _3_now() {
    return _0_is_now = false,
        _1_is_now = false,
        _2_is_now = false,
        _3_is_now = true,
        _4_is_now = false
}

function _4_now() {
    return _0_is_now = false,
        _1_is_now = false,
        _2_is_now = false,
        _3_is_now = false,
        _4_is_now = true
}

$('._0_').click(function() {
    _0_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
});
$('._1_').click(function() {
    _1_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
});
$('._2_').click(function() {
    _2_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
});
$('._3_').click(function() {
    _3_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
});
$('._4_').click(function() {
    _4_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
});


// CHEVRONS
// left chevron JS

$('#left-1').click(function() {
    _0_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})
$('#left-2').click(function() {
    _1_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})
$('#left-3').click(function() {
    _2_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})
$('#left-4').click(function() {
    _3_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})

// right chevron JS

$('#right-0').click(function() {
    _1_now()
    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})
$('#right-1').click(function() {
    _2_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})
$('#right-2').click(function() {
    _3_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})
$('#right-3').click(function() {
    _4_now()

    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
})

// config starts
_0_now()
$('._0_').addClass('showcase_current')
    // config ends


// INFO

$('.stuff-img').mouseenter(function() {
    $('.stuff-wrapper').addClass('img-hover')
})
$('.stuff-img').mouseout(function() {
    $('.stuff-wrapper').removeClass('img-hover')
})

// Explore buttons

// Appears
function home_appear() {
    $('#showcase-welcome').css('display', 'block')
    $('#showcase-research').css('display', 'block')
    $('#showcase-evaluation').css('display', 'block')
    // showcase current
    
    welcome_is_now()
    showcase_location(welcome_now, research_now, evaluation_now)
}

function research_appear() {
    $('#showcase-research-0').css('display', 'block')
    $('#showcase-research-1').css('display', 'block')
    $('#showcase-research-2').css('display', 'block')
    $('#showcase-research-3').css('display', 'block')
    $('#showcase-research-4').css('display', 'block')
        // info
    // $('#info-research-0').css('display', 'block')

    _0_now()
    showcase_research_location(_0_is_now, _1_is_now, _2_is_now, _3_is_now, _4_is_now)
}

function evaluation_appear() {
    $('#showcase-evaluation-0').css('display', 'block')
    $('#showcase-evaluation-1').css('display', 'block')
    $('#showcase-evaluation-2').css('display', 'block')
    $('#showcase-evaluation-3').css('display', 'block')
    $('#showcase-evaluation-4').css('display', 'block')
        // Info
    $('#info-evaluation-0').css('display', 'block')
}
// Disappears
function home_disappear() {
    $('#showcase-welcome').css('display', 'none')
    $('#showcase-research').css('display', 'none')
    $('#showcase-evaluation').css('display', 'none')
        // Info
    $('#info-about').css('display', 'none')
    $('#info-research').css('display', 'none')
    $('#info-evaluation').css('display', 'none')

}

function research_disappear() {
    $('#showcase-research-0').css('display', 'none')
    $('#showcase-research-1').css('display', 'none')
    $('#showcase-research-2').css('display', 'none')
    $('#showcase-research-3').css('display', 'none')
    $('#showcase-research-4').css('display', 'none')
        // Info
    $('#info-research-0').css('display', 'none')
    $('#info-research-1').css('display', 'none')
    $('#info-research-2').css('display', 'none')
    $('#info-research-3').css('display', 'none')
    $('#info-research-4').css('display', 'none')
}

function evaluation_disappear() {
    $('#showcase-evaluation-0').css('display', 'none')
    $('#showcase-evaluation-1').css('display', 'none')
    $('#showcase-evaluation-2').css('display', 'none')
    $('#showcase-evaluation-3').css('display', 'none')
    $('#showcase-evaluation-4').css('display', 'none')
        // Info
    $('#info-evaluation-0').css('display', 'none')
}

$('#for-home').click(function() {
    window.scrollTo(0, 0)

    // Home
    home_appear()
        // Research
    research_disappear()
        // Evaluation
    evaluation_disappear()
})
$('#for-research').click(function() {
    window.scrollTo(0, 0)

    // Home
    home_disappear()
        // Research
    research_appear()
        // Evaluation
    evaluation_disappear()
})
$('#for-evaluation').click(function() {
    window.scrollTo(0, 0)

    // Home
    home_disappear()
        // Research
    research_disappear()
        // Evaluation
    evaluation_appear()
})

$('#info-explore-research').click(function() {
    window.scrollTo(0, 0)

    // Home
    home_disappear()
        // Research
    research_appear()
        // Evaluation
    evaluation_disappear()
})
$('#info-explore-evaluation').click(function() {
    window.scrollTo(0, 0)

    // Home
    home_disappear()
        // Research
    research_disappear()
        // Evaluation
    evaluation_appear()

})