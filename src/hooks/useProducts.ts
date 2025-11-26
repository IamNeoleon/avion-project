import { useEffect, useState, useRef, useMemo } from "react"
import { ICard } from "../@types"
import { productsApi } from "../redux/productsApi";
import { useParamsQuery } from "./useParamsQuery";
import { useAppSelector } from "./redux";
import { selectFilter } from "../redux/slices/filterSlice";
import { getErrorMessage } from "../utils/getErrorMessage";


export const useProducts = () => {
	const { category, designers, price, searchValue, page } = useAppSelector(selectFilter);
	const { paramsQuery } = useParamsQuery();
	const query = useMemo(() => paramsQuery(), [category, designers, price, searchValue, page]);
	const [products, setProducts] = useState<ICard[]>([]);
	const [canILoadMore, setCanILoadMore] = useState<boolean>(true)
	const prevFilters = useRef({
		category,
		designers,
		price,
		searchValue,
	});

	const { data, isLoading, isError, error } = productsApi.useGetProductsQuery(query);
	const err = getErrorMessage(error)

	useEffect(() => {
		if (!data?.items) return;

		if (data?.meta?.remaining_count === 0) {
			console.log(data?.meta?.remaining_count)
			console.log('here')
			setCanILoadMore(false);
		} else {
			setCanILoadMore(true);
		}

		const filtersChanged =
			prevFilters.current.category !== category ||
			prevFilters.current.searchValue !== searchValue ||
			JSON.stringify(prevFilters.current.designers) !== JSON.stringify(designers) ||
			JSON.stringify(prevFilters.current.price) !== JSON.stringify(price);

		if (filtersChanged) {
			setProducts(data.items);
			prevFilters.current = { category, designers, price, searchValue };

			return;
		}
		if (page === 1) {
			setProducts(data.items);
		} else {
			setProducts(prev => [...prev, ...data.items]);
		}
	}, [data]);

	return {
		products,
		isLoading,
		isError,
		err,
		canILoadMore
	};
};
