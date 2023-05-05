import React from 'react'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import './style.css';

const Hero = () => {

    const clientsLogo = [
        { image: "/assets/images/Logo-one.png" },
        { image: "/assets/images/Logo-two.png" },
        { image: "/assets/images/Logo-three.png" },
        { image: "/assets/images/Logo-four.png" },
        { image: "/assets/images/Logo-five.png" },
        { image: "/assets/images/Logo-six.png" },
        { image: "/assets/images/Logo-seven.png" },
    ]

    return (
        <>
            <div className="hero position-relative">
                <div className="webViewImage">
                    <img src="/assets/images/WebPreview.png" alt="" />
                </div>
                <div className="container">
                    <div className="row mx-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="fs-72 fw-800 primaryGray900">Landing page UI kit</div>
                            <p className="fs-18 fw-400 primaryGray900 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                            <PrimaryBtn text="Get Started" />
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-circle">
                                <img src="/assets/images/PurpleCircle.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="fs-48 fw-800 text-center primaryBlack mb-40">Trusted by our beloved clients</div>
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        {clientsLogo.map((logo, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <div className="client-image pointer">
                                        <img src={logo.image} alt="" />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
