import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-glass' : 'bg-transparent'} transition-all duration-300`}>
            <div className="container px-4">
                <a className="navbar-brand fw-bold fs-3 text-primary-custom" href="#">Ravi Kumar</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-4">
                        {['Home', 'Service', 'About', 'Portfolio'].map((item) => (
                            <li className="nav-item" key={item}>
                                <Link
                                    activeClass="active"
                                    to={item.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link cursor-pointer"
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="btn btn-primary-custom ms-3 d-none d-lg-block cursor-pointer"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
