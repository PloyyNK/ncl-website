import interviewData from '../data/Interview';
import '../styles/InterviewClip.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default class InterviewClip extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings} className='int-ctn'>
                {interviewData.map((vdo) => {
                    return (
                        <div>
                            <iframe 
                                width="360"
                                height="215"
                                src={vdo.link}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                            <p>{vdo.title}</p>
                        </div>
                    )
                })}
                </Slider>
            </div>
        );
    }
}