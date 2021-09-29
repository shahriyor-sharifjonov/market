const ripple = document.querySelectorAll('.ripple')
ripple.forEach(btn => {
  btn.addEventListener('click', function(e){
    console.log('click');
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    }, 500);
  })
})


const openDrop = (el) => {
  el.classList.toggle('active');
}

window.addEventListener('click', (e) => {
  if(!e.target.classList.contains('dropdown__button') && document.querySelector('.dropdown__button.active')){
    const btns = document.querySelectorAll('.dropdown__button');
    btns.forEach(btn => {
      btn.classList.remove('active')
    })
  }
})

$(document).ready(function() {
  $(".faq__item > button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".faq__item-content")
        .slideUp(200);
      $(".faq__item > button .faq__item-btn-arrow")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".faq__item > button .faq__item-btn-arrow")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".faq__item > button").removeClass("active");
      $(this).addClass("active");
      $(".faq__item-content ").slideUp(200);
      $(this)
        .siblings(".faq__item-content ")
        .slideDown(200);
    }
  });
});
