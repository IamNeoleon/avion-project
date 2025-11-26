import { selectFilter } from "../redux/slices/filterSlice";
import { useAppSelector } from "./redux";

export const useParamsQuery = () => {
	const { category, designers, price, searchValue, page } = useAppSelector(selectFilter);
	const limit = 12

	const paramsQuery = () => {
		const params = new URLSearchParams({
			limit: String(limit),
			page: String(page),
		});

		if (category) params.append("category", category);
		if (designers) {
			designers.forEach(designer => {
				params.append('designer[]', designer)
			})
		}
		if (price && price[1] !== 0) {
			params.append('price[from]', price[0].toString())
			params.append('price[to]', price[1].toString())
		}
		if (searchValue) params.append("title", `*${searchValue}`);

		return params.toString();
	}


	return { paramsQuery }
}