const menuBtn = document.querySelector('.menu-btn');
  const navlink = document.querySelector('nav-link');
  menuBtn.addEventListener('click' ,() =>{
    navlink.classList.toggle('mobile-menu')
  })