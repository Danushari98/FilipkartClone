import React, { useState } from "react";
import "./smarttv.css";

function SmartTVs() {
  const [selectedTV, setSelectedTV] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const smartTVs = [
    {
      name: "Samsung Crystal 4K UHD",
      price: "₹32,999",
      img: "https://rukminim2.flixcart.com/image/480/640/xif0q/television/q/o/8/-original-imagyk8tsbgtfudu.jpeg?q=90",
    },
    {
      name: "Sony Bravia 55-inch",
      price: "₹68,999",
      img: "https://m.media-amazon.com/images/I/81wxS8abrgL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "LG 4K Smart TV",
      price: "₹39,499",
      img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/gallery/43UA83006LA_2010x1334_1.jpg",
    },
    {
      name: "TCL 50-inch QLED",
      price: "₹29,999",
      img: "https://m.media-amazon.com/images/I/71A6N2bwdKL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "OnePlus Y Series",
      price: "₹24,999",
      img: "https://m.media-amazon.com/images/I/71vZLIfj5yS._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const handleBuy = (tv) => {
    setSelectedTV(tv);
    setShowPayment(true);
  };

  const placeOrder = () => {
    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    if (paymentMethod === "card" && cardNumber.length < 12) {
      alert("Enter valid card number");
      return;
    }

    setShowPayment(false);
    setOrderPlaced(true);

    setTimeout(() => {
      alert("✅ Order Confirmed!\nYour Smart TV will be delivered in 4–5 days.");
      setOrderPlaced(false);
      setPaymentMethod("");
      setCardNumber("");
    }, 500);
  };

  return (
    <div className="tv-page">
      <h2 className="tv-title">📺 Smart TVs</h2>

      <div className="tv-grid">
        {smartTVs.map((tv, index) => (
          <div className="tv-card" key={index}>
            <img src={tv.img} alt={tv.name} />
            <h3>{tv.name}</h3>
            <p className="tv-price">{tv.price}</p>

            <button className="buy-btn" onClick={() => handleBuy(tv)}>
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

            <input type="text" placeholder="Full Address" />
            <input type="text" placeholder="Phone Number" />

            <select onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Select Payment</option>
              <option value="upi">UPI</option>
              <option value="card">Debit / Credit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {paymentMethod === "card" && (
              <input
                type="text"
                placeholder="Card Number"
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
        <div className="success-popup">🎉 Order Successful</div>
      )}
    </div>
  );
}

export default SmartTVs;
