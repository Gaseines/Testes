const hollow = document.querySelector('.boneco')
const flor = document.querySelector('.flor')
const nuvem = document.querySelector('.nuvi')

const jump = () =>  {
     hollow.classList.add('jump')

    setTimeout(() => {
        hollow.classList.remove('jump')
    }, 801)
}

const loop = setInterval(() =>{

    const nuvemPosition = nuvem.offsetLeft
    const florPosition = flor.offsetLeft
    const hollowPosition = +window.getComputedStyle(hollow).bottom.replace('px', '')


    if(florPosition <= 125 && florPosition > 0 && hollowPosition < 80){
        flor.style.animation = 'none'
        flor.style.left = `${florPosition}px`

        nuvem.style.animation = 'none'
        nuvem.style.left = `${nuvemPosition}px`

        hollow.style.animation = 'none'
        hollow.style.bottom = `${hollowPosition}px`

        clearInterval(loop)
    }
    
    

}, 10)



document.addEventListener('keydown', jump)