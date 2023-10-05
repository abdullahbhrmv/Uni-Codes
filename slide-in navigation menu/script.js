const openNavBtn = document.getElementById('openNav');
const closeNavBtn = document.getElementById('closeNav');
const slideNav = document.getElementById('slideNav');

openNavBtn.addEventListener('click', () => {
    slideNav.style.right = '0';
});

closeNavBtn.addEventListener('click', () => {
    slideNav.style.right = '-300px';
});
