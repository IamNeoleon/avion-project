import React from 'react';
import './Card.scss';


interface ICardProps {
    title: string,
    price: number,
    imageUrl: string
}

const Card: React.FC<ICardProps> = ({ title, price, imageUrl }) => {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={imageUrl} alt="card image" />
                </div>
                <div className="card__title">{title}</div>
                <div className="card__price">£{price}</div>
            </div>
        </>
    );
};

export default Card;