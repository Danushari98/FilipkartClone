import { useEffect, useState } from "react";
import "./BuyNow.css";

function BuyNow() {
  const [product, setProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("buyProduct"));
    setProduct(data);
  }, []);

  const placeOrder = () => {
    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    if (
      (paymentMethod === "credit" || paymentMethod === "debit") &&
      cardNumber.length < 12
    ) {
      alert("Enter valid card number");
      return;
    }

    alert("✅ Order Placed Successfully");
    localStorage.removeItem("buyProduct");
  };

  if (!product) return <h2>No Product Found</h2>;

  return (
    <div className="buy-page">
      <h2>Payment</h2>

      <div className="buy-card">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment</option>
          <option value="cod">Cash on Delivery</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
        </select>

        {(paymentMethod === "credit" || paymentMethod === "debit") && (
          <input
            type="number"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        )}

        <button className="buy-btn blue" onClick={placeOrder}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default BuyNow;
