import React from 'react';
import './style.css';
import { OutlineBtnDark, ServiceCard } from '../../components';

const Service = () => {

    const serviceContent = [
        {
            image: '/assets/icons/icon-1.png',
            heading: 'Mobile Application',
            desc: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        },
        {
            image: '/assets/icons/icon-1.png',
            heading: 'Mobile Application',
            desc: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        },
        {
            image: '/assets/icons/icon-1.png',
            heading: 'Mobile Application',
            desc: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        },
        {
            image: '/assets/icons/icon-1.png',
            heading: 'Mobile Application',
            desc: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        },
        {
            image: '/assets/icons/icon-1.png',
            heading: 'Mobile Application',
            desc: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        },
        {
            image: '/assets/icons/icon-1.png',
            heading: 'Mobile Application',
            desc: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        },
    ]

    return (
        <>
            <div className="service">
                <div className="container">
                    <div className="fs-48 fw-800 text-white text-center mb-5">Services that connect you to <br className="d-lg-block d-none" /> your users</div>

                    <div className="row mx-0 mb-5">
                        {serviceContent.map((serviceContent, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <div className="col-lg-4 mb-3">
                                        <ServiceCard serviceContent={serviceContent} />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>

                    <div className="d-flex justify-content-center">
                        <OutlineBtnDark text={"Explore all"} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Service
