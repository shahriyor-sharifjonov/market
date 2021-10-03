// Header Menu
if(document.querySelector('.fixed-menu__button')){
  const headerButton: HTMLButtonElement =
  document.querySelector(".fixed-menu__button");
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

  function menuClose(){
    headerMenu.classList.remove('open')
  }
}

[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
  el.addEventListener('click',e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
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
  }if(window.innerWidth > 992){
    leftSidebar.insertBefore(menu, stats)
  }
})
window.addEventListener('load', function(e){
  if(window.innerWidth <= 992){
    mobileMenu.append(menu) 
  }      
})

$('.premium-blocks').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  centerPadding: '50px',
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
    {
      breakpoint: 661,
      settings: {
        slidesToShow: 1,
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



function notificationsBtnCheck(el){
  el.classList.add('checked');
}

window.addEventListener('click', function(e :MouseEvent){
  const el :HTMLElement = e.target 
  if(el.classList.contains('popup') && el.classList.contains('active')){
    el.classList.remove('active')
  }
})

function closePopup(){
  const popups = document.querySelectorAll('.popup')
  popups.forEach(el => {
    if(el.classList.contains('active')){
      el.classList.remove('active')
    }
  });
} 

function openNotifications(){
  closePopup()
  const notificationsPopup = document.querySelector('.notifications.popup')
  notificationsPopup.classList.add('active')
}

function openFaqPopup(){
  closePopup()
  const faqPopup = document.querySelector('.faq-popup.popup')
  faqPopup.classList.add('active')
}

function openMarketPopup(){
  closePopup()
  const marketPopup = document.querySelector('.market-popup.popup')
  marketPopup.classList.add('active')
}

function openArbitaj(){
  closePopup()
  const arbitajPopup = document.querySelector('.arbitaj.popup')
  arbitajPopup.classList.add('active')
}

function openContent(){
  closePopup()
  const contentPopup = document.querySelector('.popup.market-content')
  contentPopup.classList.add('active')
}

function offerCostPopup(){
  closePopup()
  const offerCostPopup = document.querySelector('.popup.offer-cost')
  offerCostPopup.classList.add('active')
}

function completeDealPopup(){
  closePopup()
  const completeDealPopup = document.querySelector('.popup.complete-deal')
  completeDealPopup.classList.add('active')
}

function rejectDealPopup(){
  closePopup()
  const rejectDealPopup = document.querySelector('.popup.reject-deal')
  rejectDealPopup.classList.add('active')
}

function finishDealPopup(){
  closePopup()
  const finishDealPopup = document.querySelector('.popup.finish-deal')
  finishDealPopup.classList.add('active')
}

function transactionHistoryPopup(){
  closePopup()
  const transactionHistoryPopup = document.querySelector('.transaction-history.popup')
  transactionHistoryPopup.classList.add('active')
}

function withdrawPopup(){
  closePopup()
  const withdrawPopup = document.querySelector('.withdraw.popup')
  withdrawPopup.classList.add('active')
}

function payoutPopup(){
  closePopup()
  const payoutPopup  = document.querySelector('.payout.popup')
  payoutPopup .classList.add('active')
}


