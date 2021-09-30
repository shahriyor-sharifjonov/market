// Header Menu
if(document.querySelector('.header__button')){
  const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
  const headerMenu: HTMLUListElement = document.querySelector(".mob-menu");
  let menuOpened = false;
  const menuToggle = () => {
    menuOpened = !menuOpened;
    headerButton.classList.toggle("open");
    headerMenu.classList.toggle("open");
  };

  headerButton.onclick = menuToggle;

  window.onclick = (e: MouseEvent) => {
    if (
      menuOpened &&
      !e.composedPath().includes(headerButton) &&
      !e.composedPath().includes(headerMenu)
    )
      menuToggle();
  };
}

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

let mobileMenu = document.querySelector('.mob-menu');
let leftSidebar = document.querySelector('.left-sideber');
let menu = document.querySelector('.menu');
let stats = document.querySelector('.statistics');
window.addEventListener('resize', function(e){
  if(window.innerWidth <= 992){
    mobileMenu.append(menu)     
    console.log('olindi');
     
  }if(window.innerWidth > 992){
    leftSidebar.insertBefore(menu, stats)
    console.log("qo'shildi"); 
  }
})
window.addEventListener('load', function(e){
  if(window.innerWidth <= 992){
    mobileMenu.append(menu) 
    console.log('olindi');
       
  }      
})

$('.premium-blocks').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerPadding: '15px',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      }
    },
  ]
});

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
