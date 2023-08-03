const buyButton = document.getElementById("buy-btn")
console.log(buyButton)

buyButton.addEventListener('onclick', () => {
    window.location.href = "/payment/index.html"
    console.log("btn has been click")
})

const buynow = () => {
    window.location.href = "/payment/index.html"
}

const smallimg = document.querySelectorAll("#small-img")
const bigimg = document.getElementById("big-img")
let url = smallimg.src
console.log(url)
smallimg.forEach((images) => {
    console.log(images)
    console.log("the small img :", images.src)
    images.addEventListener(('click'), () => {
        console.log("url has been changed")
        bigimg.src = images.src;
    })
})
