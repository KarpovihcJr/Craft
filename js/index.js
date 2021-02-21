
 const ware = Array.from(document.querySelectorAll('div.slider-ithem'));


let currIdx = 0;

function showCurrentIthem () {
   const wareContainer = document.querySelector('.slider');
   wareContainer.innerHTML = ware[currIdx].innerHTML;
}
showCurrentIthem ();
