import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';
import { productsApi } from '../../redux/productsApi';
import { ICard } from '../../@types';
import { Link } from 'react-router-dom';

import './NewProducts.scss';

const NewProducts: React.FC = () => {
    const { data } = productsApi.useGetProductsQuery('limit=12');
    const products = data?.items;


    const getRandomElements = (array: ICard[], count: number) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const [randomItems, setRandomItems] = useState<ICard[]>([]);

    useEffect(() => {
        if (products) {
            setRandomItems(getRandomElements(products, 4));
        }
    }, [products]);


    return (
        <>
            <div className="newProducts">
                <div className="container">
                    <div className="newProducts__inner">
                        <div className="newProducts__title title">New ceramics</div>
                        <div className="newProducts__cards">
                            {
                                randomItems.map(item => (
                                    <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
                                ))
                            }
                        </div>
                        <div className="newProducts__btn">
                            <Link to='/products'>
                                <Button title='View collection' color='#2A254B' bgColor='#F9F9F9' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewProducts;