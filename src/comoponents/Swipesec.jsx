import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/images/png/sliderimg1.png";
import img2 from "../assets/images/png/sliderimg2.png";
import img3 from "../assets/images/png/sliderimg3.png";
import img4 from "../assets/images/png/sliderimg4.png";
import img5 from "../assets/images/png/sliderimg5.png";

const Swipesec = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        speed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className=" bg-black pt-5 pb-3">
            <div className="container-lg mt-5 max-w-1140">
                <div className="py-5">
                    <Slider {...settings}>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 " >
                            <img src={img1} alt="#" className="img-bright  h-32" />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 ">
                            <img src={img2} alt="#" className="img-bright " />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 " >
                            <img src={img3} alt="#" className="img-bright " />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 ">
                            <img src={img4} alt="#" className="img-bright h-50" />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 " >
                            <img src={img1} alt="#" className="img-bright " />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 ">
                            <img src={img2} alt="#" className="img-bright 32" />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 " >
                            <img src={img3} alt="#" className="img-bright " />
                        </div>
                        <div className="d-flex align-items-end px-4 justify-content-center h-70 ">
                            <img src={img4} alt="#" className="img-bright " />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Swipesec