import React from 'react'
import CardExamenes from './CardExamenes'
import NavBarAlumno from './NavBarAlumno'
import {db, collections, getDoc} from "../firebase";
  
      const preguntas = [];
      const datosExamen = [];
      const datosCompletos = [];
      const recuperar = async() => {
        
      const querySnapshot = await getDoc(collections(db, "Examenes"));
              querySnapshot.forEach((doc) => {
              datosCompletos.push(doc.data());
              
      });
        console.log(datosCompletos);
      

        datosExamen.push(datosCompletos[0].examen[0]);
        console.log(datosCompletos[0].examen[0].title)

        preguntas.push(datosCompletos[0].examen[1]);
        preguntas.push(datosCompletos[0].examen[2]);
        preguntas.push(datosCompletos[0].examen[3]);
      

        console.log(datosExamen)
      }

      window.onload = recuperar();

function ResponderExamen(props) {
  

  return (
    <div className='w-full'>
    <NavBarAlumno userName={props.userName}></NavBarAlumno>
    <div className='bg-pastel-50 w-3/4 h-3/4 m-auto mt-5 shadow rounded'>
      <div className='border border-2px h-9 bg-white'>
        <label className='font-serif ml-2 text-xl'>Exámenes Disponibles</label>
      </div>
      <CardExamenes 
      title='Examen 1'
      imageUrl='https://i.pinimg.com/originals/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg'
      body='hhhhhhhhh'
    />
    </div>
  </div> 
  )
}

export default ResponderExamen