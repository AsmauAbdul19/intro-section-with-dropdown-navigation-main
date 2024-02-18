const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close_menu')
const navFeaturedOnes = document.querySelector('.features_one');
const navFeaturedTwos = document.querySelector('.features_two');
const mobileNavFeaturedOnes = document.querySelector('.mobile-features_one');
const mobileNavFeaturedTwos = document.querySelector('.mobile-features_two');
const navFeatOne = document.querySelector('.features_menu_one');
const navFeatTwo = document.querySelector('.features_menu_two');
const mobileNavFeatOne = document.querySelector('.mobile-features_menu_one');
const mobileNavFeatTwo = document.querySelector('.mobile-features_menu_two');
const arrow_up_one = document.querySelector('.arrow_up_one');
const arrow_down_one = document.querySelector('.arrow_down_one');
const arrow_up_two = document.querySelector('.arrow_up_two');
const arrow_down_two = document.querySelector('.arrow_down_two');

headerBtn.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
})

closeMenu.addEventListener('click', () => {
    mobileNav.style.display = 'none';
})

navFeaturedOnes.addEventListener('click', function(){
    if(navFeatOne.style.display == 'block'){
        navFeatOne.style.display = 'none';
        arrow_up_one.style.display = 'none';
        arrow_down_one.style.display = 'inline';
        navFeaturedOnes.style.color = 'var(--color-gray)';
    }else{
        navFeatOne.style.display = 'block';
        arrow_up_one.style.display = 'inline';
        arrow_down_one.style.display = 'none';
        navFeaturedOnes.style.color = 'var(--color-black)';
    }
})

navFeaturedTwos.addEventListener('click', function(){
    if(navFeatTwo.style.display == 'block'){
        navFeatTwo.style.display = 'none';
        arrow_up_two.style.display = 'none';
        arrow_down_two.style.display = 'inline';
        navFeaturedTwos.style.color = 'var(--color-gray)';
    }else{
        navFeatTwo.style.display = 'block';
        arrow_up_two.style.display = 'inline';
        arrow_down_two.style.display = 'none';
        navFeaturedTwos.style.color = 'var(--color-black)';
    }
})

mobileNavFeaturedOnes.addEventListener('click', function(){
    if(mobileNavFeatOne.style.display == 'block'){
        mobileNavFeatOne.style.display = 'none';
        arrow_up_one.style.display = 'none';
        arrow_down_one.style.display = 'inline';
    }else{
        mobileNavFeatOne.style.display = 'block';
        arrow_up_one.style.display = 'inline';
        arrow_down_one.style.display = 'none';
    }
})

mobileNavFeaturedTwos.addEventListener('click', function(){
    if(mobileNavFeatTwo.style.display == 'block'){
        mobileNavFeatTwo.style.display = 'none';
        arrow_up_two.style.display = 'none';
        arrow_down_two.style.display = 'inline';
    }else{
        mobileNavFeatTwo.style.display = 'block';
        arrow_up_two.style.display = 'inline';
        arrow_down_two.style.display = 'none';
    }
})