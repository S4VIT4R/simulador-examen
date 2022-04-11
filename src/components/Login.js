import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AlertError from './AlertError';

function Login(props) {
    const navigate = useNavigate();

    const initialStateValues = {
      usuario: '',
      password: '',
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e =>{
      const {name, value} = e.target;
      setValues({...values, [name]: value})
    }

    const handleSubmit = e => {
      e.preventDefault()
      props.validarLogin(values)
      
    }

    const handleNavigate = () => {
        navigate('/register');
    }
  return (
    <div className='w-full max-w-xs m-auto'>
    {props.notificacionSesion && <AlertError message={props.notificacionSesion}></AlertError>}
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <div className='mb-4'>
          <label htmlFor='usuario' className='block text-gray-700 text-sm font-fold mb-2'>Usuario</label>
          <input type='text' name='usuario' placeholder='Ingresa tu usuario'
          className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange}></input>
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700 text-sm font-fold mb-2'>Password</label>
          <input type='password' name='password' id='password'
          placeholder='*******' className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange}></input>
        </div>
        <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline w-full'>Iniciar Sesión</button>

    </form>
    <p className='my-2 text-sm flex justify-center px-3 '>¿No tienes una cuenta?</p>
    <button onClick={handleNavigate} className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'>Crear Cuenta
    </button>
  </div>
  )
}

export default Login