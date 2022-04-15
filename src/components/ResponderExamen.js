import React from 'react'
import CardExamenes from './CardExamenes'
import NavBarAlumno from './NavBarAlumno'
import {db, collections, getDoc} from "../firebase";
  
const preguntas = [];
const datosExamen = [];
const datosCompletos = [];
// var titulo = "";
// var profesor = "";


function ResponderExamen(props) {
  console.log(datosExamen);
  window.onload = recuperar();
  return (
    <div className='w-full'>
    <NavBarAlumno userName={props.userName}></NavBarAlumno>
    <div className='bg-pastel-50 w-3/4 h-3/4 m-auto mt-5 shadow rounded'>
      <div className='border border-2px h-9 bg-white'>
        <label className='font-serif ml-2 text-xl'>Exámenes Disponibles</label>
      </div>

      <CardExamenes 
      title={datosExamen[0].title}
      imageUrl='https://i.pinimg.com/originals/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg'
      body={datosExamen[0].usuario}
    />
    </div>
  </div> 
  )

}

export const recuperar = async() => {
  
const querySnapshot = await getDoc(collections(db, "Examenes"));
        querySnapshot.forEach((doc) => {
        datosCompletos.push(doc.data());
        
});
  //console.log(datosCompletos);

  // titulo=datosCompletos[0].examen[0].title;

  // profesor=datosCompletos[0].examen[0].usuario;
  datosExamen.push(datosCompletos[0].examen[0]);
  
  // console.log(datosCompletos[0].examen[0].title)

  preguntas.push(datosCompletos[0].examen[1]);
  preguntas.push(datosCompletos[0].examen[2]);
  preguntas.push(datosCompletos[0].examen[3]);

  console.log(datosExamen[0])
}

 window.onbeforeunload = function(e) {
// window.location='/homealumno'
   return recuperar();
 }
window.onload = recuperar();


export default ResponderExamen