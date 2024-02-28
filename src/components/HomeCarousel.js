
D
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Home';

const HomeCarousel = () => {
    // State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        // Add beforeChange to update currentSlide state
        beforeChange: (current, next) => setCurrentSlide(next)
    };

const title = "Home";
const paragraph = "paragraph"
const imgurl = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    return (
        <div style={{ width: '100%', height: '100vh', overflowX: 'hidden', backgroundColor: 'white' }}>
            <Slider {...settings}>
                {/* Pass currentSlide as a prop to Home */}
                <div>
                    <Home slideIndex={currentSlide} title={title} paragraph={paragraph} imgurl={imgurl} />
                </div>
                <div>
                    <Home slideIndex={currentSlide} />
                </div>
                <div>
                    <Home slideIndex={currentSlide} />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default HomeCarousel;