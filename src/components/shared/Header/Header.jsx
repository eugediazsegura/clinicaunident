import logo from '@/assets/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt="Logo"></img>
            <ul>
                <li><a href="#consultorios">Nuestros Consultorios</a></li>
                <li><a href="#tratamientos">Tratamientos</a></li>
                <li><a href="#turnos">Turnos</a></li>
            </ul>
        </nav>
    </header>
  )
}
