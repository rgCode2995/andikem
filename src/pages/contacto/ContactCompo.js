import React from 'react'
import contactdata from './contactdata'
import { IoIosCall } from 'react-icons/io'

function ContactCompo() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <p className='contact_head_text'>Andino Holdings USA tiene sede en Houston y operaciones en Colombia, México, Ecuador, Venezuela, Trinidad & Tobago y Perú. El servicio y eficiencia es nuestra diferencia.</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            contactdata.map((e ,key)=>
                                <div className="col-md-6 mb-4 contact_list" key={key}>
                                    <div className='d-flex'>
                                        <div className='cont_icon me-4'>
                                            {/* <i className="fas fa-phone-alt"></i> */}
                                            <IoIosCall className='call_icon'/>
                                        </div>
                                        <div className='cont_details'>
                                            <h3>{e.title}</h3>
                                            <p>{e.addline1}</p>
                                            <p>{e.addline2}</p>
                                            <p>{e.addline3}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="col-md-6 ms-auto mb-4 contact_list">
                            <div className='d-flex'>
                                <div className='cont_icon me-4'>
                                    {/* <i className="fas fa-phone-alt"></i> */}
                                    <IoIosCall className='call_icon' />
                                </div>
                                <div className='cont_details'>
                                    <h3>Trinidad y Tobago</h3>
                                    <p>Punto Lisas Polígono industrial, Cova, Trinidad</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactCompo
