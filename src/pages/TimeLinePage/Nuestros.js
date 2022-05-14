import React from 'react'
import histori_2 from '../../images/histori_2.jpg'
import fundador_1 from '../../images/fundador_1.jpg'
import fundador_2 from '../../images/fundador_2.jpg'
import fundador_3 from '../../images/fundador_3.jpg'

function Nuestros() {
    return (
        <>
            <section className='visitoe_time_compo'>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-10 visit_title text_color visitor_time">
                            <h2 className='text-center col-md-8'>Nuestros valores</h2>
                            <p className='col-md-8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <p className='col-md-8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <img src={histori_2} alt="histori_2" width="50%" className='visitor_time_img' />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className='col-md-10 visit_title text_color text-center mx-auto pt-4'>
                            <h2>Nuestro equipo fundador</h2>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center my-5">
                        <div className="col-sm-3 mb-4">
                            <img src={fundador_1} alt="fundador_1" width="100%" />
                        </div>
                        <div className="col-sm-3 mb-4">
                            <img src={fundador_2} alt="fundador_2" width="100%" />
                        </div>
                        <div className="col-sm-3 mb-4">
                            <img src={fundador_3} alt="fundador_3" width="100%" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nuestros
