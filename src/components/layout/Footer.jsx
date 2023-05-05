import React from 'react';
import './defaultStyle.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-8">
                            <a className="foot-logo pointer">
                                <img src="/assets/images/Logo.png" alt="" />
                            </a>
                            <div className="d-flex my-4 gap-4">
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">Download Now</a>
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">License</a>
                            </div>
                            <div className="d-flex mb-4 gap-4">
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">About</a>
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">Features</a>
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">Pricing</a>
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">Careers</a>
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">Help</a>
                                <a className="d-inline-block pointer fs-16 fw-400 text-white">Privacy Policy</a>
                            </div>
                            <a className="d-inline-block pointer fs-14 fw-400 primaryGray300">© 2020 Landify UI Kit. All rights reserved</a>
                        </div>
                        <div className="col-lg-4">
                            <div className="fs-18 fw-500 primaryGray300 mb-3">Get the App</div>
                            <div className="d-flex flex-column gap-3">
                                <button className='storeBtn'>
                                    <img src="/assets/images/App Store Badge.png" alt="" />
                                </button>
                                <button className='storeBtn'>
                                    <img src="/assets/images/Google Play Badge.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer