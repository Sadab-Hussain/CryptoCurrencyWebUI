import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <>
            <div className="hero_area">

                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src={require("../images/hero-bg.png")} alt="" />
                    </div>
                </div>
                {/* <!-- slider section --> */}
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Crypto <br />
                                                    Currency
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="/" className="btn1">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={require("../images/slider-img.png")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Crypto <br />
                                                    Currency
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="/" className="btn1">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={require("../images/slider-img.png")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Crypto <br />
                                                    Currency
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="/" className="btn1">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={require("../images/slider-img.png")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li>
                        </ol>
                    </div>

                </section>
            </div>
            {/* <!-- end slider section --> */}
        </>
    )
}

export default HeroSection