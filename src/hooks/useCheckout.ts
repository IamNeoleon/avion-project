import { useEffect, useState } from "react";
import { clearCart, selectCartItems } from "../redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "./redux";
import { calcTotalPrice } from "../utils/cartUtils";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
	const cartItems = useAppSelector(selectCartItems)
	const [totalPrice, setTotalPrice] = useState<number>(0)
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setTotalPrice(calcTotalPrice(cartItems) + 10)
	}, [cartItems])

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			setIsSuccess(true);

			dispatch(clearCart())
			localStorage.removeItem('cartItems')

			setTimeout(() => {
				navigate("/products");
			}, 3500);
		}, 5000);
	}

	return {
		totalPrice,
		isLoading,
		isSuccess,
		handleSubmitForm
	}
}