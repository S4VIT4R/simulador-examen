import React from 'react'
import {Link} from "react-router-dom";

function NavBarAlumno() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/homealumno'>
                    <img src='./user3.png' width='40'></img>
                </Link>
                <button button clclassNameass="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link mx-6" to='/homealumno'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-6" to='/responderexamen'>Examenes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/editar'>Editar</Link>
                            </li>
                        </ul>
                    </div>
                <Link to='/'>
                    <img src='./logout2.png' width='40'></img>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBarAlumno