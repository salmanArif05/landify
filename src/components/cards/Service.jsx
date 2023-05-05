import React from 'react'

const Service = ({ serviceContent }) => {
    const { image, heading, desc } = serviceContent
    return (
        <>

            <div className="serviceCard">
                <div className="icon">
                    <img src={image} alt="" />
                </div>
                <div className="heading">{heading}</div>
                <div className="desc">{desc}</div>
                <a className='pointer service-link'>Explore <span className="arrow ms-2"><img src="/assets/icons/right-arrow.png" alt="" /></span></a>
            </div>

        </>
    )
}

export default Service
