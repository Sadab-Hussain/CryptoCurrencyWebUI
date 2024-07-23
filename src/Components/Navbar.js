import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState('active')
    return (
        <>
            {/* <!-- header section strats --> */}
            <header className="header_section">
                <div className="container-fluid ">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <Link className="navbar-brand" to="/">
                            <span>
                                Finexo
                            </span>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className={active === "home" ? "active nav-item" : "nav-item"} onClick={() => setActive("home")}>
                                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className={active === "about" ? "active nav-item" : "nav-item"} onClick={() => setActive("about")}>
                                    <Link className="nav-link" to="/about"> About</Link>
                                </li>
                                <li className={active === "services" ? "active nav-item" : "nav-item"} onClick={() => setActive("services")}>
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className={active === "why" ? "active nav-item" : "nav-item"} onClick={() => setActive("why")}>
                                    <Link className="nav-link" to="/whyUs">Why Us</Link>
                                </li>
                                <li className={active === "team" ? "active nav-item" : "nav-item"} onClick={() => setActive("team")}>
                                    <Link className="nav-link" to="/ourteam">Team</Link>
                                </li>
                                <li className={active === "login" ? "active nav-item" : "nav-item"} onClick={() => setActive("login")}>
                                    <Link className="nav-link" to="/home"> <i className="fa fa-user" aria-hidden="true"></i> Login</Link>
                                </li>
                                <form className="form-inline">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- end header section --> */}
        </>
    )
}

export default Navbar