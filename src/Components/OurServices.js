import React from 'react'
import { Link } from 'react-router-dom'

const OurServices = () => {
    return (
        <>
            {/* <!-- service section --> */}

            <section className="service_section layout_padding">
                <div className="service_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>
                                Our <span>Services</span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={require("../images/s1.png")} alt=""/>
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Currency Wallet
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <Link to="">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                    <img src={require("../images/s2.png")} alt=""/>
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Security Storage
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <Link to="/">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                    <img src={require("../images/s3.png")} alt=""/>
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Expert Support
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <Link to="/">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link to="/">
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end service section --> */}
        </>
    )
}

export default OurServices