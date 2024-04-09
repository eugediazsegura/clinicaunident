import { useContext } from 'react';
import {AppContext} from '../../../../utils/AppContext';
import './Treatments.css';
import odontologiaImg from '../../../../assets/odontologia';
import ortodonciaImg from '../../../../assets/ortodoncia';

export const Treatments = () => {
  
  const {provinciaSelected} = useContext(AppContext);

  const {consultorioSeleccionado} = provinciaSelected;

  return (
    <div className='treatments' id='tratamientos'>
      <h2 className='treatments title'>Ortodoncia</h2>
        <ul>
         { consultorioSeleccionado.ortodoncia && consultorioSeleccionado.ortodoncia.map((tratamiento) => (
          <li key={tratamiento}><img src={ortodonciaImg[tratamiento]} alt={tratamiento}/></li>))}
        </ul>
      { consultorioSeleccionado.odontologia && <h2 className='treatments title'>Odontología General</h2>}
      
      <ul>
         { consultorioSeleccionado.odontologia && consultorioSeleccionado.odontologia.map((tratamiento) => (
          <li key={tratamiento}><img src={odontologiaImg[tratamiento]} alt={tratamiento}/></li>))}
         </ul>
    </div>
  )
}
