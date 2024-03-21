import { useState } from "react";

const Formsec = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        number: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        number: "",
        email: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "LastName is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.Please enter your mobile no.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            number: "",
            email: "",
        });
        setFormErrors({
            name: "",
            lastname: "",
            number: "",
            email: "",
        });
    };
    return (
        <>
            <div className='bg-form d-flex'>
                <div className='container-lg max-w-1140 align-items-center d-flex flex-grow-1 justify-content-center'>
                    <div className='row w-100 m-0'>
                        <div className='col-md-8 ps-0 pe-0 pe-md-3'>
                            <form className="registration-form" onSubmit={handleSubmit}>
                                <h2 className='fs-lg lh-62 fw-700 text-center text-md-start fw-bold ff-roboto pb-2 color-white mb-3 pb-2 pb-lg-3'>Get updated with us</h2>
                                <div className="d-flex flex-column mb-3 pb-sm-2 flex-sm-row form-gap w-100">
                                    <div className="form-group position-relative w-sm-50">
                                        <label htmlFor="name" className="color-white ff-roboto mb-1 fs-sm">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Park Seijun"
                                        // className={formErrors.name ? "error" : ""}
                                        />
                                        {formErrors.name && (
                                            <p className="error-message">{formErrors.name}</p>
                                        )}
                                    </div>
                                    <div className="form-group position-relative w-sm-50">
                                        <label htmlFor="name" className="color-white ff-roboto mb-1 fs-sm">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            placeholder="Sejiun"
                                        // className={formErrors.name ? "error" : ""}
                                        />
                                        {formErrors.name && (
                                            <p className="error-message color-white">{formErrors.lastname}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex flex-column mb-3 flex-sm-row form-gap">
                                    <div className="form-group position-relative w-sm-50">
                                        <label htmlFor="number" className="color-white ff-roboto mb-1 fs-sm">Number</label>
                                        <input
                                            required
                                            type="text"
                                            id="number"
                                            name="number"
                                            placeholder="+12 5858526478"
                                            value={formData.number}
                                            onChange={handleChange}
                                            className={formErrors.number ? "error" : ""}
                                        />
                                        {formErrors.number && (
                                            <p className="error-message">{formErrors.number}</p>
                                        )}
                                    </div>
                                    <div className="form-group position-relative w-sm-50">
                                        <label htmlFor="email" className="color-white fs-sm mb-1 ff-roboto">Email</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Park@458@Gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={formErrors.password ? "error" : ""}
                                        />
                                        {formErrors.email && (
                                            <p className="error-message">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline gap-3">
                                    <input type="checkbox" />
                                    <p className="color-white ff-roboto mb-2 pb-1 fs-sm1">By sending this form I confirm that I have read and accept the Privacy Policy</p>
                                </div>
                                <div className="text-center text-sm-start">
                                    <button type="submit" className="submit-button btn-shake mt-3 color-white fs-sm ff-roboto">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            {showSuccessPopup && (
                                <div className="success-popup">
                                    <p className="color-white">Form submitted successfully!</p>
                                    <button onClick={handlePopupClose}>Close</button>
                                </div>
                            )}
                        </div>
                        <div className='col-md-4 pe-0 ps-0 ps-md-3 d-flex flex-column text-center mt-4 mt-md-0 text-md-start justify-content-center'>
                            <p className=" fs-md2 color-white ff-roboto fw-normal">Stay updated</p>
                            <p className=" color-white opacity-75 ff-roboto fw-normal lh-21 mb-md-4 mb-2 pb-1">At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                            <p className=" fs-md2 color-white ff-roboto fw-normal">Address</p>
                            <p className=" color-white opacity-75 ff-roboto fw-normal lh-21">390 Orchard Road, 03-07, Palais Renaissance.</p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Formsec