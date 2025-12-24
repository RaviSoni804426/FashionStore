import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Python & SQL",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Analysis",
    "Tools (Git, Jupyter)"
];

const Skills = () => {
    return (
        <section id="about" className="section-padding bg-gradient-custom">
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <small className="text-uppercase text-primary-custom fw-bold">My Skills</small>
                    <h3 className="fw-bold mt-2 display-6">Tech Stack & Expertise</h3>
                    <p className="text-muted mt-3 fs-5 mw-75 mx-auto">
                        "Data Scientist and Machine Learning Engineer with hands-on experience in data analysis, predictive modeling, computer vision, and deep learning.
                        Specialized in transforming raw data into actionable insights, building PoC ML models, and delivering end-to-end analytical solutions for real-world problems."
                    </p>
                </motion.div>

                <div className="row justify-content-center g-4">
                    {skills.map((skill, index) => (
                        <div className="col-md-4 col-6" key={index}>
                            <motion.div
                                className="glass-card text-center p-4 bg-white"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h5 className="fw-bold m-0" style={{ color: '#3f396d' }}>{skill}</h5>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <motion.a
                        href="raviresume.pdf"
                        download="SampleCV.pdf"
                        className="btn btn-primary-custom btn-lg px-5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
