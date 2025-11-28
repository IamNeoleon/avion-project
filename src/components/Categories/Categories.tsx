import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { categories } from '../../assets/data';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectFilter, setCategory, setPage } from '../../redux/slices/filterSlice';

import './Categories.scss';

interface ICategoriesProps {
    stateBurger?: boolean,
    setStateBurger?: () => void;
}

const Categories: React.FC<ICategoriesProps> = ({ stateBurger, setStateBurger }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { category } = useAppSelector(selectFilter);


    const isProductsPage = location.pathname === '/products';


    const handleClickCategory = (category: string) => {
        if (stateBurger && setStateBurger) {
            setStateBurger();
        }
        dispatch(setPage(1))
        dispatch(setCategory(category))
    }

    useEffect(() => {
        if (!isProductsPage && category) {
            navigate('/products')
        }
    }, [category])

    return (
        <>
            <div className="categories">
                <ul className="categories__list">
                    <Link to='/products'>
                        <li onClick={() => handleClickCategory('')} className={classNames('categories__item', { 'active': isProductsPage && !category })}>All products</li>
                    </Link>
                    {categories.map((item, index) => (
                        <li key={index} onClick={() => handleClickCategory(item)}
                            className={classNames('categories__item', {
                                'active': isProductsPage && category.toLowerCase() === item.toLowerCase()
                            })}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Categories;