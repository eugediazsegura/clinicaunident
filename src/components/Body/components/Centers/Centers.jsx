import './Centers.css';
import clock from '../../../../assets/clock.svg';
import map from '../../../../assets/map.svg';
import phone from '../../../../assets/phone.svg';
import { useState ,useContext} from 'react';
import { AppContext } from '../../../../utils/AppContext';
import db from '../../../../utils/consultorios.json';

export const Centers = () => {
    const {provinciaSelected, dispatch} = useContext(AppContext);
  const {consultorioSeleccionado} = provinciaSelected;
    const containerStyle = {
        width: '100%', 
        height: '600px', 
        overflow: 'hidden',
        position: 'relative', 
    };
    const iframeStyle = {
        width: '100%', 
        height: '600px',
        border: '0',
        marginTop: '-3.8rem',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent', 
        zIndex: 2
    };

    const [isClickable, setIsClickable] = useState(false);

    // Función para habilitar la interacción con el iframe
    const enableInteraction = () => {
        setIsClickable(true);
    };

    const hookSelectConsultorio = (e)=>{
        const consultorio = e.target.value;
        const provincia = document.querySelector('select option[value="'+consultorio+'"]').dataset.provincia;

        dispatch({type: 'SET_CONSULTORIO', payload: {provincia, consultorio}})
    }

    return (
        <div className='appointment-container' id='consultorios'>
            <div className="select-city">
                <h3>¿Dónde se encuentran nuestros consultorios?</h3>
                <div className="select-container">
                    <select id='consultorios-select' onChange={hookSelectConsultorio}>
                        <option defaultValue={''} disabled selected>Seleccionar Provincia</option>
                        {provinciaSelected && db.map(provincia => provincia.provincia !== 'Todas' &&
                            <optgroup label={provincia.provincia} key={provincia.provincia}>
                                {provincia.consultorios.map(consultorio =>
                                    <option 
                                        selected={provinciaSelected.consultorioSeleccionado.consultorio === consultorio.consultorio}
                                        value={consultorio.consultorio} 
                                        key={consultorio.consultorio} 
                                        data-provincia={provincia.provincia}>
                                        {consultorio.consultorio}
                                    </option>)
                                }
                            </optgroup>
                        )}
                    
                    </select>
                    <div className='select-arrow'><i></i></div>
                </div>
            </div>
            <p>Contamos con sucursales en Córdoba, Jujuy, Mendoza, Río Negro, Santiago del Estero, Salta.</p>
            <div>
                <div style={containerStyle} onClick={enableInteraction}>
                {!isClickable && <div style={overlayStyle}></div>}
                <iframe src={consultorioSeleccionado.mapa} width="100%" height="480" style={iframeStyle}></iframe>
                </div>
                { consultorioSeleccionado.direccion && <div className='address-container'><img src={map} alt='map'/><p>Nuestro consultorio de <span className='consultorio'>{consultorioSeleccionado.consultorio} </span>{consultorioSeleccionado.direccion}</p></div> }
                { consultorioSeleccionado.horarios && <div className='time-container'><img src={clock} alt='clock'/>
                        <div className='time-days'>
                        {consultorioSeleccionado.horarios.map(e=>
                            <div key={e.name} >
                                <span className='horario-name time'>{e.name === 'Sábado' ? 'Sábados' : e.name}</span>
                                <span className='horario-value time'>{e.value}</span>
                            </div>
                        )}
                        </div>
                </div> }
                { consultorioSeleccionado.telefono && <div className='phone-container'><img src={phone} alt='phone'/><p className='phone-number'>{consultorioSeleccionado.telefono}</p></div> }
            </div>
        </div>
    )
}
