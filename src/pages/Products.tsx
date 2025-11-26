import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import classNames from 'classnames';
import { useFilters } from '../hooks/useFilters';
import { useAnimations } from '../hooks/useAnimations';
import FilterContainer from '../components/FilterCheckbox/FilterContainer';
import FilterPrice from '../components/FilterPrice/FilterPrice';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectFilter, setPage } from '../redux/slices/filterSlice';
import { useProducts } from '../hooks/useProducts';


const Products: React.FC = () => {
   const dispatch = useAppDispatch();
   const { activeFilter, handleFilterClick, filtersRef } = useFilters();
   const { category, page } = useAppSelector(selectFilter)
   const { inProp, nodeRef } = useAnimations();
   const { canILoadMore } = useProducts()
   const titleRef = useRef<HTMLDivElement | null>(null);

   return (
      <>
         <CSSTransition nodeRef={nodeRef} in={inProp} timeout={300} classNames="products" unmountOnExit>
            <div ref={nodeRef} className="products">
               <div className="products__top">
                  <div className="container">
                     <SwitchTransition mode="out-in">
                        <CSSTransition
                           key={category || "all"}
                           classNames="title-fade"
                           timeout={250}
                           nodeRef={titleRef}
                        >
                           <div ref={titleRef} className="products__title">
                              {`View ${category ? category.toString().toLowerCase() : "all products"}`}
                           </div>
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
                     <ProductsList />
                     {
                        canILoadMore && (

                           <button className='products__btn btn'
                              onClick={() => dispatch(setPage(page + 1))}
                           >Load more</button>
                        )
                     }
                  </div>
               </div>
            </div>
         </CSSTransition>
      </>
   );
};

export default Products;
