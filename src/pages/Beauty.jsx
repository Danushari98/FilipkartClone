import React, { useState } from "react";
import "./beauty.css";

function Beauty() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const beautyProducts = [
    {
      name: "Maybelline Foundation",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/418-0bNNQgL.jpg",
    },
    {
      name: "L'Oreal Shampoo",
      price: "₹499",
      img: "https://images-static.nykaa.com/media/catalog/product/a/c/ace06428901526588985_12.jpg",
    },
    {
      name: "Nivea Soft Cream",
      price: "₹299",
      img: "https://images.apollo247.in/pub/media/catalog/product/n/i/niv0414_1.jpg",
    },
    {
      name: "Lakme Kajal",
      price: "₹210",
      img: "https://images-static.nykaa.com/media/catalog/product/0/0/0060d70LAKME00000332-new_4.jpg",
    },
    {
      name: "Philips Trimmer",
      price: "₹1,299",
      img: "https://rukminim2.flixcart.com/image/480/640/xif0q/trimmer/p/6/p/0-5-10-mm-bt3211-15-stainless-steel-corded-cordless-philips-original-imahyqb3wkp6u2g6.jpeg",
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
      setOrderPlaced(false);
      setPaymentMethod("");
      setCardNumber("");
      setSelectedItem(null);
    }, 2500);
  };

  return (
    <div className="beauty-page">
      <h1 className="title">💄 Beauty Products</h1>

      <div className="product-grid">
        {beautyProducts.map((item, index) => (
          <div className="product-card" key={index}>
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

            <input className="input" placeholder="Full Address" />
            <input className="input" placeholder="Phone Number" />

            <h3>Payment Method</h3>
            <select
              className="input"
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

            <button
              className="close-btn"
              onClick={() => setShowPayment(false)}
            >
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

export default Beauty;
