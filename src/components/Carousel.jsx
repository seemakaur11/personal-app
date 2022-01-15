import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Sliders from "./Slides";
function Imgslider() {
    return (
        <div>
            <Carousel id="carousel">
                {
                    Sliders.map((img, id) => {
                        return (
                            <Carousel.Item key={id} >
                                <img src={img.img}  className="d.block" width="100%" height="100%" alt="slide-img" />
                            </Carousel.Item>
                        )

                    })
                }
            </Carousel>
        </div>
    )
}
export default Imgslider;






