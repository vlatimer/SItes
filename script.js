//const
const portfolio = document.querySelector('#portfolioDo');
const blog = document.querySelector('.blog') ;
const thisColor = document.querySelector('ThisColor');
const divForInformation = document.querySelector('.div-for-information');
const resume = document.querySelector('#resumeDo');
const skills = document.querySelector('#skillsDo');
const buttonsForSocialNetwork = document.querySelectorAll('.div-for-socialNetworks button');

//function

function animationP(){
  portfolio.classList.toggle('animationForD');
  if(thisColor.classList.contains('animationForThisColor')){
    thisColor.classList.remove('animationForThisColor');
    blog.classList.remove('animationForD');
  }
  if(buttonsForSocialNetwork[0].classList.contains('animation-socialNetworks1')){
    let i = 0;
    for(let key of buttonsForSocialNetwork){
    if (i % 2 == 0){
      key.classList.remove('animation-socialNetworks1');
    }
    else{
      key.classList.remove('animation-socialNetworks2');
    }
    i++;
    } 
  }
}
function animationD(){
  thisColor.classList.toggle('animationForThisColor');
  blog.classList.toggle('animationForD');
  if(portfolio.classList.contains('animationForD')){
    portfolio.classList.remove('animationForD');
  }
  if(buttonsForSocialNetwork[0].classList.contains('animation-socialNetworks1')){
    let i = 0;
    for(let key of buttonsForSocialNetwork){
    if (i % 2 == 0){
      key.classList.remove('animation-socialNetworks1');
    }
    else{
      key.classList.remove('animation-socialNetworks2');
    }
    i++;
    } 
  }
}

function setAnimationForButtonsForSocialNetwork(){
  let i = 0;
  for(let key of buttonsForSocialNetwork){
    if (i % 2 == 0){
      key.classList.toggle('animation-socialNetworks1');
    }
    else{
      key.classList.toggle('animation-socialNetworks2');
    }
    i++;
  }
  if(portfolio.classList.contains('animationForD')){
    portfolio.classList.remove('animationForD');
  }
  if(thisColor.classList.contains('animationForThisColor')){
    thisColor.classList.remove('animationForThisColor');
    blog.classList.remove('animationForD');
  }
}

function setResumeScrollBy(){
  resume.scrollIntoView({
    block: "center",
    behavior:"smooth"
  });
}
function setSkillsScrollBy(){
  skills.scrollIntoView({
    block: "center",
    behavior:"smooth"
  });
}
//events
document.querySelector('#portfolio').onclick = animationP;
document.querySelector('#blog').onclick = animationD;
document.querySelector('#resume').onclick = setResumeScrollBy;
document.querySelector('#skills').onclick = setSkillsScrollBy;
document.querySelector('#contact').onclick = setAnimationForButtonsForSocialNetwork;