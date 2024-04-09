/* eslint-disable no-case-declarations */
import React from "react";
import db from "../utils/consultorios.json";
export const AppContext = React.createContext();


/**
 * @param {State} state - The current state.
 * @param {Action} action - The action object.
 * @return {object} The updated state.
 */
export const AppReducer = (state, action) => {
    switch(action.type) {
        case "SET_CONSULTORIO":
            const {provincia, consultorio} = action.payload;
            const provinciaObj = db.find(p=>p.provincia === provincia);
            const consultorioObj = provinciaObj.consultorios.find(c=>c.consultorio === consultorio);
            return {provinciaSeleccionada:provincia, consultorioSeleccionado:consultorioObj};
        case "GET_CONSULTORIO":
            return state;
        default:
            return state;
    }
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

