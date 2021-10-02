let sy1 = document.querySelector('.symbols-1');
let i1 = document.querySelector('.in-1').value;

let res1 = i1.length;
sy1.innerHTML = res1 + '/' + '64'

let interval1 = setInterval(function() {
  let i1 = document.querySelector('.in-1').value;
  res1 = i1.length;
  sy1.innerHTML = res1 + '/' + '64'
}, 100);

let sy2 = document.querySelector('.symbols-2');
let i2 = document.querySelector('.in-1').value;

let res2 = i2.length;
sy2.innerHTML = res2 + '/' + '64'

let interval2 = setInterval(function() {
  let i2 = document.querySelector('.in-2').value;
  res2 = i2.length;
  sy2.innerHTML = res2 + '/' + '64'
}, 100);