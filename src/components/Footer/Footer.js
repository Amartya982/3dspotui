import React from "react";

import "./Footer.css";
import logo from "../../assets/images/a.png";
import {
    FaInstagram,
    FaYoutube,
    FaReddit,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";

const Footer = () => {
    return (
        <section class="hero footer-section">
            <div className="hero-body">
                <div className="columns">
                    <div className="column">
                        <div className="social-icons">
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaReddit />
                            </a>
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaDiscord />
                            </a>


                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;