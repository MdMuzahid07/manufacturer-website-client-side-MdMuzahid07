import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
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
            <div className="my-20 max-w-5xl mx-auto">
                <h1 className="text-2xl text-warning font-bold mb-5"><span className="text-5xl ml-2 bg-black px-2">Latest</span> Products</h1>
                <Slider {...settings}>



                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-warning">
                            <div className="m-2 bg-black text-white">
                                <img src="https://i.ibb.co/3mchkPd/Elite-Banner-Image.jpg" alt="" />
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed est distinctio eos, aliquam dignissimos tempora saepe. Saepe modi sapiente soluta, nemo doloremque, incidunt in quaerat expedita, ullam placeat asperiores autem deserunt? Nesciunt itaque culpa natus recusandae a, deleniti autem.</h1>
                                <button className="btn btn-warning rounded-none">Button</button>
                            </div>
                        </div>
                    </div>






                </Slider>
            </div>
        );
    }
}