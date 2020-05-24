const motto_delay = 7000
const start_delay = motto_delay + 1000

const motto_top = document.getElementById("motto-top")
const motto_middle = document.getElementById("motto-middle")
const motto_bottom = document.getElementById("motto-bottom")

const landing = document.getElementById('landing')
const content = document.getElementById('content')
const skip = document.getElementById('skip')


function remove_landing() {
    setTimeout(function() {
        landing.style.display = 'none'
        content.style.display = 'block'
        content.classList.add('display')
    }, 11800)
}

function eigth_set() {
    setTimeout(function() {
        motto_top.innerHTML = "Slovene: \"Združena v raznolikosti\""
        motto_middle.innerHTML = "Spanish: \"Unida en la diversidad\""
        motto_bottom.innerHTML = "Swedish: \"Förenade i mångfalden\""
        remove_landing()
    }, motto_delay)
}

function seventh_set() {
    setTimeout(function() {
        motto_top.innerHTML = "Portuguese: \"Unida na diversidade\""
        motto_middle.innerHTML = "Romanian: \"Uniţi în diversitate\""
        motto_bottom.innerHTML = "Slovak: \"Zjednotení v rozmanitosti\""
        eigth_set()
    }, motto_delay)
}

function sixth_set() {
    setTimeout(function() {
        motto_top.innerHTML = "Lithuanian: \"Suvienijusi įvairovę\""
        motto_middle.innerHTML = "Maltese: \"Magħquda fid-diversità\""
        motto_bottom.innerHTML = "Polish: \"Zjednoczona w różnorodności\""
        seventh_set()
    }, motto_delay)
}

function fifth_set() {
    setTimeout(function() {
        motto_top.innerHTML = "Irish: \"Aontaithe san éagsúlacht\""
        motto_middle.innerHTML = "Italian: \"Unita nella diversità\""
        motto_bottom.innerHTML = "Latvian: \"Vienota dažādībā\""
        sixth_set()
    }, motto_delay)
}

function fourth_set() {
    setTimeout(function() {
        motto_top.innerHTML = "German: \"In Vielfalt geeint\""
        motto_middle.innerHTML = "Greek: \"Ενωμένοι στην πολυμορφία\""
        motto_bottom.innerHTML = "Hungarian: \"Egység a sokféleségben\""
        fifth_set()
    }, motto_delay)
}

function third_set() {
    setTimeout(function() {
        motto_top.innerHTML = "Estonian: \"Ühinenud mitmekesisuses\""
        motto_middle.innerHTML = "Finnish: \"Moninaisuudessaan yhtenäinen\""
        motto_bottom.innerHTML = "French: \"Unie dans la diversité\""
        fourth_set()
    }, motto_delay)
}

function second_set() {
    setTimeout(function() {
        motto_top.innerHTML = "Danish: \"Forenet i mangfoldighed\""
        motto_middle.innerHTML = "Dutch: \"In verscheidenheid verenigd\""
        motto_bottom.innerHTML = "English: \"United in diversity\""
        third_set()
    }, start_delay)
}
second_set()

skip.onclick = function() {
    landing.style.display = 'none'
    content.style.display = 'block'
    content.classList.add('display')

};

// MOTTO STUFF END