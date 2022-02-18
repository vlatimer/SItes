//const
const portfolio = document.querySelector('#portfolioDo');
const blog = document.querySelector('.blog');
const span = document.querySelector('#an');
const divForInformation = document.querySelector('.div-for-information');
const resume = document.querySelector('#resumeDo');
const skills = document.querySelector('#skillsDo');
const buttonsForSocialNetwork = document.querySelectorAll('.div-for-socialNetworks button');
const divSocialNetwork = document.querySelector('.div-for-socialNetworks');
const burgerAnimation = document.querySelector('.burger_header');
const burgerNav = document.querySelector('.burger_menu');

//function

function animationLightningPortfolio() {
  removeBurgerMenu();
  portfolio.classList.add('animationLightning');
  setTimeout(animationLightningPortfolioDelete, 2000);
}

function animationLightningPortfolioDelete() {
  portfolio.classList.remove('animationLightning');
}

function animationLightningBlog() {
  removeBurgerMenu();
  span.classList.add('animationForSpan');
  blog.classList.add('animationLightning');
  setTimeout(animationLightningBlogDelete, 2000);
}

function animationLightningBlogDelete() {
  span.classList.remove('animationForSpan');
  blog.classList.remove('animationLightning');
}

function setAnimationForButtonsForSocialNetwork() {
  removeBurgerMenu();
  let i = 0;
  for (let key of buttonsForSocialNetwork) {
    if (i % 2 == 0) {
      key.classList.add('animation-socialNetworks1');
    } else {
      key.classList.add('animation-socialNetworks2');
    }
    i++;
  }
  setTimeout(setAnimationForButtonsForSocialNetworkDelete, 2700);
}

function setAnimationForButtonsForSocialNetworkDelete() {
  for (let key of buttonsForSocialNetwork) {
    key.classList.remove('animation-socialNetworks1');
    key.classList.remove('animation-socialNetworks2');
  }
}

function rebuildSocialNetwork() {
  divSocialNetwork.classList.toggle('work');
}

function setResumeScrollBy() {
  removeBurgerMenu();
  resume.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

function setSkillsScrollBy() {
  removeBurgerMenu();
  skills.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

function burgerDoAnimation() {
  burgerAnimation.classList.toggle('active');
  burgerNav.classList.toggle('active');
  divSocialNetwork.classList.remove('work');
}

function removeBurgerMenu() {
  divSocialNetwork.classList.remove('work');
  burgerAnimation.classList.remove('active');
  burgerNav.classList.remove('active');
}
//events
document.querySelector('.burger_header').onclick = burgerDoAnimation;
document.querySelector('#portfolio').onclick = animationLightningPortfolio;
document.querySelector('#blog').onclick = animationLightningBlog;
document.querySelector('#resume').onclick = setResumeScrollBy;
document.querySelector('#skills').onclick = setSkillsScrollBy;
document.querySelector('#contact').onclick = setAnimationForButtonsForSocialNetwork;

document.querySelector('#portfolioB').onclick = animationLightningPortfolio;
document.querySelector('#blogB').onclick = animationLightningBlog;
document.querySelector('#resumeB').onclick = setResumeScrollBy;
document.querySelector('#skillsB').onclick = setSkillsScrollBy;
document.querySelector('#contact_burger').onclick = rebuildSocialNetwork;
//button close
divSocialNetwork.onclick = removeBurgerMenu;