import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useProduct from '../hooks/useProduct';
import ProductBlock from '../components/ProductBlock/ProductBlock';

const Product: React.FC = () => {
    const { item, loading } = useProduct();
    const [inProp, setInProp] = useState<boolean>(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <CSSTransition in={inProp} timeout={300} classNames="productPage" unmountOnExit nodeRef={nodeRef}>
            <div ref={nodeRef} className="productPage">
                <div className="container">
                    {loading ? (
                        <div>Загрузка...</div>
                    ) : item ? (
                        <ProductBlock
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            description={item.description}
                            size={item.size}
                            category={item.category}
                            designer={item.designer}
                        />
                    ) : (
                        <div>Товар не найден</div>
                    )}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Product;
