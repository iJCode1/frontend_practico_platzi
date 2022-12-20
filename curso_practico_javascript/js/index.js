$navbar__account = document.querySelector('.navbar__account > p')
$menu_card = document.querySelector('.menu__card')
$hamburgerIcon = document.querySelector('.navbar__icon')
$menuMobile = document.querySelector('.menu')
$navbar__cart = document.querySelector('#navbar__cart')
$orden__container = document.querySelector('.orden__container')

const toggleDesktopMenu = () =>{
  const isCartMenuOpen = !$orden__container.classList.contains('inactive')

  isCartMenuOpen ? $orden__container.classList.add('inactive') : null

  $menu_card.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
  const isCartMenuOpen = !$orden__container.classList.contains("inactive")

  isCartMenuOpen ? $orden__container.classList.add('inactive') : null

  $menuMobile.classList.toggle('inactive')
  
}

const toggleCartMenu = () => {
  const isDesktopMenuOpen = !$menu_card.classList.contains('inactive')
  const isMobileMenuOpen = $menuMobile.classList.contains("inactive")

  isDesktopMenuOpen ? $menu_card.classList.add('inactive') : null
  isMobileMenuOpen ? $menuMobile.classList.remove('inactive') : null

  $orden__container.classList.toggle('inactive')
}

$navbar__account.addEventListener('click', toggleDesktopMenu)
$hamburgerIcon.addEventListener('click', toggleMobileMenu)
$navbar__cart.addEventListener('click', toggleCartMenu)
