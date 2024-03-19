import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-black top-0 min-vh-100 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
                >
                    <p className="cloopp text-center fs-lg pb-5 ff-roboto color-gradient fw-semibold color-white mb-5">248 Labs</p>
                    <div class="loader mt-5 "></div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;