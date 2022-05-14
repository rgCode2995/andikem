import React from 'react'
import './ModelComponent.css'
import BgLodo from '../../images/Andikem logo bg.png'
// import Timeline from '../../images/Timeline.png'
import Frame1 from '../../images/Frame-1.png'
import Frame2 from '../../images/Frame-2.png'
import Frame3 from '../../images/Frame-3.png'
import Frame6 from '../../images/Frame-6.png'
import Frame5 from '../../images/Frame-5.png'
import Frame from '../../images/Frame.png'
import Artboard13 from '../../images/Artboard13.png'
import Artboard62 from '../../images/Artboard62.png'
import Artboard17 from '../../images/Artboard17.png'
import Artboard18 from '../../images/Artboard17-1.png'
import { Link } from 'react-router-dom'


function ModelComponent() {
    return (
        <div className="ModelComponent">
            <div className="ModelComponent__inside">
                <div className="container-lg">
                    <div className="row">
                        <div className="">
                            <div className="Conoce__text">
                                <h2>Conoce el modelo </h2>
                                <img src={BgLodo} alt='BgLodo' />
                            </div>
                        </div>
                    </div>
                    <div className="Timeline__main">
                        <p className='Timeline__main__p'>Utilizando una red de logística integrada al 100%, conecta a los productores con usuarios finales. Andikem proporciona una línea directa desde el origen del producto hasta su destino final.</p>
                        <div className="Productor__main">
                            <div className="row_cont">
                                <div className='Productor__main2 cont__1' style={{ alignItems: 'start' }}>
                                    <div style={{ alignItems: 'start' }}>
                                        <img className="in__logo__2" src={Frame2} alt='frame2' />
                                    </div>
                                    <div className="pro__details">
                                        <h3>Productor</h3>
                                        <p> Es el inicio de la cadena de suministro.</p>
                                    </div>
                                </div>
                                <div className='Productor__main2 cont__2' style={{ alignItems: 'start' }}>
                                    <div style={{ alignItems: 'start' }}>
                                        <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andino"><img className="in__logo__2" src={Frame3} alt='frame3' /></Link>
                                    </div>
                                    <div className="pro__details">
                                        <img className="Artboard13__2" src={Artboard13} alt="Artboard13" />
                                        <p className="Artboard13__2__1">Suministra productos químicos de Norteamérica, Europa y Asia directamente de fabricantes certificados.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Productor__main2 cont__3'>
                                <div className="pro__details">
                                    <img className="artboard__logo__1" src={Artboard62} alt="Artboard62" />
                                    <p>Nuestros buques están disponibles para transportar los productos de terceros y los de Andikem.</p>
                                </div>
                                <div>
                                    <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andishipping"><img className="in__logo__3" src={Frame1} alt='frame1' /></Link>
                                </div>
                            </div>
                            <div className='Productor__main2 cont__4'>
                                <div className="pro__details">
                                    <img className="artboard__logo__1" src={Artboard17} alt="Artboard17" />
                                    <p>Terminales que ofrecen servicio a terceros y garantizamos entrega eficiente y segura.</p>
                                </div>
                                <div>
                                    <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/anditerminals"><img className="in__logo__3" src={Frame5} alt='frame5' /></Link>
                                </div>
                            </div>
                            <div className='Productor__main2 cont__5'>
                                <div>
                                    <Link to="/upwork/andikem-react/wp-content/reactpress/apps/andikem/sitio"><img className="in__logo__3" src={Frame6} alt='frame6' /></Link>
                                </div>
                                <div className="pro__details pro__details__truk">
                                    <img className="artboard__logo__1" src={Artboard18} alt="Artboard17-1" />
                                    <p>Es la entidad dedicada a la logistica de ultima milla, tenemos presencia en diversos paises para garantizar la llegada de tus productos.</p>
                                </div>
                            </div>
                            <div className='Productor__main2 cont__6'>
                                <div>
                                    <Link to=""><img className="in__logo__3" src={Frame} alt='frame' /></Link>
                                </div>
                                <div className="pro__details">
                                    <h3>Cliente</h3>
                                    <p>Recibe sus quimicos de manera segura y eficiente en la puerta de su empresa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelComponent
