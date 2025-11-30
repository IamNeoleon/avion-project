import React from 'react';
import { Link } from 'react-router-dom';
import CardLoader from '../Card/CardLoader';
import Card from '../Card/Card';
import { AnimatedCard } from '../AnimatedCard/AnimatedCard';
import { useProducts } from '../../hooks/useProducts';


export const ProductsList: React.FC = () => {
   const { products, isLoading, isError, err } = useProducts()


   return (
      <>
         <div className='products__items' style={{ display: !isError && products.length ? 'grid' : 'block' }}>
            {
               isLoading ? (
                  [...new Array(12)].map((_, index) => <div key={`skeleton_${index}`}><CardLoader /></div>)
               ) : (
                  isError ? (
                     <div className='products__items-error'>
                        <h2>Error loading products</h2>
                        <p>{err}</p>
                     </div>
                  ) : (
                     products.map((item, index) => (
                        <AnimatedCard key={item.id} index={index}>
                           <Link to={`/products/${item.id}`}>
                              <Card title={item.title} price={item.price} imageUrl={item.imageUrl} />
                           </Link>
                        </AnimatedCard>
                     ))
                  )
               )
            }
         </div>
      </>
   );
};