import React from 'react'
import './nosotros2.css';
import NosotrosCont from './NosotrosCont';
import Andikemlogo from '../../images/Andikem logo bg.png';

function Nosotros2() {
    return (
        <>
            <section className='nosotros_bg bg_res'>
                <div className="container">
                    <div className="row">
                        <div className="col pt-5">
                            <h2 className='page_title'>Nosotros somos</h2>
                            <img src={Andikemlogo} alt="sitio_bg" />
                        </div>
                    </div>
                </div>
            </section> 
            <NosotrosCont/>
        </>
    )
}

export default Nosotros2
