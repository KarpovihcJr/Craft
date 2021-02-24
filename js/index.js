
 const products = Array.from(document.querySelectorAll('div.slider-ithem'));

let currIdx = 0;

function showCurrentIthem () {
   const productsContainer = document.querySelector('.slider');
   productsContainer.innerHTML = products[currIdx].innerHTML;
}
showCurrentIthem ();
function nextIthem () {
currIdx++
if (currIdx >= products.length) currIdx = 0;
showCurrentIthem()
}
function prevIthem () {
    currIdx--
    if (currIdx < 0) currIdx= products.length - 1;
    showCurrentIthem()
}
document.getElementById('show-prev').addEventListener('click', prevIthem)
document.getElementById('show-next').addEventListener('click',nextIthem)
