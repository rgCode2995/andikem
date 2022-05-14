import React, { useState, useEffect } from 'react'
import andikemLogo from '../../images/Artboard17-1.png'
import './Sider.css'
import { Link } from 'react-router-dom'
import { FiFacebook, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'


function Sider() {

    const [BurgerStatus, setBurgerStatus] = useState(false)

    useEffect(() => {
        document.addEventListener('mousedown', () => {
            setBurgerStatus(false);
        })
    })

    return (
        <>
            <div className={BurgerStatus ? "main__slider__show main__slider" : "main__slider"} >
                <div className="in__box">
                    <div className='andikem__logo'>
                        <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem">
                            <img src={andikemLogo} alt="ankidem logo sm" />
                        </Link>
                    </div>
                    <div className="slider__text">
                        <ul>
                            <li>
                                <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem" className="menu_hover">
                                    <i className="fas fa-arrow-right menu__arrow"></i>Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/nosotros" className="menu_hover">
                                    <i className="fas fa-arrow-right menu__arrow"></i>Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/empresas" className="menu_hover">
                                    <i className="fas fa-arrow-right menu__arrow"></i>Empresas
                                </Link>
                            </li>
                            <li>
                                <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/contacto" className="menu_hover">
                                    <i className="fas fa-arrow-right menu__arrow"></i>Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="icon">
                        <Link to="/" className="social_icon" target="blank">
                            {/* <i className="fab fa-linkedin-in"></i> */}
                            <FiLinkedin/>
                        </Link>
                        <Link to="/" className="social_icon" target="blank">
                            {/* <i className="fab fa-facebook-f"></i> */}
                            <FiFacebook/>
                        </Link>
                        <Link to="/" className="social_icon" target="blank">
                            {/* <i className="fab fa-twitter"></i> */}
                            <FiTwitter/>
                        </Link>
                        <Link to="/" className="social_icon" target="blank">
                            {/* <i className="fab fa-instagram"></i> */}
                            <FiInstagram/>
                        </Link>
                    </div>
                </div>
            </div >
            <div >
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
                <i className={BurgerStatus ? "fas fa-times menu" : "fas fa-bars menu"} onClick={() => setBurgerStatus(!BurgerStatus)}></i>
            </div>
        </>
    )
}


export default Sider

