import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import GenerarExamen from './GenerarExamen'
import NavBar from './NavBar'

function Examenes(props) {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/generarExamen');
  }
  return (
    <div className='w-full items-center'>
        <NavBar userName={props.userName}></NavBar>
        <Routes>
          <Route path='/generarExamen' element={<GenerarExamen/>}></Route>

        </Routes>
        <div className='w-3/4 bg-pastel-50 h-3/4 m-auto mt-5 shadow rounded relative flow-root'>
          <div className='border border-2px h-9 bg-white'>
              <label className='font-serif ml-2 text-xl'>Tus exámenes</label>
            <button className='float-right' onClick={handleSubmit}>
              <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
            </button>
          </div>
        </div>
       
        
    </div>
  )
}

export default Examenes