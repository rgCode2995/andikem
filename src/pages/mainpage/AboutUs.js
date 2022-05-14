import React from 'react'
import './AboutUs.css'
import fluentTarget from '../../images/fluent target.png'
import Group from '../../images/Group.png'

function AboutUs() {
    return (
        <div className="container">
            <div className="AboutUs__main ">
                <div className="row">
                    <div className="Row__component">
                        <div className="col-12">
                            <h3 className="AboutUs__main__font">¿Quienes somos?</h3>
                            <div className='AboutUs__div__font'>
                                Solucionamos problemas y creamos oportunidades para los
                                fabricantes de sustancias químicas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-6 col-sm-12 ">
                        <div className="card__container">
                        <img src={fluentTarget} className="card__img" alt='fluentTarget'/>
                            <div className="card__container__1">
                                <p className="Misión">Misión</p>
                                <div className="Proveer">Proveer soluciones logísticas, conectando de manera confiable, eficiente y transparente a los fabricantes y consumidores deproductos químicos.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <div className="card__container">
                        <img src={Group} className="card__img vision_img" alt='Group'/>
                            <div className="card__container__1">
                                <p className="Misión">Visión</p>
                                <div className="Proveer"><strong>Andikem it</strong>sea sinónimo de soluciones logísticas vía la mezcla ideal deprocura, transporte marítimo, almacenaje y servicio de última milla.</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
