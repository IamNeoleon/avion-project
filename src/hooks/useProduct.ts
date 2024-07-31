import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from './hooks';
import { selectItems } from '../redux/slices/productsSlice';
import { ICard } from '../@types';
import { productsApi } from '../redux/productsApi';

const useProduct = () => {
    const { id } = useParams();
    const parseId = id ? parseInt(id) : 0;
    const items = useAppSelector(selectItems);
    const [item, setItem] = useState<ICard | null>(null);
    const [loading, setLoading] = useState(true);

    const { data } = productsApi.useGetProductsQuery('limit=9', {
        skip: items.length > 0,
    });

    useEffect(() => {
        const fetchProduct = async () => {
            if (items.length <= 0 && data) {
                setItem(data.items.find((item: ICard) => item.id === parseId) || null);
            } else {
                setItem(items.find((item: ICard) => item.id === parseId) || null);
            }
            setLoading(false);
        };

        fetchProduct();
    }, [items, data, parseId]);

    return { item, loading };
};

export default useProduct;
