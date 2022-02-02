const portfolio = document.querySelector('#portfolioDo');
const blog = document.querySelector('.blog') ;
const thisColor = document.querySelector('ThisColor');
console.log(thisColor);
function animationP(){
  portfolio.classList.toggle('animationForD');
}
function animationD(){
  thisColor.classList.toggle('animationForThisColor');
  blog.classList.toggle('animationForD');
}

document.querySelector('#portfolio').onclick = animationP;
document.querySelector('#blog').onclick = animationD;