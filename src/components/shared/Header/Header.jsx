import logo from '@/assets/logo.png';
import './Header.css';
import { useContext } from 'react';
import { AppContext } from '../../../utils/AppContext';

export const Header = () => {
  const {navegarASeccion} = useContext(AppContext);
  return (
    <header>
        <nav>
            <img src={logo}  className="logo" alt="Logo"></img>
            <input type="checkbox" id="hamburguesa" />
            <label htmlFor="hamburguesa" className="nav--hamburguesa"></label>
            <ul className='menu'>
                <li className='item1'><a  onClick={() => navegarASeccion('consultorios')}>Nuestros Consultorios</a></li>
                <li className='item1'><a onClick={() => navegarASeccion('tratamientos')}>Tratamientos</a></li>
                <li className='item1'><a onClick={() => navegarASeccion('turnos')}>Turnos</a></li>
            </ul>
        </nav>
    </header>
  )
}
