import React, { useState } from "react";
import "./Grocery.css";

function Grocery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const items = [
    {
      name: "Aashirvaad Atta 5kg",
      price: "₹220",
      img: "https://m.media-amazon.com/images/I/9104JpXbv6L.jpg",
    },
    {
      name: "Tata Tea Premium 1kg",
      price: "₹480",
      img: "https://m.media-amazon.com/images/I/61z40Qqq-eL._AC_UF894,1000_QL80_.jpg",
    },
    {
      name: "Fortune Oil 1L",
      price: "₹155",
      img: "https://m.media-amazon.com/images/I/51GyUUKe-0L.jpg",
    },
    {
      name: "Red Label Tea 500g",
      price: "₹180",
      img: "https://m.media-amazon.com/images/I/81mR-DXkudL.jpg",
    },
    {
      name: "Daawat Rice 5kg",
      price: "₹599",
      img: "https://m.media-amazon.com/images/I/61u77zLt7HL._AC_UF894,1000_QL80_.jpg",
    },
  ];

  const handleBuy = (item) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  const placeOrder = () => {
    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    if (paymentMethod === "card" && cardNumber.length < 12) {
      alert("Enter valid card number");
      return;
    }

    setShowPayment(false);
    setOrderPlaced(true);

    setTimeout(() => {
      alert("✅ Order Confirmed!\nDelivery in 4–5 days.");
      setOrderPlaced(false);
      setPaymentMethod("");
      setCardNumber("");
    }, 500);
  };

  return (
    <div className="grocery-page">
      <h2 className="grocery-title">🛒 Grocery</h2>

      <div className="grocery-grid">
        {items.map((item, index) => (
          <div className="grocery-card" key={index}>
            <img src={item.img} alt={item.name} className="grocery-img" />
            <h3>{item.name}</h3>
            <p className="grocery-price">{item.price}</p>

            <button className="buy-btn" onClick={() => handleBuy(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="overlay">
          <div className="payment-box">
            <h2>Delivery Details</h2>

            <input className="input" placeholder="Full Address" />
            <input className="input" placeholder="Phone Number" />

            <h3>Payment Method</h3>
            <select
              className="input"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select</option>
              <option value="upi">UPI</option>
              <option value="card">Debit / Credit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {paymentMethod === "upi" && (
              <input className="input" placeholder="Enter UPI ID" />
            )}

            {paymentMethod === "card" && (
              <input
                className="input"
                placeholder="Enter Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            )}

            <button className="confirm-btn" onClick={placeOrder}>
              Confirm Order
            </button>

            <button className="close-btn" onClick={() => setShowPayment(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div className="success-popup">Order Successful 🎉</div>
      )}
    </div>
  );
}

export default Grocery;
