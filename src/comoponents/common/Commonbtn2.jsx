
const Commonbtn = (props) => {
    return (
        <div className="btn-backbox">
            <button className={`${props.className} btn-gradient2 btn-shake color-white ff-roboto fw-normal fs-sm`}
            >{props.text}</button>
        </div>
    )
}

export default Commonbtn