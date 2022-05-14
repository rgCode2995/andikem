import React from 'react'
import './InternationalQuality.css'
import GroupMap from '../../images/GroupMap.png'
import TeamMember1 from '../../images/Team Member 1.jpg'
import TeamMember2 from '../../images/Team Member 2.jpg'
import TeamMember3 from '../../images/Team Member 3.jpg'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function InternationalQuality() {
    return (
        <>
            <div className="container">
                <div className="InternationalQuality">
                    <div className="InternationalQuality__2">
                        <h3 className="InternationalQuality__font">Calidad internacional</h3>
                        <p className="InternationalQuality__div__font">Nuestra amplia relación comercial con fabricantes y proveedores de insumos quimicos enlos Estados Unidos, Europa, Asia y Latinoamérica nos permite estar en capacidad de ofrecerdiversas alternativas a la hora de prestar nuestros servicios.</p>
                        <div className="InternationalQuality__3">
                            <img src={GroupMap} alt='GroupMap'/>
                            <div className="InternationalQuality__3__font">
                                NUESTRO EQUIPO
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="InternationalQuality__4">
                                    <div className="InternationalQuality__4__img">
                                        <img src={TeamMember1} className="user__image" alt='TeamMenber1'/>
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
                                        <img src={TeamMember2} className="user__image" alt='TeamMenber2'/>
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
                                        <img src={TeamMember3} className="user__image" alt='TeamMenber3'/>
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

                        <div className="Precios__2">
                            Precios del día
                        </div>
                        <OwlCarousel autoplay autoplayTimeout={2000} loop margin={0} nav>
                            <div className="item__1" >
                                <p className="item__2">Oro</p>
                                <div className="item__3">
                                    <p className="item__3_p1">Precio actual $1,759.31</p>
                                    <p>Hoy alto $1,767.28</p>
                                </div>
                                <i className="fas fa-caret-down down__arrow_pink"></i>
                            </div>
                            <div className="item__1 item__1__color" >
                                <p className="item__2">Plata</p>
                                <div className="item__3">
                                    <p className="item__3_p1">Precio actual $1,759.31</p>
                                    <p>Hoy alto $1,767.28</p>
                                </div>
                                <i className="fas fa-caret-down down__arrow_green"></i>
                            </div>
                            <div className="item__1" >
                                <p className="item__2">Acido sulfurico</p>
                                <div className="item__3">
                                    <p className="item__3_p1">Precio actual $1,759.31</p>
                                    <p>Hoy alto $1,767.28</p>
                                </div>
                                <i className="fas fa-caret-down down__arrow_pink"></i>
                            </div>
                            <div className="item__1 item__1__color" >
                                <p className="item__2">Soda caústica</p>
                                <div className="item__3">
                                    <p className="item__3_p1">Precio actual $1,759.31</p>
                                    <p>Hoy alto $1,767.28</p>
                                </div>
                                <i className="fas fa-caret-down down__arrow_green "></i>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>



        </>
    )
}

export default InternationalQuality
