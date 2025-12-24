import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-light">
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <small className="text-uppercase text-primary-custom fw-bold">Get in Touch</small>
                    <h3 className="fw-bold mt-2 display-6">Any Questions?<br />Feel Free to Contact</h3>
                </motion.div>

                <div className="row justify-content-center">
                    {/* Contact Details */}
                    <motion.div
                        className="col-md-5 mb-4 mb-md-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="contact-details p-4">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn btn-outline-primary rounded-circle me-3 p-3">
                                    <i className="bi bi-geo-alt-fill fs-4"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Address</h5>
                                    <p className="mb-0 text-muted">Yellow Living, Bengaluru, Karnataka</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn btn-outline-primary rounded-circle me-3 p-3">
                                    <i className="bi bi-telephone-fill fs-4"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Phone</h5>
                                    <p className="mb-0 text-muted">+91 9608710567</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="btn btn-outline-primary rounded-circle me-3 p-3">
                                    <i className="bi bi-envelope-fill fs-4"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Email</h5>
                                    <p className="mb-0 text-muted">rk8715514@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="col-md-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <form className="glass-card p-4 bg-white">
                            <div className="mb-3">
                                <label className="form-label fw-bold">Your Name</label>
                                <input type="text" className="form-control" placeholder="John Doe" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Your Email</label>
                                <input type="email" className="form-control" placeholder="john@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Message</label>
                                <textarea className="form-control" rows="4" placeholder="How can I help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary-custom w-100 py-3 fw-bold">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
