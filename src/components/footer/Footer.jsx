import React from 'react';
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Quan</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>
                <div className="footer__social">
                <a 
                href="https://www.instagram.com/k_quann.7/" 
                className="footer__social-link" 
                target="_blank"
            >
                <i class="uil uil-instagram"></i>
            </a>

            <a 
                href="https://www.facebook.com/DuongBuiKhanhQuan1811/" 
                className="footer__social-link" 
                target="_blank"
                >
                <i class="uil uil-facebook"></i>
            </a>

            <a 
                href="" 
                className="footer__social-link" 
                target="_blank"
                >
                <i class="uil uil-github-alt"></i>
            </a>
                </div>

            <span className="footer__copy">
                &#169; Crypticalder. All rights reserved
            </span>
            </div>
        </footer>
    )
}
export default Footer