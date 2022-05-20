import React from 'react'
import './navBarStyle.css'

const NavBar = () => {
    return (
        <div className='navbar-div'>
            <div className='logo'>
                Logo!
            </div>
            <div>
                <ul className='un-ordered-list'>
                    <li>donaciones</li>
                    <li>paises</li>
                    <li>contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar