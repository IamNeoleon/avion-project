import React from 'react';

import './Footer.scss';
import { Link } from 'react-router-dom';

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
                                            <Link to="/not-found">New arrivals</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Best sellers</Link></li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Recently viewed</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Popular this week</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">All products</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__title">Categories</div>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Crockery</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Furniture</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Homeware</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Plant pots</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Chairs</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Crockery</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__title">Our company</div>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <Link to="/not-found">About us</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Vacancies</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Contact us</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Privacy</Link>
                                        </li>
                                        <li className="footer__list-item">
                                            <Link to="/not-found">Returns policy</Link>
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