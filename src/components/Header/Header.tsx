import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../assets/header-logo.png'
import { useAppSelector } from '../../hooks/hooks';
import { selectCartItems } from '../../redux/slices/cartSlice';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import classNames from 'classnames';

import './Header.scss';



const Header: React.FC = () => {
    const [countCartItems, setCountCartItems] = useState<number>(0)
    const cartItems = useAppSelector(selectCartItems);
    const [stateBurger, setStateBurger] = useState<boolean>(false);
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const headerRef = useRef<HTMLDivElement | null>(null);

    if (stateBurger) {
        document.body.classList.add('_lock');
    } else {
        document.body.classList.remove('_lock');
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > headerRef.current?.offsetTop!) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (cartItems.length > 0) {
            setCountCartItems(cartItems.length)
        } else {
            setCountCartItems(0)
        }
    }, [cartItems])

    return (
        <>
            <header ref={headerRef} className={classNames("header", { 'fixed': isFixed })}>
                <div className="container">
                    <div className="header__inner">
                        <Search />
                        <div className="header__logo">
                            <Link to='/'>
                                Avion
                            </Link>
                        </div>
                        <div className={classNames("header__right", { 'mobile': stateBurger })}>
                            <div className="header__actions">
                                <Link to='/cart'>
                                    <div className="header__cart">
                                        <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="18" height="18" fill="none" />
                                            <path d="M5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15Z" />
                                            <path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z" />
                                            <path d="M14 3.50001H2.91L2.5 1.40001C2.47662 1.28537 2.41379 1.18256 2.32243 1.10947C2.23107 1.03639 2.11697 0.997651 2 1.00001H0V2.00001H1.59L3.5 11.6C3.52338 11.7146 3.58621 11.8175 3.67757 11.8905C3.76893 11.9636 3.88303 12.0024 4 12H13V11H4.41L4 9.00001H13C13.1156 9.00284 13.2286 8.96552 13.3197 8.89441C13.4109 8.8233 13.4746 8.7228 13.5 8.61001L14.5 4.11001C14.5168 4.03582 14.5164 3.95879 14.4989 3.88478C14.4814 3.81076 14.4472 3.74172 14.399 3.6829C14.3508 3.62407 14.2898 3.57703 14.2206 3.54534C14.1515 3.51364 14.076 3.49814 14 3.50001ZM12.6 8.00001H3.81L3.11 4.50001H13.375L12.6 8.00001Z" />
                                        </svg>
                                        {countCartItems > 0 && (
                                            <div className="header__cart-items-count">
                                                <span>{countCartItems}</span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                                <a onClick={() => setStateBurger(prev => !prev)} href="#" className="header__profile">
                                    <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="18" fill="none" />
                                        <path d="M8 4C7.50555 4 7.0222 4.14662 6.61108 4.42133C6.19995 4.69603 5.87952 5.08648 5.6903 5.54329C5.50108 6.00011 5.45158 6.50277 5.54804 6.98773C5.6445 7.47268 5.88261 7.91814 6.23224 8.26777C6.58187 8.6174 7.02733 8.8555 7.51228 8.95196C7.99723 9.04843 8.4999 8.99892 8.95671 8.8097C9.41353 8.62048 9.80397 8.30005 10.0787 7.88893C10.3534 7.4778 10.5 6.99445 10.5 6.5C10.5 5.83696 10.2366 5.20107 9.76777 4.73223C9.29893 4.26339 8.66304 4 8 4ZM8 8C7.70333 8 7.41332 7.91203 7.16665 7.7472C6.91997 7.58238 6.72772 7.34811 6.61418 7.07403C6.50065 6.79994 6.47095 6.49834 6.52882 6.20736C6.5867 5.91639 6.72956 5.64912 6.93934 5.43934C7.14912 5.22956 7.4164 5.0867 7.70737 5.02882C7.99834 4.97094 8.29994 5.00065 8.57403 5.11418C8.84812 5.22771 9.08239 5.41997 9.24721 5.66664C9.41203 5.91332 9.5 6.20333 9.5 6.5C9.49955 6.89769 9.34137 7.27896 9.06017 7.56016C8.77896 7.84137 8.39769 7.99955 8 8Z" />
                                        <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C14.9979 6.14413 14.2597 4.36486 12.9474 3.05256C11.6351 1.74026 9.85588 1.00209 8 1ZM5 13.1882V12.5C5.00044 12.1023 5.15862 11.721 5.43983 11.4398C5.72104 11.1586 6.10231 11.0004 6.5 11H9.5C9.89769 11.0004 10.279 11.1586 10.5602 11.4398C10.8414 11.721 10.9996 12.1023 11 12.5V13.1882C10.0896 13.7199 9.05426 14 8 14C6.94574 14 5.91042 13.7199 5 13.1882ZM11.9963 12.4629C11.9863 11.807 11.7191 11.1813 11.2521 10.7206C10.7852 10.2599 10.156 10.0011 9.5 10H6.5C5.84405 10.0011 5.2148 10.2599 4.74786 10.7206C4.28093 11.1813 4.01369 11.807 4.00375 12.4629C3.09703 11.6533 2.45762 10.5873 2.17017 9.40623C1.88272 8.22513 1.9608 6.98457 2.39407 5.84883C2.82734 4.71309 3.59536 3.73573 4.59644 3.04618C5.59751 2.35663 6.78442 1.98741 8 1.98741C9.21558 1.98741 10.4025 2.35663 11.4036 3.04618C12.4046 3.73573 13.1727 4.71309 13.6059 5.84883C14.0392 6.98457 14.1173 8.22513 13.8298 9.40623C13.5424 10.5873 12.903 11.6533 11.9963 12.4629Z" />
                                    </svg>
                                </a>
                            </div>
                            <Categories stateBurger={stateBurger} setStateBurger={() => setStateBurger(prevState => !prevState)} />
                        </div>
                        <div onClick={() => setStateBurger(prev => !prev)} className={classNames("header__burger", { 'active': stateBurger })}>
                            <span></span>
                        </div>
                    </div>
                    <Categories />
                </div>

            </header >
        </>
    );
};

export default Header;