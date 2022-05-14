import React from 'react'
import TimeYear from './TimeYear'
import Andikemlogo from '../../images/Andikem logo bg.png'
import histori_origenes from '../../images/histori_origenes.png'

function TimeLineMain() {
    return (
        <>
            <section className='bg_res timeline_bg'>
                <div className="container">
                    <div className="row">
                        <div className="col pt-5">
                            <img src={Andikemlogo} alt="sitio_bg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='histori_compo'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 visit_title text-center mx-auto text_color">
                            <button className='historia_btn mb-4'>Nuestra historia</button>
                            <h2>Recuento historico Andikem</h2>
                            <p>The most important focus in growing a business and must be consistent over time to develop and improve</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-7 mb-5">
                            <img src={histori_origenes} alt="histori_img" width="100%"/>
                        </div>
                        <div className="col-lg-5 histori_content visit_title text-center text_color my-auto">
                            <h3>Nuestros origenes</h3>
                            <p className='line_height'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <p className='line_height'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 visit_title text-center mx-auto text_color mt-5">
                            <h2>Andikem en el tiempo</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <p>Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </section>
            <TimeYear/>
        </>
    )
}

export default TimeLineMain
