import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { deleteItem, increaseQuantity, reduceQuantity } from '../../redux/slices/cartSlice';

interface ICartItemProps {
    id: number,
    title: string,
    price: number,
    description: string,
    imageUrl: string,
    count: number
}

const CartItem: React.FC<ICartItemProps> = ({ id, title, price, description, imageUrl, count }) => {
    const dispatch = useAppDispatch();
    const totalPrice = price * count;

    const handleDelete = () => {
        dispatch(deleteItem(id))
    }

    const handleDecrement = () => {
        dispatch(reduceQuantity(id));
    }

    const handleIncrement = () => {
        dispatch(increaseQuantity(id));
    }

    return (
        <>
            <div className="cart__item item-cart">
                <div className="item-cart__card">
                    <div className="item-cart__img">
                        <Link to={`/products/${id}`}>
                            <img src={imageUrl} alt="card img" />
                        </Link>
                    </div>
                    <div className="item-cart__info">
                        <div className="item-cart__text">
                            <div className="item-cart__title">{title}</div>
                            <div className="item-cart__desc">{description}</div>
                            <div className="item-cart__price">£{price}</div>
                        </div>
                        <div className="item-cart__count">
                            <button onClick={handleDecrement} disabled={count === 1}>-</button>
                            <span>{count}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                </div>

                <div className="item-cart__price-total">£{totalPrice}</div>
                <button onClick={handleDelete} className="item-cart__delete"></button>
            </div>
        </>
    );
};

export default CartItem;