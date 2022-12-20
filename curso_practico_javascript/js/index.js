$navbar__account = document.querySelector('.navbar__account > p')
$menu_card = document.querySelector('.menu__card')
$hamburgerIcon = document.querySelector('.navbar__icon')
$menuMobile = document.querySelector('.menu')

const toggleDesktopMenu = () =>{
  $menu_card.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
  $menuMobile.classList.toggle('inactive')
}

$navbar__account.addEventListener('click', toggleDesktopMenu)
$hamburgerIcon.addEventListener('click', toggleMobileMenu)
