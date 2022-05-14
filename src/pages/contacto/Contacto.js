import React from 'react'
import ContactCompo from './ContactCompo'
import ContactForm from './ContactForm'
import './contacto.css'

function Contacto() {
    return (
        <>
            <section className='bg_res contacto_bg position-relative'>
                <div className="container">
                    <div className="row">
                        {/* <div className="col pt-5">
                            <img src="./images/Andikem logo bg.png" alt="sitio_bg" />
                        </div> */}
                        <h2 className='contact_main col-12 col-lg-8'>Gran <span>COMPETITIVIDAD</span><br/> en mercados locales</h2>
                    </div>
                </div>
            </section> 
            <ContactCompo/>
            <ContactForm/>
        </>
    )
}

export default Contacto
