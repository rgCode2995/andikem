import React from 'react'
import './servicios.css'
import ServiceosMain from './ServiceosMain'
import ServiCompo from './ServiCompo'

function Servicios() {
    return (
        <>
            <ServiceosMain />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8  visit_title text-center mx-auto text_color">
                        <h2>Servicios que ofrecemos</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            <ServiCompo />
        </>
    )
}

export default Servicios
