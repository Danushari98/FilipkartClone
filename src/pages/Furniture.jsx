import React, { useState } from "react";
import "./Furniture.css";

function Furniture() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const furniture = [
    {
      name: "Wakefit Orthopedic Mattress",
      price: "₹9,999",
      img: "https://www.wakefit.co/blog/wp-content/uploads/2019/09/image-23-300x208.png"
    },
    {
      name: "Nilkamal Chair Set",
      price: "₹2,499",
      img: "https://www.nilkamalfurniture.com/cdn/shop/files/BRZE2CHRCWBN.webp?v=1753767148&width=360"
    },
    {
      name: "Godrej Queen Bed",
      price: "₹16,499",
      img: "https://m.media-amazon.com/images/I/71FenenM74L._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Coffee Table",
      price: "₹4,199",
      img: "https://rukminim2.flixcart.com/image/704/844/xif0q/coffee-table/u/q/w/86-36-acacia-kasia-86-36-43-de-ct-5527-h-flipkart-perfect-homes-original-imahafm7gumugupe.jpeg?q=90"
    },
    {
      name: "Gaming Chair",
      price: "₹12,999",
      img: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017547119_437Wx649H_202305151207061.jpeg"
    }
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

    setShowPayment(false);
    setOrderPlaced(true);

    setTimeout(() => {
      alert("Order Confirmed 🎉\nYour furniture will be delivered in 4–5 days.");
      setOrderPlaced(false);
      setPaymentMethod("");
      setCardNumber("");
      setSelectedItem(null);
    }, 300);
  };

  return (
    <div className="furniture-page">
      <h1 className="title">🪑 Furniture</h1>

      <div className="furniture-grid">
        {furniture.map((item, index) => (
          <div className="furniture-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>

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

            <input type="text" placeholder="Full Address" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />

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

            {paymentMethod === "card" && (
              <input
                type="text"
                placeholder="Enter Card Number"
                className="input"
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
        <div className="success-popup">
          <p>Order Successful 🎉</p>
        </div>
      )}
    </div>
  );
}

export default Furniture;
