gsap.registerPlugin(Draggable) 

Draggable.create(".shopElement")

const ShopElement = document.querySelectorAll('.shopElement')

for (let i = 0 ; i < ShopElement.length; i++) {
    ShopElement[i].addEventListener('dblclick', function() {
        window.location.href = './buy/buy.html';
    })
}

const ShopTitle = document.getElementById('shopTitle')

function ShopTitleHide() {
    ShopTitle.style.display = 'none'
}

setTimeout(ShopTitleHide, 3000)