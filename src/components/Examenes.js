import React from 'react'
import NavBar from './NavBar'

function Examenes(props) {
  return (
    <div className='w-full'>
        <NavBar userName={props.userName}></NavBar>
        <h1 className='text-center font-bold mt-12'>Examenes</h1>
    </div>
  )
}

export default Examenes