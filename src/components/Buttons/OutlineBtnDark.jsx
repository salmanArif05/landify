import React from 'react'

const OutlineBtnDark = ({ text }) => {
    return (
        <button className='btn outlineServiceBtn'>{text} <span className="arrow"><img src="/assets/icons/right-arrow-white.png" alt="" /></span></button>
    )
}

export default OutlineBtnDark