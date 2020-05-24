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