import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { selectCartItems, selectTotalPrice, setTotalPrice } from '../redux/slices/cartSlice';
import { calcTotalPrice } from '../utils/cartUtils';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import CartItem from '../components/CartItem/CartItem';

import cartEmptySvg from '../assets/icons/cart-empty.svg'
import { Link } from 'react-router-dom';


const Cart: React.FC = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCartItems)
    const totalPrice = useAppSelector(selectTotalPrice)
    const [inProp, setInProp] = useState<boolean>(false);
    const nodeRef = useRef(null);
    const cartRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const total = calcTotalPrice(cartItems);
        dispatch(setTotalPrice(total));
        setInProp(true)
    }, [cartItems, dispatch])

    return (
        <>
            <CSSTransition in={inProp} timeout={300} classNames="cart" unmountOnExit nodeRef={nodeRef}>
                <div ref={nodeRef} className="cart">
                    <div className="container">
                        <div className="cart__inner">
                            <SwitchTransition>
                                <CSSTransition nodeRef={cartRef} key={`${cartItems.length}`} timeout={100} classNames={'cart-fade'}>
                                    {
                                        cartItems.length > 0 ? (
                                            <div ref={cartRef} className="cart__full">
                                                <div className="cart__title">Your shopping cart</div>
                                                <div className="cart__products">
                                                    <div className="cart__top top-cart">
                                                        <div className="top-cart__title top-cart__title--name-">Product</div>
                                                        <div className="top-cart__title top-cart__title--count">Quantity</div>
                                                        <div className="top-cart__title top-cart__title--total">Total</div>
                                                    </div>
                                                    <div className="cart__items">
                                                        {cartItems.map(cartItem => (
                                                            <CartItem
                                                                key={cartItem.id}
                                                                id={cartItem.id}
                                                                title={cartItem.title}
                                                                price={cartItem.price}
                                                                description={cartItem.description}
                                                                imageUrl={cartItem.imageUrl}
                                                                count={cartItem.count}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="cart__bottom">
                                                        <div className="cart__total">
                                                            <span>Subtotal</span> <span className="cart__price">£{totalPrice}</span>
                                                        </div>
                                                        <div className="cart__info">Taxes and shipping are calculated at checkout</div>
                                                        <button className="cart__btn btn">Go to checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div ref={cartRef} className='cart__empty'>
                                                <div className="cart__title" style={{ textAlign: 'center' }}>Your cart is empty &#128533;</div>
                                                <div className="cart__empty-img">
                                                    <img src={cartEmptySvg} alt="empty cart" />
                                                </div>
                                                <p>
                                                    Most likely, you have not added products yet. <br />
                                                    To add products, go to the products page.
                                                </p>
                                                <Link to='/products' className='btn'>
                                                    <span>Go to back</span>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};

export default Cart;