import React from 'react'
import NavBarAlumno from './NavBarAlumno'

function ResponderExamen(props) {
  return (
    <div className='w-full'>
    <NavBarAlumno userName={props.userName}></NavBarAlumno>
    <h1 className='text-center font-bold mt-12'>Examenes Disponibles</h1>
  </div> 
  )
}

export default ResponderExamen