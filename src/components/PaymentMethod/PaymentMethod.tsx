import { useState } from "react";

import visaIcon from "../../assets/icons/visa.svg";
import mastercardIcon from "../../assets/icons/mastercard.svg";
import paypalIcon from "../../assets/icons/paypal.svg";

export function PaymentMethod() {
	const [method, setMethod] = useState<"visa" | "mastercard" | "paypal">("visa");

	return (
		<div className="block-checkout">
			<div className="block-checkout__title">
				3. Payment method
			</div>

			<div className="block-checkout__payment">
				<label className={`payment-item ${method === "visa" ? "active" : ""}`}>
					<input
						type="radio"
						name="payment"
						value="visa"
						checked={method === "visa"}
						onChange={() => setMethod("visa")}
						hidden
					/>
					<img src={visaIcon} alt="Visa" />
				</label>

				<label className={`payment-item ${method === "mastercard" ? "active" : ""}`}>
					<input
						type="radio"
						name="payment"
						value="mastercard"
						checked={method === "mastercard"}
						onChange={() => setMethod("mastercard")}
						hidden
					/>
					<img src={mastercardIcon} alt="Mastercard" />
				</label>

				<label className={`payment-item ${method === "paypal" ? "active" : ""}`}>
					<input
						type="radio"
						name="payment"
						value="paypal"
						checked={method === "paypal"}
						onChange={() => setMethod("paypal")}
						hidden
					/>
					<img src={paypalIcon} alt="PayPal" />
				</label>
			</div>
		</div>
	);
}
