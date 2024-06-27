const Preview = document.getElementById('preview')

function PreviewAnimation() {
    Preview.style.width = '42vw'
    Preview.style.height = '24vw'
    Preview.style.right = '3vw'
    Preview.style.top = '9vw'
    Preview.style.filter = 'brightness(.3)'
}

setTimeout(PreviewAnimation, 23000)

const Menu = document.getElementById('menu')

function MenuShow() {
    Menu.style.display = 'block'
}

setTimeout(MenuShow, 23000)