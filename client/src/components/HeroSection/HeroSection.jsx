import React from 'react'
import HeroImg from '../../assets/Hero.jpg'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-5">
                        <div className="copy">
                            <div className="text-label">
                                <h2 className='display-5'>Karolina Czak</h2>
                                <h1 className='display-1 pb-3'>Chcesz zmienić swoją sylwetkę?</h1>
                            </div>

                            <div className="mojaOferta">
                                <button className='btn btn-primary shadow-none'>Moja Oferta</button>
                                <button className='btn btn-light shadow-none ms-3'>Moja Oferta &rarr;</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={HeroImg} alt='hero' id="HeroSectionImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection