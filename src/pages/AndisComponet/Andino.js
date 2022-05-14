import React from 'react'
import './andishipping.css'

import andikem from '../../images/andikem.png'
import TeamMember1 from '../../images/Team Member 1.jpg'
import TeamMember2 from '../../images/Team Member 2.jpg'
import TeamMember3 from '../../images/Team Member 3.jpg'
import nues_servi_3 from '../../images/nues_servi_3.png'
import nues_servi_4 from '../../images/nues_servi_4.png'
import andino_color from '../../images/andino_color.png'
import image_8_2 from '../../images/image 8-2.jpg'
import logo_andino from '../../images/empresas_f_1.png'
import andishipping_nor from '../../images/andishipping_nor.png'
import termi_nor from '../../images/termi_nor.png'
import { Link } from 'react-router-dom'



function Andino() {
    return (
        <>
            <section className='andino_bg bg_res'>
                <div className="container">
                    <div className="row">
                        <div className="col pt-5">
                            <img src={logo_andino} alt="sitio_bg" />
                        </div>
                    </div>
                </div>
            </section>


            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8  visit_title text-center mx-auto text_color">
                        <h2>¿Quienes somos?</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-md-0 mb-4">
                        <p className='mb-4 quienes_text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
                        <p className='mb-4 quienes_text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
                    </div>
                    <div className='col-md-6 text-center'>
                        <img src={image_8_2} alt="image_8" className='img_rad' />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8  visit_title text-center mx-auto text_color">
                        <h2>Nuestros servicios</h2>
                    </div>
                    <div className="col-lg-10 text-center mx-auto nuestros_services">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-5 mb-4">
                        <div className="nues_ser_text nuestros_services_box">
                            <img src={nues_servi_3} alt="nues_servi_1" className='mb-4' width="100%" />
                            <h3 className='my-3'>Transporte maritimo</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className="col-md-5 mb-4">
                        <div className="nues_ser_text nuestros_services_box">
                            <img src={nues_servi_4} alt="nues_servi_2" className='mb-4' width="100%" />
                            <h3 className='my-3'>Entrega de quimicos</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="col-lg-8  visit_title text-center mx-auto text_color">
                    <h2>Nuestro equipo</h2>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <div className="InternationalQuality__4">
                            <div className="InternationalQuality__4__img">
                                <img src={TeamMember1} className="user__image" alt='TeamMember1' />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="user_name">
                                    <path fill="#D46027" fillOpacity="1" d="M0,250L1440,0L1440,320L0,320Z"></path>
                                </svg>
                                <div className="name_hover">
                                    <h3>Mario Diaz</h3>
                                    <p>Senior java Engineer</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700" className="user_hover_name">
                                        <path fill="#0066a4" fillOpacity="1" d="M0,250L1440,0L1440,800L0,720Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="InternationalQuality__4">
                            <div className="InternationalQuality__4__img">
                                <img src={TeamMember2} className="user__image" alt='TeamMember2' />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="user_name">
                                    <path fill="#D46027" fillOpacity="1" d="M0,250L1440,0L1440,320L0,320Z"></path>
                                </svg>
                                <div className="name_hover">
                                    <h3>Mario Diaz</h3>
                                    <p>Senior java Engineer</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700" className="user_hover_name">
                                        <path fill="#0066a4" fillOpacity="1" d="M0,250L1440,0L1440,800L0,720Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="InternationalQuality__4">
                            <div className="InternationalQuality__4__img">
                                <img src={TeamMember3} className="user__image" alt='TeamMember3' />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="user_name">
                                    <path fill="#D46027" fillOpacity="1" d="M0,250L1440,0L1440,320L0,320Z"></path>
                                </svg>
                                <div className="name_hover">
                                    <h3>Mario Diaz</h3>
                                    <p>Senior java Engineer</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700" className="user_hover_name">
                                        <path fill="#0066a4" fillOpacity="1" d="M0,250L1440,0L1440,800L0,720Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8  visit_title text-center mx-auto text_color">
                        <h2>Visitar</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andino">
                            <img src={andino_color} alt="andino_nor" width="100%" />
                        </Link>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/sitio">
                            <img src={andikem} alt="andikem" width="100%" />
                        </Link>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andishipping">
                            <img src={andishipping_nor} alt="andishipping_color" width="100%" />
                        </Link>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/anditerminals">
                            <img src={termi_nor} alt="termi_nor" width="100%" />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Andino
