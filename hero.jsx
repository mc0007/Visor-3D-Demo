import React from 'react';
import './css/hero.css';
import {Formulario} from './pages/propuesta.jsx';
const Hero = () => {
    return (
        <div className="contenedor-plan">
            <h1>Plan de Ortodoncia Invisible</h1>
            <div className="estado">
                <label><strong>Estado</strong></label>
                <select>
                    <option selected>-</option>
                    <option >Estado1</option>
                    <option >Estado2</option>
                {/* Añade más opciones según sea necesario */}
                </select>
            </div>
            <p className='texto'>Fecha: <strong>21/02/2024</strong></p>
            <div className="detalles">
            
                <div col-6>
                    <p>Orden N°: <strong>214312</strong> </p>
                    <p>Paciente: <strong>John Doe</strong> </p>
                    <p>Odontologo: <strong>Juan Perez</strong> </p>
                </div>
                <div col-6>
                <p>Edad: <strong>30</strong></p>
                <p>Sexo: <strong>Masculino</strong></p>
                <p>Matricula: <strong>123456</strong></p>
                </div>
            
                
            </div>

            <button className="button-agregar"><strong>Agregar Propuesta</strong></button>

            <div className="propuestas">
              {/* Mapea a través del arreglo de propuestas y renderiza botones */}
                {/* {['Propuesta 1', 'Propuesta 2', 'Propuesta 3'].map((propuesta, indice) => (
                <button key={indice}>{propuesta}</button>
                ))}
 */}    
                <button className='seleccionada'>Propuesta 1</button>
                <button >Propuesta 2</button>
                <button >Propuesta 3</button>
            </div>
        </div>
    );
}

export default Hero;
