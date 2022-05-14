import React from 'react'

function ContactForm() {
    return (
        <>
            <section className='cont_form'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 visit_title text-center mx-auto text_color">
                            <h2 className='mb-5'>Queremos ofrecerte de nuestro Servicio de CUMPLIMIENTO</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form_bg">
                                <form>
                                    <label className='mb-2'>First Name</label>
                                    <input type="text" placeholder='Enter your first name' className='form-control mb-4' />
                                    <label className='mb-2'>Last Name</label>
                                    <input type="text" placeholder='Enter your last name' className='form-control mb-4' />
                                    <label className='mb-2'>Your Email</label>
                                    <input type="email" placeholder='Enter your email' className='form-control mb-4' />
                                    <label className='mb-2'>Meassge</label>
                                    <textarea placeholder='Enter your message' rows="5" className='form-control mb-4' ></textarea>
                                    <button className='btn submit_btn'>Send Meassge</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 visit_title text_color m-auto">
                            <h2 className='mt-5 mt-lg-0'>Contacto</h2>
                            <p className='from_text'>Are you a producer wishing to participate directly into the Americas petrochemical market, even with a small portion of your supply? Are you a consumer wanting better service and direct access to producers of your key chemical raw materials? Do you prefer fee-based, transparent relationships with real-time information that helps you make the best decisions for your business?</p>
                            <p>Then CONTACT US TODAY!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm
