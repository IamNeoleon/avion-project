import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import classNames from 'classnames';

import { useProducts } from '../hooks/useProducts';
import { useFilters } from '../hooks/useFilters';
import { useAnimations } from '../hooks/useAnimations';

import Card from '../components/Card/Card';
import FilterContainer from '../components/FilterCheckbox/FilterContainer';
import FilterPrice from '../components/FilterPrice/FilterPrice';
import CardLoader from '../components/Card/CardLoader';
import { useAppDispatch } from '../hooks/hooks';
import { setCategory } from '../redux/slices/filterSlice';


const Products: React.FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const limit = 12;
    const { items, isLoading, error, loadMore, totalItems, category, page } = useProducts(limit);
    const { activeFilter, handleFilterClick, filtersRef } = useFilters();
    const { inProp, nodeRef, categoryRef } = useAnimations();
    const titleRef = useRef<HTMLDivElement | null>(null);

    if (error) return <div>Error occurred: {error.toString()}</div>;

    useEffect(() => {
        return () => {
            dispatch(setCategory(''));
        }
    }, [])

    return (
        <>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={300} classNames="products" unmountOnExit>
                <div ref={nodeRef} className="products">
                    <div className="products__top">
                        <div className="container">
                            <SwitchTransition>
                                <CSSTransition nodeRef={titleRef} key={category} timeout={300} classNames='fade-product-title'>
                                    <div ref={titleRef} className="products__title">{`View ${category ? category.toString().split("=")[1].toLowerCase() : 'all products'}`}</div>
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                    </div>
                    <div className="container">
                        <div className="products__main">
                            <div className="products__filters">
                                <div ref={filtersRef} className={classNames('products__filter', 'filter-products', 'filter-products--price', { 'active': activeFilter === 'price' })}>
                                    <div onClick={(e) => handleFilterClick('price', e)} className="filter-products__title">Price</div>
                                    <div className="filter-products__content">
                                        <FilterPrice name='price' />
                                    </div>
                                </div>
                                <div ref={filtersRef} className={classNames('products__filter', 'filter-products', 'filter-products--designer', { 'active': activeFilter === 'designer' })}>
                                    <div onClick={(e) => handleFilterClick('designer', e)} className="filter-products__title">Designer</div>
                                    <div className="filter-products__content">
                                        <FilterContainer />
                                    </div>
                                </div>
                            </div>
                            <SwitchTransition>
                                <CSSTransition
                                    key={`${category}${location.search}`}
                                    timeout={200}
                                    classNames="fade-cards"
                                    nodeRef={categoryRef}
                                >
                                    <div ref={categoryRef} className="products__items">
                                        {isLoading && page === 1 ? (
                                            [...new Array(12)].map((_, index) => <div key={`skeleton_${index}`}><CardLoader /></div>)
                                        ) : (
                                            items.map((item) => (
                                                <Link key={item.id} to={`/products/${item.id}`}>
                                                    <Card title={item.title} price={item.price} imageUrl={item.imageUrl} />
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                            {!isLoading && totalItems !== items.length && <button className='products__btn btn' onClick={loadMore}>Load more</button>}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};

export default Products;
