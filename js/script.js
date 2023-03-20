let items = document.querySelectorAll('.item')
items.forEach(item => {
   item.onclick = () => {
      item.classList.toggle('active')
   }
})

$(document).ready(function(){
   $('.slider').slick({
      arrows:false,
      dots:true,
      infinite:false
   });
});