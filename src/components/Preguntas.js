import React from 'react'
import {idExamen} from "./CardExamenes";
import {useNavigate} from "react-router-dom";
import {arrays} from "./ResponderExamen";


function Preguntas(props) {
    var datos = []
    for(var i = 0; i<arrays.length; i++){
        if(arrays[i].id === idExamen){
            datos.push(arrays[i]);
            break;
        }
    }


    const navigate = useNavigate();
    const salir = () => {
        navigate('/responderexamen')
        
    }
    console.log(idExamen);

   
    
  return (
    <div className='bg-slate-300 w-full'>
        <div className='bg-pastel-50 w-3/4 h-9/10 m-auto mt-5 shadow rounded'>
            <div className='border border-2px h-9 bg-white flow-root'>
                <label className='font-serif ml-2 text-sm'>Alumno: {props.userName}</label>
                {/* <label className='float-center text-xl'>{idExamen}</label> */}
                <label className='float-center text-xl'>Docente: {datos[0].usuario} Titulo: {datos[0].title}</label>
                {/* {
                     
                    datosExamen.map((examen,index) => {
                        return (
                            <label key={index} className='float-center text-xl'>Docente: {examen.usuario} Titulo: {examen.title}</label>
                        )
                    })
                } */}
                <button onClick={salir} className='float-right'> <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg></button>
            </div>

            <label className='font-serif ml-2 text-xl'>Pregunta 1</label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta1" value="azul"/> Azul
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta1" value="negro"/> Negro
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta1" value="amarillo"/> Amarillo
            </label>
            <br></br>
             {/* {--------------------------------------------------------------} */}
            <label className='font-serif ml-2 text-xl'>Pregunta 2</label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta2" value="azul"/> Azul
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta2" value="negro"/> Negro
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta2" value="amarillo"/> Amarillo
            </label>
            {/* {--------------------------------------------------------------} */}
            <br></br>
            <label className='font-serif ml-2 text-xl'>Pregunta 3</label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta3" value="azul"/> Azul
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta3" value="negro"/> Negro
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta3" value="amarillo"/> Amarillo
            </label>
            <br></br>
             {/* {--------------------------------------------------------------} */}
            <label className='font-serif ml-2 text-xl'>Pregunta 4</label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta4" value="azul"/> Azul
            </label>

            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta4" value="negro"/> Negro
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta4" value="amarillo"/> Amarillo
            </label>
             {/* {--------------------------------------------------------------} */}
             <br></br>
            <label className='font-serif ml-2 text-xl'>Pregunta 5</label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta5" value="azul"/> Azul
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta5" value="negro"/> Negro
            </label>
            <br></br>
            <label className='mx-2'>
                <input type="radio" name="pregunta6" value="amarillo"/> Amarillo
            </label>
        </div>
    </div>
  )
}



// window.onload = recuperar();



export default Preguntas