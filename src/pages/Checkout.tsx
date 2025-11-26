import React from 'react';
import { useCheckout } from '../hooks/useCheckout';
import { PaymentMethod } from '../components/PaymentMethod/PaymentMethod';

const Checkout: React.FC = () => {
	const { totalPrice, isLoading, isSuccess, handleSubmitForm } = useCheckout()

	if (isLoading) {
		return (
			<div className="checkout-loading">
				<div className="spinner"></div>
				<p>Let's imagine you've already paid everything, and you're redirected back. Wait and wait...</p>
			</div>
		);
	}

	if (isSuccess) {
		return (
			<div className="checkout-success">
				<h2>Payment Successful!</h2>
				<p>Thank you for your order. You will receive a confirmation email shortly.</p>
			</div>
		);
	}

	return (
		<>
			<div className="checkout">
				<div className="container">
					<div className="checkout__title">Checkout</div>
					<form onSubmit={handleSubmitForm} className='checkout__form'>
						<div className='checkout__block block-checkout'>
							<div className="block-checkout__title">
								1. Contact Information
							</div>
							<div className="block-checkout__contacts">
								<div className='checkout__input'>
									<label htmlFor="checkout-fname">First name</label>
									<input placeholder='John' required id='checkout-fname' type="text" />
								</div>
								<div className='checkout__input'>
									<label htmlFor="checkout-lname">Last name</label>
									<input placeholder='Doe' required id='checkout-lname' type="text" />
								</div>
								<div className='checkout__input'>
									<label htmlFor="checkout-phone">Phone number</label>
									<input placeholder='+1 (555) 123-4567' required id='checkout-phone' type="text" />
								</div>
								<div className='checkout__input'>
									<label htmlFor="checkout-email">E-mail</label>
									<input placeholder='johndoe@mail.com' required id='checkout-email' type="email" />
								</div>
							</div>
						</div>
						<div className="block-checkout">
							<div className="block-checkout__title">
								2. Delievery Information
							</div>
							<div className="block-checkout__inputs block-checkout__deliviery">
								<div className='checkout__input'>
									<label htmlFor="checkout-city">City</label>
									<input placeholder='New Yourk' required id='checkout-city' type="text" />
								</div>
								<div className='checkout__input'>
									<label htmlFor="checkout-address">Address</label>
									<input placeholder='123 Main St, Apt 4B' required id='checkout-address' type="text" />
								</div>
								<div className='checkout__input'>
									<label htmlFor="checkout-zipcode">Zip Code</label>
									<input placeholder='45463' required id='checkout-zipcode' type="text" />
								</div>
							</div>
						</div>
						<PaymentMethod />
						<div className="block-checkout checkout__summary">
							<div className="summary-row">
								<span>Subtotal</span>
								<span>£{totalPrice}</span>
							</div>
							<div className="summary-row">
								<span>Shipping</span>
								<span>£10.00</span>
							</div>
							<div className="summary-row total">
								<span>Total</span>
								<span>£{totalPrice + 10}</span>
							</div>
							<button type="submit" className="checkout__btn">
								Proceed To Payment
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Checkout;