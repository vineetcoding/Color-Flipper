
const buttonClick = document.querySelector('#btn');

buttonClick.addEventListener('click',function () {
    const colors = 'rgb('+randoms(225)+', '+randoms(225)+', '+randoms(225)+')';
    document.body.style.backgroundColor = colors;
    document.getElementById('color_code').innerText = colors;
})

function randoms (number) {
    return Math.floor(Math.random()*(number+1));
}
