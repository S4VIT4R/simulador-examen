import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/homedocente'>
                    <img src='./home1.png' width='40'></img>
                </Link>
                <label className='text-white mt-1 mx-1'>Home</label>
                <button button clclassNameass="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link mx-6" to='/homedocente'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-6" to='/examenes'>Examenes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/resultados'>Resultados</Link>
                            </li>
                        </ul>
                    </div>
                <label className='text-white mx-2'>Cerrar Sesión</label>
                <Link to='/'>
                    <img src='./logout1.png' width='35'></img>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar