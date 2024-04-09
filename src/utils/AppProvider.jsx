import {useReducer} from 'react';
import db from '../utils/consultorios.json';
import {AppContext,AppReducer} from './AppContext';

/**
 * @type {State}
 */
const INITIAL_STATE = {
    provinciaSeleccionada: db[0].provincia,
    consultorioSeleccionado: db[0].consultorios[0],
}


/**
 * @param {{children:React.ReactNode|React.ReactNode[]}} children
 * @returns 
 */
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [provinciaSelected, dispatch] = useReducer(AppReducer,INITIAL_STATE);
    const navegarASeccion = (seccionId) => {
        document.getElementById(seccionId).scrollIntoView({ behavior: 'smooth' });
      }
    return (
        <AppContext.Provider value={{provinciaSelected, dispatch, navegarASeccion}}>
            { children }
        </AppContext.Provider>
    )
}



/**
 * @typedef Action
 * @property {'SET_CONSULTORIO'|'GET_CONSULTORIO'} type
 * @property {{provincia:string, consultorio:string}} payload
 */



/**
 * @typedef State
 * @property {string} provinciaSeleccionada
 * @property {Consultorio} consultorioSeleccionado
 */

/**
 * @typedef Consultorio
 * @property {string} consultorio
 * @property {string} mapa
 * @property {string} direccion
 * @property {{diashabituales?: string, sabados?: string}} horarios
 * @property {string} telefono
 * @property {string} ortodoncia
 * @property {string} odontologia
 * @property {string} [diashabituales]
 * @property {string} [disponibilidad2]
 */
