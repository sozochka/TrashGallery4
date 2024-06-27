let PostersMain = document.getElementById('postersMain')
let PostersWrapper = document.querySelectorAll('.postersWrapper')

PostersWrapper.forEach((PosterWrapper, i) => {
    PosterWrapper.addEventListener('click', () => {
        PostersMain.style.transform = `rotateX(-12deg) rotateY(-${i*60}deg)`;
    })
})