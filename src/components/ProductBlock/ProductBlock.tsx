import React, { useEffect, useRef, useState } from 'react';
import { ICartItem } from '../../@types';
import { addItem, selectCartItems } from '../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CSSTransition } from 'react-transition-group';

import './ProductBlock.scss';


interface IProductBlockProps {
    id: number
    title: string,
    price: number,
    imageUrl: string,
    description: string,
    size: number[],
    category: string,
    designer: string
}

const ProductBlock: React.FC<IProductBlockProps> = ({ id, title, price, imageUrl, description, size, category, designer }) => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCartItems)
    const [count, setCount] = useState<number>(1);
    const [isInCart, setIsInCart] = useState<boolean>(false);
    const [inProp, setInProp] = useState<boolean>(false);
    const productRef = useRef<HTMLDivElement | null>(null);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setCount(parseInt(value))
    }

    const handleAddItem = () => {
        const productCart: ICartItem = {
            id: id,
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description,
            size: size,
            category: category,
            designer: designer,
            count: count
        }

        dispatch(addItem(productCart))
    }

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : 1)
    }

    useEffect(() => {
        const isAdded = cartItems.some(item => item.id === id);
        if (isAdded) {
            setIsInCart(isAdded)
            const item = cartItems.find(item => item.id === id)

            if (item) {
                setCount(item.count)
            }
        }
        setInProp(true)
    }, [cartItems])


    return (
        <>
            <CSSTransition nodeRef={productRef} in={inProp} timeout={300} classNames={'product'} unmountOnExit>
                <div ref={productRef} className="product">
                    <div className="product__left">
                        <div className="product__img">
                            <img src={imageUrl} alt="product image" />
                        </div>
                    </div>
                    <div className="product__info">
                        <div className="product__title">{title}</div>
                        <div className="product__price">£{price}</div>
                        <div className="product__desc">
                            <span>Product description</span>
                            <p>{description}</p>
                        </div>
                        <div className="product__dimesions dimesions">
                            <div className="dimesions__title">Dimensions</div>
                            <div className="dimesions__items">
                                <div className="dimesions__item">
                                    <div className="dimesions__item-title">Height</div>
                                    <div className="dimesions__value">{size[0]}cm</div>
                                </div>
                                <div className="dimesions__item">
                                    <div className="dimesions__item-title">Width</div>
                                    <div className="dimesions__value">{size[1]}cm</div>
                                </div>
                                <div className="dimesions__item">
                                    <div className="dimesions__item-title">Depth</div>
                                    <div className="dimesions__value">{size[2]}cm</div>
                                </div>
                            </div>
                        </div>
                        <div className="product__count">
                            <div className="product__count-title">Quantitity</div>
                            <div className="product__input">
                                <button disabled={isInCart || count === 1} onClick={handleDecrement} className="product__input-btn product__input-btn--minus">-</button>
                                <input readOnly onChange={onChangeInput} type="number" value={count} />
                                <button disabled={isInCart} onClick={handleIncrement} className="product__input-btn product__input-btn--plus">+</button>
                            </div>
                        </div>
                        <div className="product__btns">
                            <button disabled={isInCart} onClick={handleAddItem} className={isInCart ? 'product__btn product__btn--add btn added' : 'product__btn product__btn--add btn'}>
                                {!isInCart ? 'Add to cart' : 'Added to cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </CSSTransition>

        </>
    );
};

export default ProductBlock;