import React from 'react'
import CardExamenes from './CardExamenes'
import NavBarAlumno from './NavBarAlumno'
import {db, collections, getDoc} from "../firebase";
import { Route, Routes } from 'react-router-dom';
import Preguntas from './Preguntas';
  
var datosExamen = [];
var credencialesExamen = [];
var datosCompletos = [];
export var arrays = [];
export var preguntas = [];


function ResponderExamen(props) {
  return (
    <div className='w-full'>
    <NavBarAlumno userName={props.userName}></NavBarAlumno>
    <Routes>
      <Route path='/preguntas' element={<Preguntas></Preguntas>} component={Preguntas}></Route>
    </Routes>
    <div className='bg-pastel-50 w-3/4 h-3/4 m-auto mt-5 shadow rounded'>
      <div className='border border-2px h-9 bg-white'>
        <label className='font-serif ml-2 text-xl'>Exámenes Disponibles</label>
      </div>
      <div>
      {
        arrays.map((examen) => {
          return(
            <CardExamenes 
            key={examen.id}
            id={examen.id}
            title={examen.title}
            imageUrl='https://i.pinimg.com/originals/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg'
            body={examen.usuario}
            />
          )
        })
      }
      </div>
    </div>
  </div> 
  )

}

export const recuperar = async() => {
  
const querySnapshot = await getDoc(collections(db, "Examenes"));
        querySnapshot.forEach((doc) => {
        datosCompletos.push(doc.data());
        credencialesExamen.push(doc.id);
});
  //console.log(datosCompletos);

  // titulo=datosCompletos[0].examen[0].title;
  // profesor=datosCompletos[0].examen[0].usuario;
  // console.log(datosCompletos.length);
  var i;
  for(i=0; i<datosCompletos.length; i++){
    datosExamen.push(datosCompletos[i].examen[0]);
    var id = credencialesExamen[i];
    var title = datosExamen[i].title;
    var usuario = datosExamen[i].usuario;
    arrays.push({id,title,usuario});
  }
  // datosExamen.push(datosCompletos[0].examen[0]);
  
  // // console.log(datosCompletos[0].examen[0].title)

  // preguntas.push(datosCompletos[0].examen[1]);
  // preguntas.push(datosCompletos[0].examen[2]);
  // preguntas.push(datosCompletos[0].examen[3]);
  console.log(datosExamen);
  console.log(arrays);
}

 
window.onload = recuperar();

export default ResponderExamen