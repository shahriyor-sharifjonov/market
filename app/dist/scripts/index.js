"use strict";if(document.querySelector(".fixed-menu__button")){var menuClose=function(){headerMenu.classList.remove("open")},headerButton=document.querySelector(".fixed-menu__button"),headerMenu=document.querySelector(".mob-menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()}}var ripple=document.querySelectorAll(".ripple");ripple.forEach(function(a){a.addEventListener("click",function(a){var b=a.clientX-a.target.offsetLeft,c=a.clientY-a.target.offsetTop,d=document.createElement("span");d.style.left=b+"px",d.style.top=c+"px",this.appendChild(d),setTimeout(function(){d.remove()},500)})});var openDrop=function(a){a.classList.toggle("active")};window.addEventListener("click",function(a){if(!a.target.classList.contains("dropdown__button")&&document.querySelector(".dropdown__button.active")){var b=document.querySelectorAll(".dropdown__button");b.forEach(function(a){a.classList.remove("active")})}});var mobileMenu=document.querySelector(".mob-menu"),leftSidebar=document.querySelector(".left-sideber"),menu=document.querySelector(".menu"),stats=document.querySelector(".statistics");window.addEventListener("resize",function(){992>=window.innerWidth&&mobileMenu.append(menu),992<window.innerWidth&&leftSidebar.insertBefore(menu,stats)}),window.addEventListener("load",function(){992>=window.innerWidth&&mobileMenu.append(menu)}),$(".premium-blocks").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:4e3,speed:800,centerPadding:"50px",responsive:[{breakpoint:1600,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:667,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1}}]}),$(document).ready(function(){$(".faq__item > button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".faq__item-content").slideUp(200),$(".faq__item > button .faq__item-btn-arrow").removeClass("fa-minus").addClass("fa-plus")):($(".faq__item > button .faq__item-btn-arrow").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".faq__item > button").removeClass("active"),$(this).addClass("active"),$(".faq__item-content ").slideUp(200),$(this).siblings(".faq__item-content ").slideDown(200))})});function notificationsBtnCheck(a){a.classList.add("checked")}function openNotifications(){var a=document.querySelector(".notifications.popup");a.classList.add("active")}window.addEventListener("click",function(a){a.target.classList.contains("popup")&&a.target.classList.contains("active")&&a.target.classList.remove("active")});function closePopup(a){var b=a.parentNode.parentNode.parentNode.parentNode.parentNode;b.classList.contains("popup")&&b.classList.contains("active")&&b.classList.remove("active")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVDbG9zZSIsImhlYWRlck1lbnUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoZWFkZXJCdXR0b24iLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJyaXBwbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ4IiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJ5IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsInJpcHBsZXMiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0Iiwib3BlbkRyb3AiLCJlbCIsImNvbnRhaW5zIiwiYnRucyIsIm1vYmlsZU1lbnUiLCJsZWZ0U2lkZWJhciIsIm1lbnUiLCJzdGF0cyIsImlubmVyV2lkdGgiLCJhcHBlbmQiLCJpbnNlcnRCZWZvcmUiLCIkIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY2VudGVyUGFkZGluZyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJyZWFkeSIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNpYmxpbmdzIiwic2xpZGVVcCIsImFkZENsYXNzIiwiZmluZCIsInNsaWRlRG93biIsIm5vdGlmaWNhdGlvbnNCdG5DaGVjayIsImFkZCIsIm9wZW5Ob3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9uc1BvcHVwIiwiY2xvc2VQb3B1cCIsInBvcHVwQ2xvc2VCdG4iLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdz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Q0FBQ3JFLFNBQWQsQ0FBd0JnQyxRQUF4QixDQUFpQyxPQUFqQyxHQUE2Q3FDLENBQWEsQ0FBQ3JFLFNBQWQsQ0FBd0JnQyxRQUF4QixDQUFpQyxRQUFqQyxDQUY1QixFQUdsQnFDLENBQWEsQ0FBQ3JFLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFFBQS9CLENBRUgiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZml4ZWQtbWVudV9fYnV0dG9uJykpe1xyXG4gIGNvbnN0IGhlYWRlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZml4ZWQtbWVudV9fYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYi1tZW51XCIpO1xyXG4gIGxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbiAgY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIG1lbnVPcGVuZWQgPSAhbWVudU9wZW5lZDtcclxuICAgIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgfTtcclxuXHJcbiAgaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxuICB3aW5kb3cub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lbnVPcGVuZWQgJiZcclxuICAgICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJlxyXG4gICAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KVxyXG4gICAgKVxyXG4gICAgICBtZW51VG9nZ2xlKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCl7XHJcbiAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCByaXBwbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlwcGxlJylcclxucmlwcGxlLmZvckVhY2goYnRuID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGxldCB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdDtcclxuICAgIGxldCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IHJpcHBsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICByaXBwbGVzLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuICAgIHJpcHBsZXMuc3R5bGUudG9wID0geSArICdweCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHJpcHBsZXMpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByaXBwbGVzLnJlbW92ZSgpXHJcbiAgICB9LCA1MDApO1xyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuY29uc3Qgb3BlbkRyb3AgPSAoZWwpID0+IHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fYnV0dG9uJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19idXR0b24uYWN0aXZlJykpe1xyXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnV0dG9uJyk7XHJcbiAgICBidG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51Jyk7XHJcbmxldCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNpZGViZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5sZXQgc3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcycpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPD0gOTkyKXtcclxuICAgIG1vYmlsZU1lbnUuYXBwZW5kKG1lbnUpXHJcbiAgfWlmKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKXtcclxuICAgIGxlZnRTaWRlYmFyLmluc2VydEJlZm9yZShtZW51LCBzdGF0cylcclxuICB9XHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPD0gOTkyKXtcclxuICAgIG1vYmlsZU1lbnUuYXBwZW5kKG1lbnUpIFxyXG4gIH0gICAgICBcclxufSlcclxuXHJcbiQoJy5wcmVtaXVtLWJsb2NrcycpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgZG90czogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gIHNwZWVkOiA4MDAsXHJcbiAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTYwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxNDAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjY3LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoXCIuZmFxX19pdGVtID4gYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpXHJcbiAgICAgICAgLnNpYmxpbmdzKFwiLmZhcV9faXRlbS1jb250ZW50XCIpXHJcbiAgICAgICAgLnNsaWRlVXAoMjAwKTtcclxuICAgICAgJChcIi5mYXFfX2l0ZW0gPiBidXR0b24gLmZhcV9faXRlbS1idG4tYXJyb3dcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYS1taW51c1wiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLmZhcV9faXRlbSA+IGJ1dHRvbiAuZmFxX19pdGVtLWJ0bi1hcnJvd1wiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLW1pbnVzXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiZmEtcGx1c1wiKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5maW5kKFwiaVwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLXBsdXNcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYS1taW51c1wiKTtcclxuICAgICAgJChcIi5mYXFfX2l0ZW0gPiBidXR0b25cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoXCIuZmFxX19pdGVtLWNvbnRlbnQgXCIpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5zaWJsaW5ncyhcIi5mYXFfX2l0ZW0tY29udGVudCBcIilcclxuICAgICAgICAuc2xpZGVEb3duKDIwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNCdG5DaGVjayhlbCl7XHJcbiAgZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTm90aWZpY2F0aW9ucygpe1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25zLnBvcHVwJylcclxuICBub3RpZmljYXRpb25zUG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cCcpICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKGVsKXtcclxuICBjb25zdCBwb3B1cENsb3NlQnRuID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gIGlmKHBvcHVwQ2xvc2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cCcpICYmIHBvcHVwQ2xvc2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICBwb3B1cENsb3NlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgfVxyXG59ICJdfQ==
