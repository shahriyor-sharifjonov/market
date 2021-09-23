const ripple = document.querySelectorAll('.ripple')
ripple.forEach(btn => {
  btn.addEventListener('click', function(e){
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