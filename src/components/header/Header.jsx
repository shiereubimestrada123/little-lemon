import Logo from '../../assets/icons/Logo.svg'
import useWindowSize from '../../hooks/useWindowSize'
import hamburgerMenu from '../../assets/icons/hamburger_menu.svg'
import './header.css'

const Header = () => {
  const { width } = useWindowSize();

  return (
    <>
      <header className='header'>
        <img src={Logo} alt='' />
        <nav className='nav'>
          {width <= 768 ?
            (
              <img src={hamburgerMenu} alt="hamburger menu" />
            ) :
            (
              <ul className=''>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            )
          }
        </nav>
      </header>
    </>
  )
}

export default Header