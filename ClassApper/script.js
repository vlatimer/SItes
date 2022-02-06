//const
const portfolio = document.querySelector('#portfolioDo');
const blog = document.querySelector('.blog') ;
const thisColor = document.querySelector('ThisColor');
const divForInformation = document.querySelector('.div-for-information');
const resume = document.querySelector('#resumeDo');
const skills = document.querySelector('#skillsDo');
const buttonsForSocialNetwork = document.querySelectorAll('.div-for-socialNetworks button');

//function

function animationLightningPortfolio(){
  portfolio.classList.add('animationLightning');
  setTimeout(animationLightningPortfolioDelete, 2000);
}

function animationLightningPortfolioDelete(){
  portfolio.classList.remove('animationLightning');
}

function animationLightningBlog(){
  thisColor.classList.add('animationForThisColor');
  blog.classList.add('animationLightning');
  setTimeout(animationLightningBlogDelete, 2000);
}

function animationLightningBlogDelete(){
  thisColor.classList.remove('animationForThisColor');
  blog.classList.remove('animationLightning');
}

function setAnimationForButtonsForSocialNetwork(){
  let i = 0;
  for(let key of buttonsForSocialNetwork){
    if (i % 2 == 0){
      key.classList.add('animation-socialNetworks1');
    }
    else{
      key.classList.add('animation-socialNetworks2');
    }
    i++;
  }
  setTimeout(setAnimationForButtonsForSocialNetworkDelete, 2700);
}
function setAnimationForButtonsForSocialNetworkDelete(){
  for(let key of buttonsForSocialNetwork){
    key.classList.remove('animation-socialNetworks1');
    key.classList.remove('animation-socialNetworks2');
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
document.querySelector('#portfolio').onclick = animationLightningPortfolio;
document.querySelector('#blog').onclick = animationLightningBlog;
document.querySelector('#resume').onclick = setResumeScrollBy;
document.querySelector('#skills').onclick = setSkillsScrollBy;
document.querySelector('#contact').onclick = setAnimationForButtonsForSocialNetwork;