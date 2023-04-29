import { useNavigate, Link } from "react-router-dom";
import Logo from '../../assets/icons/Logo.svg'
import useWindowSize from '../../hooks/useWindowSize'
import hamburgerMenu from '../../assets/icons/hamburger_menu.svg'
import './header.css'

const Header = () => {
  const navigate = useNavigate();

  const { width } = useWindowSize();

  // const handleRedirect = () => {
  //   navigate('/booking')
  // }

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
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About</li>
                <li>Menu</li>
                <li>
                  <Link to="/booking">Reservations</Link>
                </li>
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