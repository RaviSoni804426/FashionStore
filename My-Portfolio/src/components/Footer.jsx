import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-white py-5" style={{ backgroundColor: '#211e39' }}>
            <div className="container">
                <h3 className="fw-bold mb-4" style={{ fontFamily: 'Josefin Sans' }}>Ravi Kumar</h3>

                <div className="d-flex justify-content-center gap-3 mb-4">
                    <a href="https://www.linkedin.com/in/ravi-soni123" target="_blank" className="btn btn-outline-light rounded-circle shadow-sm" style={{ width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-linkedin fs-5"></i>
                    </a>
                    <a href="https://github.com/ravisoni804426" target="_blank" className="btn btn-outline-light rounded-circle shadow-sm" style={{ width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-github fs-5"></i>
                    </a>
                    <a href="https://www.kaggle.com/ravikumarsonis" target="_blank" className="btn btn-outline-light rounded-circle shadow-sm" style={{ width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-code-square fs-5"></i>
                    </a>
                    <a href="https://wa.me/919608710567" target="_blank" className="btn btn-outline-light rounded-circle shadow-sm" style={{ width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-whatsapp fs-5"></i>
                    </a>
                </div>

                <hr className="text-secondary opacity-25 my-4" />
                <p className="mb-0 text-white-50 small">&copy; {new Date().getFullYear()} Ravi Kumar | All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
