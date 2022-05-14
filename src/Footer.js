import React from 'react'
import './Footer.css'
import FooterLogo from './images/Footer logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer__main">
            <div className="container_width">
                <div className="Footer__logo">
                    <img src={FooterLogo} alt='andikemlogo'/>
                    <div >
                        <ul className="services">
                            <li>
                                <Link className="link__class" to="/">Acerca de</Link>
                            </li>
                            <li>
                                <Link className="link__class" to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/servicios">Servicios</Link>
                            </li>
                            <li>
                                <Link className="link__class" to="/">Precios</Link>
                            </li>
                            <li>
                                <Link className="link__class" to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/contacto">Contacto</Link>
                            </li>
                            <li>
                                <Link className="link__class" to="/">Ayuda</Link>
                            </li>
                            <li>
                                <Link className="link__class" to="/">Politica de privacidad</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="marks">
                        © 2021 Adekim
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer