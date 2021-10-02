"use strict";if(document.querySelector(".fixed-menu__button")){var menuClose=function(){headerMenu.classList.remove("open")},headerButton=document.querySelector(".fixed-menu__button"),headerMenu=document.querySelector(".mob-menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()}}var ripple=document.querySelectorAll(".ripple");ripple.forEach(function(a){a.addEventListener("click",function(a){var b=a.clientX-a.target.offsetLeft,c=a.clientY-a.target.offsetTop,d=document.createElement("span");d.style.left=b+"px",d.style.top=c+"px",this.appendChild(d),setTimeout(function(){d.remove()},500)})});var openDrop=function(a){a.classList.toggle("active")};window.addEventListener("click",function(a){if(!a.target.classList.contains("dropdown__button")&&document.querySelector(".dropdown__button.active")){var b=document.querySelectorAll(".dropdown__button");b.forEach(function(a){a.classList.remove("active")})}});var mobileMenu=document.querySelector(".mob-menu"),leftSidebar=document.querySelector(".left-sideber"),menu=document.querySelector(".menu"),stats=document.querySelector(".statistics");window.addEventListener("resize",function(){992>=window.innerWidth&&mobileMenu.append(menu),992<window.innerWidth&&leftSidebar.insertBefore(menu,stats)}),window.addEventListener("load",function(){992>=window.innerWidth&&mobileMenu.append(menu)}),$(".premium-blocks").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:4e3,speed:800,centerPadding:"50px",responsive:[{breakpoint:1600,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:661,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1}}]}),$(document).ready(function(){$(".faq__item > button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".faq__item-content").slideUp(200),$(".faq__item > button .faq__item-btn-arrow").removeClass("fa-minus").addClass("fa-plus")):($(".faq__item > button .faq__item-btn-arrow").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".faq__item > button").removeClass("active"),$(this).addClass("active"),$(".faq__item-content ").slideUp(200),$(this).siblings(".faq__item-content ").slideDown(200))})});function notificationsBtnCheck(a){a.classList.add("checked")}function openNotifications(){var a=document.querySelector(".notifications.popup");a.classList.add("active")}function openFaqPopup(){var a=document.querySelector(".faq-popup.popup");a.classList.add("active")}window.addEventListener("click",function(a){a.target.classList.contains("popup")&&a.target.classList.contains("active")&&a.target.classList.remove("active")});function closePopup(a){var b=a.parentNode.parentNode.parentNode.parentNode.parentNode;b.classList.contains("popup")&&b.classList.contains("active")&&b.classList.remove("active")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVDbG9zZSIsImhlYWRlck1lbnUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoZWFkZXJCdXR0b24iLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJyaXBwbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ4IiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJ5IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsInJpcHBsZXMiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0Iiwib3BlbkRyb3AiLCJlbCIsImNvbnRhaW5zIiwiYnRucyIsIm1vYmlsZU1lbnUiLCJsZWZ0U2lkZWJhciIsIm1lbnUiLCJzdGF0cyIsImlubmVyV2lkdGgiLCJhcHBlbmQiLCJpbnNlcnRCZWZvcmUiLCIkIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY2VudGVyUGFkZGluZyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJyZWFkeSIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNpYmxpbmdzIiwic2xpZGVVcCIsImFkZENsYXNzIiwiZmluZCIsInNsaWRlRG93biIsIm5vdGlmaWNhdGlvbnNCdG5DaGVjayIsImFkZCIsIm9wZW5Ob3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9uc1BvcHVwIiwib3BlbkZhcVBvcHVwIiwiZmFxUG9wdXAiLCJjbG9zZVBvcHVwIiwicG9wdXBDbG9zZUJ0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QTBCLFFBQTFCLENBRUgsQ0FKRCxDLENBTUEsUUFBU3FFLENBQUFBLFVBQVQsQ0FBb0J2QyxDQUFwQixDQUFzQixDQUNwQixHQUFNd0MsQ0FBQUEsQ0FBYSxDQUFHeEMsQ0FBRSxDQUFDeUMsVUFBSCxDQUFjQSxVQUFkLENBQXlCQSxVQUF6QixDQUFvQ0EsVUFBcEMsQ0FBK0NBLFVBQXJFLENBQ0dELENBQWEsQ0FBQ3ZFLFNBQWQsQ0FBd0JnQyxRQUF4QixDQUFpQyxPQUFqQyxHQUE2Q3VDLENBQWEsQ0FBQ3ZFLFNBQWQsQ0FBd0JnQyxRQUF4QixDQUFpQyxRQUFqQyxDQUY1QixFQUdsQnVDLENBQWEsQ0FBQ3ZFLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFFBQS9CLENBRUgiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZml4ZWQtbWVudV9fYnV0dG9uJykpe1xyXG4gIGNvbnN0IGhlYWRlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZml4ZWQtbWVudV9fYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYi1tZW51XCIpO1xyXG4gIGxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbiAgY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIG1lbnVPcGVuZWQgPSAhbWVudU9wZW5lZDtcclxuICAgIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgfTtcclxuXHJcbiAgaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxuICB3aW5kb3cub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lbnVPcGVuZWQgJiZcclxuICAgICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJlxyXG4gICAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KVxyXG4gICAgKVxyXG4gICAgICBtZW51VG9nZ2xlKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCl7XHJcbiAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCByaXBwbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlwcGxlJylcclxucmlwcGxlLmZvckVhY2goYnRuID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGxldCB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdDtcclxuICAgIGxldCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IHJpcHBsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICByaXBwbGVzLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuICAgIHJpcHBsZXMuc3R5bGUudG9wID0geSArICdweCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHJpcHBsZXMpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByaXBwbGVzLnJlbW92ZSgpXHJcbiAgICB9LCA1MDApO1xyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuY29uc3Qgb3BlbkRyb3AgPSAoZWwpID0+IHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fYnV0dG9uJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19idXR0b24uYWN0aXZlJykpe1xyXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnV0dG9uJyk7XHJcbiAgICBidG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51Jyk7XHJcbmxldCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNpZGViZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5sZXQgc3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcycpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPD0gOTkyKXtcclxuICAgIG1vYmlsZU1lbnUuYXBwZW5kKG1lbnUpXHJcbiAgfWlmKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKXtcclxuICAgIGxlZnRTaWRlYmFyLmluc2VydEJlZm9yZShtZW51LCBzdGF0cylcclxuICB9XHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPD0gOTkyKXtcclxuICAgIG1vYmlsZU1lbnUuYXBwZW5kKG1lbnUpIFxyXG4gIH0gICAgICBcclxufSlcclxuXHJcbiQoJy5wcmVtaXVtLWJsb2NrcycpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgZG90czogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gIHNwZWVkOiA4MDAsXHJcbiAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTYwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxNDAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjYxLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoXCIuZmFxX19pdGVtID4gYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpXHJcbiAgICAgICAgLnNpYmxpbmdzKFwiLmZhcV9faXRlbS1jb250ZW50XCIpXHJcbiAgICAgICAgLnNsaWRlVXAoMjAwKTtcclxuICAgICAgJChcIi5mYXFfX2l0ZW0gPiBidXR0b24gLmZhcV9faXRlbS1idG4tYXJyb3dcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYS1taW51c1wiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLmZhcV9faXRlbSA+IGJ1dHRvbiAuZmFxX19pdGVtLWJ0bi1hcnJvd1wiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLW1pbnVzXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiZmEtcGx1c1wiKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5maW5kKFwiaVwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLXBsdXNcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYS1taW51c1wiKTtcclxuICAgICAgJChcIi5mYXFfX2l0ZW0gPiBidXR0b25cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoXCIuZmFxX19pdGVtLWNvbnRlbnQgXCIpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5zaWJsaW5ncyhcIi5mYXFfX2l0ZW0tY29udGVudCBcIilcclxuICAgICAgICAuc2xpZGVEb3duKDIwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNCdG5DaGVjayhlbCl7XHJcbiAgZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTm90aWZpY2F0aW9ucygpe1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25zLnBvcHVwJylcclxuICBub3RpZmljYXRpb25zUG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkZhcVBvcHVwKCl7XHJcbiAgY29uc3QgZmFxUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxLXBvcHVwLnBvcHVwJylcclxuICBmYXFQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cCcpICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKGVsKXtcclxuICBjb25zdCBwb3B1cENsb3NlQnRuID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gIGlmKHBvcHVwQ2xvc2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cCcpICYmIHBvcHVwQ2xvc2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICBwb3B1cENsb3NlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbiJdfQ==
