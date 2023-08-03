let arival = document.querySelectorAll(".arivel-contener")



arival.forEach((button) => {

    button.addEventListener(('click'), () => {
        window.location.href = "/product reciew/index.html"
        console.log("button has been clicked")
    })
})


const bar = document.getElementById("bar");
const nav = document.querySelector(".navbar");
const close = document.getElementById("close");
console.log(nav);

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add(`active`)
        console.log("button has been clicked")
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
