import React, { useState } from "react";
import "./Kitchen.css";

function Kitchen() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const items = [
    {
      name: "Prestige Pressure Cooker",
      price: "₹1499",
      img: "https://www.rasoishop.com/cdn/shop/products/8901365116561-2.jpg?v=1668859671&width=1445",
    },
    {
      name: "Hawkins Stainless Cooker",
      price: "₹1899",
      img: "https://m.media-amazon.com/images/I/61d+zv+5gUL._AC_UF894,1000_QL80_.jpg",
    },
    {
      name: "Pigeon Non-stick Pan",
      price: "₹799",
      img: "https://m.media-amazon.com/images/I/51tiY2rVAIL.jpg",
    },
    {
      name: "Milton Thermosteel Bottle",
      price: "₹699",
      img: "https://www.milton.in/cdn/shop/files/gps_generated_5ad4ef44-e558-4808-9f20-2491371ce9c7.png?v=1760158070",
    },
    {
      name: "Cello Plastic Containers",
      price: "₹349",
      img: "https://www.jiomart.com/images/product/original/rvo79oyav9/cello-brown-plastic-container-set-1000-ml-set-of-16-product-images-orvo79oyav9-p594015541-4-202209240713.jpg",
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

    setShowPayment(false);
    setOrderPlaced(true);

    setTimeout(() => {
      alert("✅ Order Confirmed!\nDelivery within 4–5 days.");
      setOrderPlaced(false);
      setPaymentMethod("");
      setCardNumber("");
      setSelectedItem(null);
    }, 300);
  };

  return (
    <div className="kitchen-container">
      <h2 className="kitchen-title">🍽 Kitchen Essentials</h2>

      <div className="kitchen-grid">
        {items.map((item, index) => (
          <div className="kitchen-card" key={index}>
            <img src={item.img} alt={item.name} className="kitchen-img" />
            <h3>{item.name}</h3>
            <p className="kitchen-price">{item.price}</p>

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

            <select
              className="input"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment</option>
              <option value="upi">UPI</option>
              <option value="card">Debit / Credit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {paymentMethod === "card" && (
              <input
                className="input"
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
        <div className="success-popup">Order Successful 🎉</div>
      )}
    </div>
  );
}

export default Kitchen;
