"use strict";if(document.querySelector(".header__button")){var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".mob-menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()}}var ripple=document.querySelectorAll(".ripple");ripple.forEach(function(a){a.addEventListener("click",function(a){console.log("click");var b=a.clientX-a.target.offsetLeft,c=a.clientY-a.target.offsetTop,d=document.createElement("span");d.style.left=b+"px",d.style.top=c+"px",this.appendChild(d),setTimeout(function(){d.remove()},500)})});var openDrop=function(a){a.classList.toggle("active")};window.addEventListener("click",function(a){if(!a.target.classList.contains("dropdown__button")&&document.querySelector(".dropdown__button.active")){var b=document.querySelectorAll(".dropdown__button");b.forEach(function(a){a.classList.remove("active")})}});var mobileMenu=document.querySelector(".mob-menu"),leftSidebar=document.querySelector(".left-sideber"),menu=document.querySelector(".menu"),stats=document.querySelector(".statistics");window.addEventListener("resize",function(){992>=window.innerWidth&&mobileMenu.append(menu),992<window.innerWidth&&leftSidebar.insertBefore(menu,stats)}),window.addEventListener("load",function(){992>=window.innerWidth&&mobileMenu.append(menu)}),$(".premium-blocks").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:2e3,centerPadding:"50px",responsive:[{breakpoint:1600,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:667,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1}}]}),$(document).ready(function(){$(".faq__item > button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".faq__item-content").slideUp(200),$(".faq__item > button .faq__item-btn-arrow").removeClass("fa-minus").addClass("fa-plus")):($(".faq__item > button .faq__item-btn-arrow").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".faq__item > button").removeClass("active"),$(this).addClass("active"),$(".faq__item-content ").slideUp(200),$(this).siblings(".faq__item-content ").slideDown(200))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckJ1dHRvbiIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJyaXBwbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwieCIsImNsaWVudFgiLCJ0YXJnZXQiLCJvZmZzZXRMZWZ0IiwieSIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJyaXBwbGVzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwibGVmdCIsInRvcCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsIm9wZW5Ecm9wIiwiZWwiLCJjb250YWlucyIsImJ0bnMiLCJtb2JpbGVNZW51IiwibGVmdFNpZGViYXIiLCJtZW51Iiwic3RhdHMiLCJpbm5lcldpZHRoIiwiYXBwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiJCIsInNsaWNrIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJQYWRkaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInJlYWR5Iiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwic2libGluZ3MiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCJmaW5kIiwic2xpZGVEb3duIl0sIm1hcHBpbmdzIjoiYUFDQSxHQUFHQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQUgsQ0FBNkMsSUFDckNDLENBQUFBLFlBQVksQ0FDbEJGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FGMkMsQ0FH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LENBRWEsR0FGYixDQXBCaUMsQ0F3QnBDLENBeEJELENBeUJELENBMUJELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXR0b24nKSl7XHJcbiAgY29uc3QgaGVhZGVyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuICBjb25zdCBoZWFkZXJNZW51OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2ItbWVudVwiKTtcclxuICBsZXQgbWVudU9wZW5lZCA9IGZhbHNlO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgICBoZWFkZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIH07XHJcblxyXG4gIGhlYWRlckJ1dHRvbi5vbmNsaWNrID0gbWVudVRvZ2dsZTtcclxuXHJcbiAgd2luZG93Lm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBtZW51T3BlbmVkICYmXHJcbiAgICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlckJ1dHRvbikgJiZcclxuICAgICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTWVudSlcclxuICAgIClcclxuICAgICAgbWVudVRvZ2dsZSgpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJpcHBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaXBwbGUnKVxyXG5yaXBwbGUuZm9yRWFjaChidG4gPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XHJcbiAgICBcclxuICAgIGxldCB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdDtcclxuICAgIGxldCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IHJpcHBsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICByaXBwbGVzLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuICAgIHJpcHBsZXMuc3R5bGUudG9wID0geSArICdweCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHJpcHBsZXMpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByaXBwbGVzLnJlbW92ZSgpXHJcbiAgICB9LCA1MDApO1xyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuY29uc3Qgb3BlbkRyb3AgPSAoZWwpID0+IHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fYnV0dG9uJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19idXR0b24uYWN0aXZlJykpe1xyXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnV0dG9uJyk7XHJcbiAgICBidG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51Jyk7XHJcbmxldCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNpZGViZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5sZXQgc3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcycpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPD0gOTkyKXtcclxuICAgIG1vYmlsZU1lbnUuYXBwZW5kKG1lbnUpXHJcbiAgfWlmKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKXtcclxuICAgIGxlZnRTaWRlYmFyLmluc2VydEJlZm9yZShtZW51LCBzdGF0cylcclxuICB9XHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPD0gOTkyKXtcclxuICAgIG1vYmlsZU1lbnUuYXBwZW5kKG1lbnUpIFxyXG4gIH0gICAgICBcclxufSlcclxuXHJcbiQoJy5wcmVtaXVtLWJsb2NrcycpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgZG90czogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDE2MDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTQwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDY2NyxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKFwiLmZhcV9faXRlbSA+IGJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5zaWJsaW5ncyhcIi5mYXFfX2l0ZW0tY29udGVudFwiKVxyXG4gICAgICAgIC5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICQoXCIuZmFxX19pdGVtID4gYnV0dG9uIC5mYXFfX2l0ZW0tYnRuLWFycm93XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmEtbWludXNcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5mYXFfX2l0ZW0gPiBidXR0b24gLmZhcV9faXRlbS1idG4tYXJyb3dcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYS1taW51c1wiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICQodGhpcylcclxuICAgICAgICAuZmluZChcImlcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYS1wbHVzXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiZmEtbWludXNcIik7XHJcbiAgICAgICQoXCIuZmFxX19pdGVtID4gYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKFwiLmZhcV9faXRlbS1jb250ZW50IFwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICQodGhpcylcclxuICAgICAgICAuc2libGluZ3MoXCIuZmFxX19pdGVtLWNvbnRlbnQgXCIpXHJcbiAgICAgICAgLnNsaWRlRG93bigyMDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl19
