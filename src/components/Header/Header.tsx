import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { selectCartItems } from '../../redux/slices/cartSlice';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import classNames from 'classnames';

import './Header.scss';



const Header: React.FC = () => {
    const isMounted = useRef<boolean>(false);
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

    useEffect(() => {
        if (isMounted.current) {
            const jsonCartItems = JSON.stringify(cartItems)
            const dataForLS = JSON.stringify({
                items: jsonCartItems,
            })
            localStorage.setItem('cart', dataForLS)
        }
        isMounted.current = true
    }, [cartItems])

    return (
        <>
            <header ref={headerRef} className={classNames("header", { 'fixed': isFixed })}>
                <div className="container">
                    <div className="header__inner" style={{ border: isFixed ? 'none' : undefined }}>
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
                            </div>
                            <Categories stateBurger={stateBurger} setStateBurger={() => setStateBurger(prevState => !prevState)} />
                        </div>
                        <div onClick={() => setStateBurger(prev => !prev)} className={classNames("header__burger", { 'active': stateBurger })}>
                            <span></span>
                        </div>
                    </div>
                    <div className="categories-desktop">
                        <Categories />
                    </div>
                </div>

            </header >
        </>
    );
};

export default Header;