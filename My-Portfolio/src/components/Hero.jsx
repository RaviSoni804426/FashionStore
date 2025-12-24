import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="section-padding pt-5 pb-5 d-flex align-items-center min-vh-100 bg-gradient-custom">
            <div className="container">
                <div className="row justify-content-evenly align-items-center">
                    {/* Text Content */}
                    <motion.div
                        className="col-10 col-md-6 text-center text-md-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="fw-bold display-4" style={{ color: '#3f396d' }}>
                            Hello! I Am <br />
                            <span className="text-primary-custom">Ravi Kumar</span>
                        </h2>
                        <h4 className="text-secondary-custom mt-2 mb-4">
                            Data Scientist & Machine Learning Engineer
                        </h4>
                        <p className="text-muted fs-5 mb-4">
                            Expert in turning raw data into actionable insights and building state-of-the-art ML models.
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            <Link to="contact" smooth={true} duration={500} className="btn btn-primary-custom btn-lg">
                                Hire Me
                            </Link>
                            <Link to="portfolio" smooth={true} duration={500} className="btn btn-secondary-custom btn-lg">
                                See My Work
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="col-10 col-md-4 d-none d-md-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.img
                            src="ravi-profile.png"
                            className="img-fluid rounded-circle shadow-lg"
                            alt="Ravi Kumar"
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
