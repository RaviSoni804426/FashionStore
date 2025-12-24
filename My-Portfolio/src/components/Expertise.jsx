import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Machine Learning",
        desc: "Predictive models using Regression, Classification, and Neural Networks (RNN, LSTM). LLMs & RAG.",
        icon: "web-design.png"
    },
    {
        title: "Computer Vision",
        desc: "Object Detection, Person Count Analysis, and Video Frame Processing using advanced CV techniques.",
        icon: "dsaicon.png"
    },
    {
        title: "Data Analysis",
        desc: "Transforming raw data into insights using SQL, Pandas, Power BI, and Matplotlib. Expert in EDA.",
        icon: "databaseicon.png"
    }
];

const Expertise = () => {
    return (
        <section id="service" className="section-padding bg-white">
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <small className="text-uppercase text-primary-custom fw-bold">My Expertise</small>
                    <h3 className="fw-bold mt-2 display-6">Providing a Wide Range of<br />Digital Services</h3>
                </motion.div>

                <div className="row justify-content-center g-4">
                    {services.map((service, index) => (
                        <div className="col-10 col-md-4" key={index}>
                            <motion.div
                                className="glass-card h-100 text-center p-4 bg-light"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img src={service.icon} className="w-25 mb-4" alt={service.title} />
                                <h4 className="card-title fw-bold text-dark mb-3">{service.title}</h4>
                                <p className="text-muted">{service.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
