import React from 'react'
import Frame_1n from '../../images/Frame-1n.png';
import Frame_2n from '../../images/Frame-2n.png';
import Frame_3n from '../../images/Frame-3n.png';
import Frame_6 from '../../images/image 6.png';
import Frame_7 from '../../images/image 7.png';

function NosotrosCont() {
    return (
        <>
            <section className='nosot_cont'>
                <div className='nosot_cont_bg'>
                    <div className="container">
                        <div className="row align-items-center py-5">
                            <div className="col-md-6 ">
                                <p>Una corporación transnacional con sede principal en la ciudad de Houston, TX, Estados Unidos, considerado el líder mundial en la fabricación y suministro de petroquímicos. Buscamos revolucionar el proceso de suministro de productos químicos a las Américas a través de una infraestructura propia y el apoyo de una plataforma de comercio electrónico. Esto proporciona visibilidad y transparencia, tanto para los productores como para los consumidores de productos petroquímicos.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={Frame_1n} alt="Frame-1n" />
                            </div>
                        </div>
                        <div className="row align-items-center py-5">
                            <div className="col-md-6 text-center order-md-0 order-1">
                                <img src={Frame_2n} alt="Frame-2n" />
                            </div>
                            <div className="col-md-6 order-md-1 order-0">
                                <p>Abarcamos los sectores de Pintura, Adhesivos, Minería, Petróleo y Gas, Plásticos, Fertilizantes, Lubricantes, Alimentos, Automotriz, Cosméticos, Limpieza y otras especialidades del sector químico.</p>
                            </div>
                        </div>
                        <div className="row align-items-center py-5">
                            <div className="col-md-6">
                                <p>Actualmente vendemos, transportamos y almacenamos: Metanol, Ácido Sulfúrico, Surfactantes, Aceites Vegetales, Fluidos de Perforación, Biocombustibles, Aromáticos, Lubricantes, Sosa Cáustica y Etanol, entre otros.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={Frame_3n} alt="Frame-3n" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <h3 className='product_title'>Nuestros productores</h3>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-md-4">
                        <img src={Frame_6} alt="image6" width="100%"/>
                    </div>
                    <div className="col-md-4">
                        <img src={Frame_7} alt="image7" width="100%"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NosotrosCont
