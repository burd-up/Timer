document.addEventListener('DOMContentLoaded', () => {

    let input = document.querySelector('.input')
    let button = document.querySelector('.button')
    let timeLeft = document.querySelector('.timeLeft')

    let audio = new Audio()
    audio.src = 'din.mp3'
    let timerInterval = null
    let secondsLeft = null

    function minutesToSeconds (minutes){
        return Math.round(minutes * 60)
    }

    function showTimeLeft (secondsCount){
        let hours = Math.floor(secondsCount/3600)
        hours = hours >= 10 ? hours : `0${hours}`

        let minutes = Math.floor((secondsCount - hours*3600) / 60)
        minutes = minutes >= 10 ? minutes : `0${minutes}`

        let seconds = secondsCount - minutes*60 - hours*3600
        seconds = seconds >= 10 ? seconds : `0${seconds}`

        return `${hours} : ${minutes} : ${seconds}`
    }

    function timerOn(seconds, element) {
        clearInterval(timerInterval)
        timeLeft.textContent = showTimeLeft(seconds)
        secondsLeft = seconds
        timerInterval = setInterval(decriaseTime, 1000, element)
    }

    function decriaseTime(element) {
        if (secondsLeft == 1) {
            clearInterval(timerInterval)
            audio.play()
        }
        secondsLeft -= 1
        element.textContent = showTimeLeft(secondsLeft)
    }

    button.addEventListener('click', (event) => {
        if (input.value) {
            timerOn(minutesToSeconds(parseFloat(input.value)), timeLeft)
        }
    })

})