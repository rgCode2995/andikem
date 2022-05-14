import React from 'react'
import { Link } from 'react-router-dom'
import sitiodata from './sitioData'

function Visit() {
    return (
        <>
            <section className='visit_bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 visit_title text-center mx-auto">
                            <h2>Visita tu Andikem local</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    {
                        sitiodata.map((e, key) =>
                            <div className="row" key={key}>
                                <div className="col-lg-6 col-md-8 col-10 mx-auto text-center mb-5">
                                    <Link to={e.map}>
                                        <div className="sitio_card">
                                            <img src={e.flag} alt="flag_name" className='mb-4' />
                                            <h3>{e.flagname}</h3>
                                            <p>{e.flagcontent}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Visit



