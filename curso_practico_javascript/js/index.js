$navbar__account = document.querySelector('.navbar__account > p')
$menu_card = document.querySelector('.menu__card')

const toggleDesktopMenu = () =>{
  $menu_card.classList.toggle('inactive')
}

$navbar__account.addEventListener('click', toggleDesktopMenu)
