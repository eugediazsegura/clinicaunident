import './Appointment.css';
import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography, Link} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useContext, useState } from 'react';
import { AppContext } from '../../../../utils/AppContext';
import { useFormik } from "formik";
import * as Yup from 'yup';
dayjs.locale('es');


export const Appointent = () => {
    const {provinciaSelected} = useContext(AppContext);
    const {consultorioSeleccionado} = provinciaSelected;
    const[ selectDay, setSelectDay] = useState([]);
    const { handleSubmit, values, handleChange, errors, setFieldValue, touched } = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            codigo: 0,
            telefono: 0,
            email: "", 
            calendario: null,
            horario: "",
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es requerido"),
            apellido: Yup.string().required("El apellido es requerido"),
            codigo: Yup.number().required("El Código de área es requerido"),
            telefono: Yup.number().required("El Telefono es requerido"),
            email: Yup.string().required("El Email es requerido").email("El Email es invalido"),
        }),
        onSubmit: (data) => {
            console.log(data);
        }

    })
    const defineSelect = (event) => {
        const fecha = dayjs(event);
        setFieldValue('calendario', fecha);
        const dia = consultorioSeleccionado.horarios.find(e => e.name.toLowerCase() === event.format('dddd'));
        const martesyjueves = consultorioSeleccionado.horarios.find(e => e.name.toLowerCase() === 'martes a viernes');
        const lunesaviernes = consultorioSeleccionado.horarios.find(e => e.name.toLowerCase() === 'lunes a viernes');
        if (dia) {
            setSelectDay(generate(dia.hours));
        } else if (martesyjueves) {
            setSelectDay(generate(martesyjueves.hours));
        } else if(lunesaviernes) {
            setSelectDay(generate(lunesaviernes.hours).sort());
        } else {
            setSelectDay([]);
        }     
}

    const generate = (selectList) => {
        const newList = [];
        const longitud = selectList.length / 2; + 2;
        for (let i = 0; i < longitud; i++) {
            const ind = Math.floor(Math.random() * selectList.length);
            newList.push(selectList[ind]);  
        }
        let clean = [... new Set(newList)];
        return clean;
    }
  // Función para deshabilitar ciertos días
  /**
   * 
   * @param {{name:string,value:string, hours:string[]}[]} hours 
   */
  function disableNonSelectedDays(date) {
            switch (consultorioSeleccionado.dias) {
                case 'Lunes a Viernes y Sábados':
                    return date.day() === 0;
                case 'Lunes a Viernes':
                    return date.day() === 0 || date.day() === 6;
                case 'Lunes y Martes':
                    return date.day() !== 1 && date.day() !== 2;
                case 'Martes y Miércoles':
                    return date.day() !== 2 && date.day() !== 3;
                default:
                    return;
            }

        }
    return(
        <div className='appointment'>
            <div className='appointment-form'>
                <form onSubmit={handleSubmit}  className="formulario-turnos" id="turnos">
                    <Typography 
                        variant='h3' 
                        style={{
                            textAlign: 'center', 
                            color: 'white', 
                            textTransform: 'uppercase', 
                            fontWeight: 'bold', 
                            margin: '0 0 2rem 0',
                            fontSize: '2rem'
                            }}>Reserva tu turno</Typography>
                    <Grid 
                        container 
                        alignItems={"center"}
                        justifyContent= "space-evenly"
                        spacing={3}
                        sx={{width: '100%'}}>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    label="Nombre"
                                    type='text'
                                    fullWidth
                                    name='nombre'
                                    onChange= {handleChange}
                                    variant='filled'
                                    color='primary'
                                    error= {errors.nombre}
                                    helperText= { errors.nombre}
                                    />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    label="Apellido"
                                    type='text'
                                    fullWidth
                                    name='apellido'
                                    onChange={handleChange}
                                    variant='filled'
                                    color='primary'
                                    error= {errors.apellido}
                                    helperText= { errors.apellido}
                                    />
                            </Grid>
                            <Grid item xs={4} md={2}>
                                <TextField 
                                    label="Código de área"
                                    type='number'
                                    fullWidth
                                    name='codigo'
                                    onChange={handleChange}
                                    variant='filled'
                                    color='primary'
                                    error= {errors.codigo}
                                    helperText= { errors.codigo}
                                    />
                            </Grid>
                            <Grid item xs={8} md={4}>
                                <TextField 
                                    label="Celular"
                                    type='number'
                                    fullWidth
                                    name='telefono'
                                    onChange={handleChange}
                                    variant='filled'
                                    color='primary'
                                    error= {errors.telefono}
                                    helperText= { errors.telefono}
                                    />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    label="Email"
                                    type='email'
                                    fullWidth
                                    name='email'
                                    onChange={handleChange}
                                    variant='filled'
                                    color='primary'
                                    />
                            </Grid>
                           
                            { consultorioSeleccionado.horarios  
                            ?
                            <>
                                 <Grid item xs={12} md={12}>
                                    <Typography variant='p' sx={{color: 'white', margin: '1rem', textAlign: 'left'}}>Turno para consultorio {consultorioSeleccionado.consultorio} {provinciaSelected.provinciaSeleccionada}</Typography>
                                    <Link href='#consultorios' sx={{color: 'var(--secondary-color)', textDecoration: 'none'}}>Cambiar Consultorio</Link>
                                </Grid> 
                                <Grid item xs={12} md={7}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                                    <DatePicker
                                        className='datePicker'                                         
                                        name='calendario'
                                        variant='filled'
                                        value={values.calendario}
                                        onChange={(value) => defineSelect(value)}
                                        shouldDisableDate={disableNonSelectedDays }
                                        renderInput={(params) => 
                                            <TextField 
                                                {...params}
                                                placeholder="DD/MM/YYYY" />}
                                                inputFormat="DD/MM/YYYY"
                                                format='DD/MM/YYYY'
                                                error={touched.calendario && Boolean(errors.calendario)}
                                                helperText={touched.calendario && errors.calendario}
                                                fullWidth
                                                sx={{width: '100%'}} 
                                        />
                                </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl 
                                        variant="filled" 
                                        sx={{  
                                            minWidth: 120, 
                                            width: '100%', 
                                            backgroundColor: 'white',
                                            borderRadius: '0.6rem' 
                                            }}>
                                        <InputLabel id="horario-label">Horarios disponibles</InputLabel>
                                            <Select
                                                labelId="horario-label"
                                                id='horario'
                                                label="Horario"
                                                name='horario'
                                                value = {values.horario}
                                                onChange={handleChange}
                                                error={touched.horario && Boolean(errors.horario)}
                                                helperText={touched.horario && errors.horario}
                                                fullWidth
                                                variant='filled'
                                                color='primary'
                                                sx={{width: '100%'}}
                                                disabled={selectDay.length === 0}
                                            >
                                                { selectDay.map((horario, index) => (
                                                    
                                                    <MenuItem key={index} value={horario}>{horario}</MenuItem>
                                                ))}
                                                
                                            </Select>
                                    </FormControl>
                                </Grid>
                                
                            </>
                            : <Typography variant='h6' sx={{color: 'white', margin: '1rem'}}>Debe seleccionar un consultorio de su provincia para continuar con el formulario de reserva de turno <Link href='#consultorios' sx={{color: 'var(--secondary-color)'}}>Seleccionar Consultorio</Link> </Typography>
                            }
                            <Button 
                                type='submit' 
                                variant='contained' 
                                color='secondary' 
                                sx={{
                                    width: '30%', 
                                    marginTop: '2rem',
                                    padding: '0.6rem', 
                                    borderRadius: '0.6rem', 
                                    fontSize: '1rem', 
                                    fontWeight: 'bold',
                                    '@media (max-width: 600px)': {
                                        width: '100%',
                                    }
                                    }}>
                                Agendar Turno
                            </Button>
                    </Grid>
               </form>  
            </div>
        </div>
    )
}