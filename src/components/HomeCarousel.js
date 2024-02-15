    import React from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Home from './Home';

    const slideStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        resize: 'none',
    };

    const HomeCarousel = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>
                <div style={slideStyles}>
                    <Home />
                </div>
                <div style={slideStyles}>
                    <Home />
                </div>
                <div style={slideStyles}>
                    <Home />
                </div>
            </Slider>
        );
    };
    export default HomeCarousel;

