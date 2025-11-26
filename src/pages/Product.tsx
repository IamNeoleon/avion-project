import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { productsApi } from '../redux/productsApi';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import { useParams } from 'react-router-dom';
import { getErrorMessage } from '../utils/getErrorMessage';

const Product: React.FC = () => {
    const { id } = useParams()
    const { data: productItem, isLoading, isError, error } = productsApi.useGetProductQuery(id)
    const [inProp, setInProp] = useState<boolean>(false);
    const nodeRef = useRef(null);
    const err = getErrorMessage(error)

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <CSSTransition in={inProp} timeout={300} classNames="productPage" unmountOnExit nodeRef={nodeRef}>
            <div ref={nodeRef} className="productPage">
                <div className="container">
                    {
                        isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            isError ? (
                                <>
                                    <div>Error loading product</div>
                                    <div>{err}</div>
                                </>
                            ) : (
                                productItem && (
                                    <ProductBlock
                                        id={productItem.id}
                                        title={productItem.title}
                                        price={productItem.price}
                                        imageUrl={productItem.imageUrl}
                                        description={productItem.description}
                                        size={productItem.size}
                                        category={productItem.category}
                                        designer={productItem.designer}
                                    />
                                )
                            )
                        )
                    }
                </div>
            </div>
        </CSSTransition >
    );
};

export default Product;
