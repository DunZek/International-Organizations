// Notifying chevron



// Header buttons
const delay = 200;
let reveal = false
$('#header-welcome').click(function() {
    if (reveal == false) {
        $('nav').addClass('reveal')
        $('#wrapper').addClass('reveal')
        $('.fa-chevron-up').addClass('notify')
        setTimeout(function() {
            $('#for-home').addClass('reveal')
            $('#header-welcome').addClass('reveal')
        }, delay)

        console.log('reveal the nav')
        return reveal = true
    } else if (reveal == true) {
        $('nav').removeClass('reveal')
        $('#wrapper').removeClass('reveal')
        $('.fa-chevron-up').removeClass('notify')
        setTimeout(function() {
            $('#for-home').removeClass('reveal')
            $('#header-welcome').removeClass('reveal')
        }, delay)

        console.log('reveal the nav')
        return reveal = false
    }
})

// Sub buttons
let home_display = false
let research_display = false
let evaluation_display = false

$('#nav-about').click(function() {
    if (home_display == false) {
        let research_display = false
        let evaluation_display = false

        return home_display = true
    }
})