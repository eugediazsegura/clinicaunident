import imageBanner from '@/assets/Banner.jpg';
import './Banner.css';
import { useContext } from 'react';
import { AppContext } from '../../../../utils/AppContext';
export const Banner = () => {
  const {navegarASeccion} = useContext(AppContext);
  return (
    < div className='banner-container'>
    <img src={imageBanner} alt="Banner" width={"100%"} />
    <div className='banner-text'>
        <h1>Nosotros cuidamos <span>tu sonrisa</span></h1>
        <button className='btn' onClick={() => navegarASeccion('turnos')}>Agendar turno</button>
    </div>
    </div>
  )
}
