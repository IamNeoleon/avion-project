import { ICartItem } from "../@types";

export const calcTotalPrice = (cartItems: ICartItem[]) => {
    const totalPrice: number = cartItems.reduce((totalPrice, item) => {
        totalPrice += item.price * item.count

        return totalPrice;
    }, 0)

    return totalPrice;
}