import React from 'react'
import { useNavigate } from 'react-router-dom';
import {cantidadCorrectas} from "./Preguntas";

function ExamenResultado(props) {

    const navigate = useNavigate()
    const salir = () =>{
        navigate('/responderexamen');
    }
    
  return (
      
    <div className='bg-slate-300 w-full'>
        <div className='bg-pastel-50 w-3/4 h-3/4 m-auto mt-5 shadow rounded'>
            <div className='border border-2px h-9 bg-white flow-root text-center'>
                <label className='font-serif ml-2 text-sm mr-80 ml-80'>Alumno: {props.userName}</label>
                <button onClick={salir} className='float-right ml-8 mr-1'>
                    <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/> <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                </button>
            </div>
            <br></br>
            <div className='text-center flow-root'>
                 <label className='font-bold ml-2 text-xl mr-80 w-full'>!Obtuviste {cantidadCorrectas} respuestas correctas de 5 preguntas!</label>
                <br></br>
            </div>
            <br></br>
            <div className='w-full  content-center h-full'>
                {
                    cantidadCorrectas === 1 && <div className=' items-center content-center w-full ml-80'><img src='./1buena.jpg' alt='' width='357'></img></div>
                }
                {
                    cantidadCorrectas === 2 && <div className=' items-center content-center w-full ml-80'><img src='./2buenas.jpg' alt='' width='357'></img></div>
                }
                {
                    cantidadCorrectas === 3 && <div className=' items-center content-center w-full ml-80'><img src='./3buenas.jpg' alt='' width='357'></img></div>
                }
                {
                    cantidadCorrectas === 4 && <div className=' items-center content-center w-full ml-80'><img src='./4buenas.jpg' alt='' width='357'></img></div>
                }
                {
                    cantidadCorrectas > 4 && <div className=' items-center content-center w-full ml-80'><img src='./5buenas.jpg' alt='' width='357'></img></div>
                }
            </div>
        </div>
    </div>
  )
}

export default ExamenResultado