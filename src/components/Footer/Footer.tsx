import React from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__top">
                            <div className="footer__items">
                                <div className="footer__item">
                                    <div className="footer__title">Menu</div>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>New arrivals</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Best sellers</a></li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Recently viewed</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Popular this week</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>All products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__title">Categories</div>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Crockery</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Furniture</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Homeware</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Plant pots</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Chairs</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Crockery</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__title">Our company</div>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>About uss</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Vacancies</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Contact us</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Privacy</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a href="/" target='_blank'>Returns policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__form">
                                <div className="footer__form-title">Join our mailing list</div>
                                <form action="/" className="">
                                    <div className="footer__input">
                                        <input type="email" placeholder='your@email.com' />
                                    </div>
                                    <button className="footer__btn">
                                        Sign up
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="footer__bottom">
                            <div className="footer__copyright">@ Copyright 2022 Avion LTD</div>
                            <div className="footer__socials">
                                <div className="footer__icon">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;