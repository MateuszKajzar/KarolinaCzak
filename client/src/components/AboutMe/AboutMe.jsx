import React from 'react'
import AboutMeImg from '../../assets/AboutMe.jpg'
import './AboutMe.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutMeImg} alt='hero' id="AboutMeImg" />
                    </div>
                    <div className="col-lg-6 pb-5">
                        <div className="copy">
                            <div className="text-label">
                                <h2 className='display-5'>Hej! Jestem Karolina</h2>
                                <p className=''>W przeciwieństwie do wielu trenerów, sport nie był częścią mojego życia od małego. Wręcz przeciwnie,
                                    do 19 roku życia miałem przeciętną aktywność, raczej wolałem grać w gry niż uprawiać sport, a moimi zajawkami była
                                    chociażby gra na gitarze czy taniec. Jednak gdy „odkryłem” siłownie, to totalnie się zakochałem. Zarówno w treningach,
                                    ale przede wszystkim w zdobywaniu wiedzy w zakresie odżywiania i szeroko rozumianego zdrowego trybu życia. A także jak
                                    potem się okazało - pomagania innym. Przez lata próbowałem przeróżnych diet, protokołów, treningów, suplementów.
                                    Zmagałem się z zaburzeniami odżywiania. Zmagałem się z moimi kompleksami. Żeby potem - pomóc w tym innym. Pomóc Tobie!</p>
                            </div>

                            <div className="Socials">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe