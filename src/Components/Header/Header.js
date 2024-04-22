import React from 'react'
import './Header.css'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className='header-wrapper'>

            <div className='top-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='top-left'>
                                <a className='any-questions'>Have any questions?</a>
                                <a href='/'><FaPhone /> +91-9176966446</a>
                                <a href='/'><MdOutlineMail /> info@phdassistance.com</a>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='top-right'>
                                <ul>
                                    <li><a href='/'>Research</a></li>
                                    <li><a href='/'>Insights</a></li>
                                    <li><a href='/'>FAQ</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='navbar'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src='https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to={'/aboutus'}>About Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Industries
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Help Guide</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Hire A research Assistant</a>
                                </li>
                            </ul>
                      
                        <div className='search-div'>
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><IoIosSearch /></button>
                        </form>
                        </div>
                        
                        </div>
                        
                        

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header