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
        // info
    $('#info-about').css('display', 'block')
}

function research_appear() {
    $('#showcase-research-0').css('display', 'block')
    $('#showcase-research-1').css('display', 'block')
    $('#showcase-research-2').css('display', 'block')
    $('#showcase-research-3').css('display', 'block')
    $('#showcase-research-4').css('display', 'block')
        // info
    $('#info-research-0').css('display', 'block')
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