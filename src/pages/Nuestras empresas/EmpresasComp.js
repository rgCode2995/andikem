import React from 'react'
import { Link } from 'react-router-dom'
import empresasbg1 from '../../images/empresas_bg1.png'
import empresasbg2 from '../../images/empresas_bg2.png'
import empresasbg3 from '../../images/empresas_bg3.png'
import empresasbg4 from '../../images/empresas_bg4.png'
import empresasf1 from '../../images/empresas_f_1.png'
import empresasf2 from '../../images/empresas_f_2.png'
import empresasf3 from '../../images/empresas_f_3.png'
import empresasf4 from '../../images/empresas_f_4.png'

function EmpresasComp() {



    return (
        <>
            <section className='empre_componet'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 visit_title text-center mx-auto text_color">
                            <h2>Nuestras empresas</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 empre_img mb-5">
                            <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andino">
                                <img src={empresasbg1} alt="backimg" className='emper_img_f1' />
                                <div className='emp_bg_img'>
                                    <img src={empresasf1} alt="frontimg" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 empre_img mb-5">
                            <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andishipping">
                                <img src={empresasbg2} alt="backimg" className='emper_img_f1' />
                                <div className='emp_bg_img'>
                                    <img src={empresasf2} alt="frontimg" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 empre_img mb-5">
                            <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/anditerminals">
                                <img src={empresasbg3} alt="backimg" className='emper_img_f1' />
                                <div className='emp_bg_img'>
                                    <img src={empresasf3} alt="frontimg" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 empre_img mb-5">
                            <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/sitio">
                                <img src={empresasbg4} alt="backimg" className='emper_img_f1' />
                                <div className='emp_bg_img'>
                                    <img src={empresasf4} alt="frontimg" />
                                </div>
                            </Link>
                            {/* <Link className="visiter" >Visiter</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmpresasComp
