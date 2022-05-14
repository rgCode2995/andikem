import React from 'react'
import Andikemlogo from '../../images/Andikem logo bg.png'

function MainSitio() {
    return (
        <>
            <section className='sitio_bg bg_res'>
                <div className="container">
                    <div className="row">
                        <div className="col pt-5">
                            <img src={Andikemlogo} alt="sitio_bg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSitio
