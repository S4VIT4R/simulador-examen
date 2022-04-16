import React from 'react'
import {idExamen} from "./CardExamenes";
import {useNavigate} from "react-router-dom";
import {db, collections, getDoc} from "../firebase";


function Preguntas(props) {
    var datosExamen = []
    var datosCompletos = []
    const recuperar = async() => {
       
        const querySnapshot = await getDoc(collections(db, "Examenes"));
                        querySnapshot.forEach((doc) => {
                        if(doc.id === idExamen){
                                datosCompletos.push(doc.data());
                        }
                });
                
                datosExamen.push(datosCompletos[0].examen[0]);
                console.log(datosExamen);
                console.log(datosCompletos);
                console.log('EXAMEN');
            
                console.log(datosCompletos.length);
    }

    window.onload = recuperar();
    const navigate = useNavigate();
    console.log(idExamen);

    const salir = () => {
        navigate('/responderexamen')
    }

  return (
    <div className='bg-slate-300 w-full'>
        <div className='bg-pastel-50 w-3/4 h-9/10 m-auto mt-5 shadow rounded'>
            <div className='border border-2px h-9 bg-white flow-root'>
                <label className='font-serif ml-2 text-sm'>Alumno: {props.userName}</label>
                {/* <label className='float-center text-xl'>{idExamen}</label> */}
                {
                     <label className='float-center text-xl'>Docente: {datosExamen.usuario} Titulo: {datosExamen.title}</label>
                    // datosExamen.map((examen) => {
                    //     return (
                           
                    //     )
                    // })
                }
                <button onClick={salir} className='float-right'> <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg></button>
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