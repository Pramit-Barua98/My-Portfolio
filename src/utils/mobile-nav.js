const mobile_Nav = () =>{
  const headerBtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link')

  let isOpen = false;

  headerBtn.addEventListener('click', () => {

    isOpen = !isOpen; //toggling between boolean values

    if (isOpen) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
      // isOpen = false;
    }
    else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
      // isOpen = true;
    }
})

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () =>{
      isOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    })
  })

}




export default mobile_Nav;