import React from 'react'

const Commonbtn = (props) => {
    return (
        <button className={`${props.className} btn-gradient btn-shake color-white ff-roboto fw-bold`}
        >{props.text}</button>
    )
}

export default Commonbtn