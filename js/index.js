
 const ware = Array.from(document.querySelectorAll('div.slider-ithem'));

let currIdx = 0;

function showCurrentIthem () {
   const wareContainer = document.querySelector('.slider');
   wareContainer.innerHTML = ware[currIdx].innerHTML;
}
showCurrentIthem ();
function nextIthem () {
currIdx++
if (currIdx >= ware.length) currIdx = 0;
showCurrentIthem()
}
function prevIthem () {
    currIdx--
    if (currIdx < 0) currIdx= ware.length - 1;
    showCurrentIthem()
}


document.getElementById('show-prev').addEventListener('click', prevIthem)
document.getElementById('show-next').addEventListener('click',nextIthem)
