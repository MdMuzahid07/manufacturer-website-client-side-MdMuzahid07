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
                <h1 className="text-2xl ml-2 text-warning font-bold mb-5"><span className="text-5xl ml-2 bg-black px-2">Our</span> Customers Says</h1>
                <Slider {...settings}>



                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black  rounded-lg">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 bg-white">
                        <div className="p-2 bg-black">
                            <div className="m-2 bg-black text-white">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                    </div>
                                </div>
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat doloribus consectetur quo, porro unde ex ut suscipit amet temporibus!</h1>
                                <div>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    








                </Slider>
            </div>
        );
    }
}