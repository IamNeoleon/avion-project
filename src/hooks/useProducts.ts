import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { productsApi } from '../redux/productsApi';
import { addItems, setItems, setLoading, selectItems, selectLoading } from '../redux/slices/productsSlice';
import { selectFilter } from '../redux/slices/filterSlice';

export const useProducts = (limit: number) => {
    const { category, designers, price, searchValue } = useAppSelector(selectFilter);

    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const location = useLocation();
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const isLoading = useAppSelector(selectLoading);

    const categoryQuery = category ? category : '';
    const designersQuery = designers ? `&${designers}` : '';
    const priceQuery = price ? price : '';
    const searchQuery = searchValue ? `&title=*${searchValue}` : '';

    const paramsQuery = `limit=${limit}&page=${page}${categoryQuery}${designersQuery}${priceQuery}${searchQuery}`;

    const { data, error, isFetching } = productsApi.useGetProductsQuery(paramsQuery);

    useEffect(() => {
        if (category) {
            setPage(1);
        }
    }, [category]);

    useEffect(() => {
        dispatch(setLoading(isFetching));
        if (data) {
            if (page === 1) {
                dispatch(setItems(data.items));
            } else {
                dispatch(addItems(data.items));
            }
            if (data.meta.total_items) {
                setTotalItems(data.meta.total_items);
            }
        }
    }, [data, isFetching, dispatch, page, category, location.pathname]);

    const loadMore = () => setPage(prevPage => prevPage + 1);

    return { items, isLoading, error, page, setPage, loadMore, totalItems, category };
};
