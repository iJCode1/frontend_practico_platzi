const $navbar__account = document.querySelector('.navbar__account > p')
const $menu_card = document.querySelector('.menu__card')
const $hamburgerIcon = document.querySelector('.navbar__icon')
const $menuMobile = document.querySelector('.menu')
const $navbar__cart = document.querySelector('#navbar__cart')
const $orden__container = document.querySelector('.orden__container')
const $home__cards = document.querySelector('.home__cards')
const $detalle_producto__container = document.querySelector('.detalle_producto--container')
const $detalle_producto__close = document.querySelector('.producto__image > span')

const arrayProducts = [
  {
    name: 'Estanteria',
    price: '3200',
    image: '../assets/images/estanteria.webp',
  },
  {
    name: 'Librero',
    price: '4099',
    image: '../assets/images/librero.webp',
  },
  {
    name: 'Estanteria',
    price: '3200',
    image: '../assets/images/estanteria.webp',
  },
  {
    name: 'Librero',
    price: '4099',
    image: '../assets/images/librero.webp',
  },
]

const toggleDesktopMenu = () =>{
  const isCartMenuOpen = !$orden__container.classList.contains('inactive')
  const isCartModalOpen = !$detalle_producto__container.classList.contains('inactive')

  isCartMenuOpen ? $orden__container.classList.add('inactive') : null
  isCartModalOpen ? $detalle_producto__container.classList.add('inactive') : null

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
  const isDetalleProductoContainerOpen = !$detalle_producto__container.classList.contains('inactive')

  isDesktopMenuOpen ? $menu_card.classList.add('inactive') : null
  isMobileMenuOpen ? $menuMobile.classList.remove('inactive') : null
  isDetalleProductoContainerOpen ? $detalle_producto__container.classList.add('inactive') : null


  $orden__container.classList.toggle('inactive')
}

const renderProducts = (array) => {
  for(product of array){
    const $card__item = document.createElement('div')
    $card__item.classList.add('card__item')

    const $productImage = document.createElement('img')
    $productImage.setAttribute('src', product.image)
    $productImage.setAttribute('alt', product.name)

    const $item__text__wrapper = document.createElement('div')
    $item__text__wrapper.classList.add('item__text--wrapper')

    const $item__text = document.createElement('div')
    $item__text.classList.add('item__text')

    const $item__price = document.createElement('h3')
    $item__price.classList.add('item__text')
    $item__price.textContent = `$${product.price} mxn`

    const $item__name = document.createElement('p')
    $item__name.classList.add('item__name')
    $item__name.textContent = `${product.name}`
    
    const $item__icon = document.createElement('div')
    $item__icon.classList.add('item__icon')

    const $iconImage = document.createElement('img')
    $iconImage.setAttribute('src', '../assets/icons/bt_add_to_cart.svg')
    $iconImage.setAttribute('alt', 'Icono de añadir al carrito')
    $iconImage.addEventListener('click', showCartModal)
    
    $item__icon.appendChild($iconImage)
    $item__text.append($item__price, $item__name)
    $item__text__wrapper.append($item__text, $item__icon)
    $card__item.append($productImage, $item__text__wrapper)

    $home__cards.appendChild($card__item)
  }
}

const showCartModal = () => {
  const isDesktopMenuOpen = !$menu_card.classList.contains('inactive')

  isDesktopMenuOpen ? $menu_card.classList.add('inactive') : null

  $detalle_producto__container.classList.remove('inactive')
}

const closeCartModal = () => {
  $detalle_producto__container.classList.add('inactive')
}

$navbar__account.addEventListener('click', toggleDesktopMenu)
$hamburgerIcon.addEventListener('click', toggleMobileMenu)
$navbar__cart.addEventListener('click', toggleCartMenu)
$detalle_producto__close.addEventListener('click', closeCartModal)

renderProducts(arrayProducts)