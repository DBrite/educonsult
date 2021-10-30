import React,{useState}  from 'react'
import { Link } from 'react-router-dom'
import '../component/Navbar.css'

function Navbar() {
    const [click,setClick]=useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo'>
                        ACUMEN HIGHER 
                        EDUCATION CONSULT
                    </Link>
                  
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <i className='fas fa-times'/> : <i className='fas fa-bars'/>}
                    </div> 
                    <ul className={click? 'nav-menu-active' : 'nav-menu'} >
                        <li className='nav-item' >
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links'> 
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/services' className='nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/study-abroad' className='nav-links'>
                                Study Abroad
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/testimonial' className='nav-links'>
                                Testimonial
                            </Link>
                        </li>
                            
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
