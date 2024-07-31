import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { categories } from '../../assets/data';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectFilter, setCategory } from '../../redux/slices/filterSlice';

import './Categories.scss';

interface ICategoriesProps {
    stateBurger?: boolean,
    setStateBurger?: () => void;
}

const Categories: React.FC<ICategoriesProps> = ({ stateBurger, setStateBurger }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isProductsPage = location.pathname === '/products';
    const { category } = useAppSelector(selectFilter)
    const clearCaregory = category.split('=')[1];


    const handleClickCategory = (category: string) => {
        if (stateBurger && setStateBurger) {
            setStateBurger();
        }
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
                        <li onClick={() => handleClickCategory('')} className={classNames('categories__item', { 'active': isProductsPage && !clearCaregory })}>All products</li>
                    </Link>
                    {categories.map((item, index) => (
                        <li key={index} onClick={() => handleClickCategory(item)} className={classNames('categories__item', { 'active': isProductsPage && clearCaregory === item })}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Categories;