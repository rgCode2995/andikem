import React from 'react'
import Slider from './Sider'
import './Home.css'
import Footer from '../../Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './MainPage';
import MainSitioPage from '../Sitio/MainSitioPage';
import MainEmpresas from '../Nuestras empresas/MainEmpresas';
import TimeLine from '../TimeLinePage/TimeLine';
import Servicios from '../Servicios/Servicios';
import Contacto from '../contacto/Contacto';
import Nosotros2 from '../Nosotros 2/Nosotros2';
import ScrollToTop from './ScrollTop';
import Andishipping from '../AndisComponet/Andishipping';
import Anditerminals from '../AndisComponet/Anditerminals';
import Andino from '../AndisComponet/Andino';
import Andikemmexico, { AndikemBrasil, AndikemColombia, AndikemPeru, AndikemTobago } from '../AndisComponet/AndikemSitio';




function Home() {
    return (

        <Router>
            <ScrollToTop />
            <div className="main__home">
                <Slider />
                <div className='mainPage__compo'>
                    <Switch>
                        <Route exact path="/upwork/andikem-react/wp-content/reactpress/apps/andikem">
                            <MainPage />
                        </Route>
                        <Route exact path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/nosotros">
                            <TimeLine />
                        </Route>
                        <Route exact path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/empresas">
                            <MainEmpresas />
                        </Route>
                        <Route exact path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/contacto">
                            <Contacto />
                        </Route>
                        <Route exact path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/servicios">
                            <Servicios />
                        </Route>
                        <Route exact path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/sitio">
                            <MainSitioPage />
                        </Route>
                        {/* <Nosotros2 /> */}

                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andino">
                            <Andino />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/andishipping">
                            <Andishipping />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/anditerminals">
                            <Anditerminals />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/mexico">
                            <Andikemmexico />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/peru">
                            <AndikemPeru />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/brasil">
                            <AndikemBrasil />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/colombia">
                            <AndikemColombia />
                        </Route>
                        <Route path="/upwork/andikem-react/wp-content/reactpress/apps/andikem/tobago">
                            <AndikemTobago />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default Home
