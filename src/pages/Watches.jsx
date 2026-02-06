import React, { useState } from "react";
import "./Watches.css";

function Watches() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Fastrack Watch",
      price: "₹999",
      img: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5a755061/images/Fastrack/Catalog/38153NP01_1.jpg?sw=360&sh=360",
    },
    {
      name: "Titan Neo",
      price: "₹2499",
      img: "https://rukminim2.flixcart.com/image/480/640/xif0q/watch/n/r/9/-original-imahfszd2h4zh7w7.jpeg?q=90",
    },
    {
      name: "Casio Digital",
      price: "₹1499",
      img: "https://tayma.pl/hpeciai/4e41e7184a8e0a2a58a7934f2b38dfb3/pol_pm_ZEGAREK-MESKI-CASIO-SPORT-ILLUMINATOR-AE-1500WH-8B-BOX-29585_1.jpg",
    },
    {
      name: "Sonata Gold",
      price: "₹1299",
      img: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw78c577dc/images/Sonata/Catalog/77155YL02_1.jpg?sw=360&sh=360",
    },
    {
      name: "Noise Smartwatch",
      price: "₹1999",
      img: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/21614890/2024/5/31/28562c6e-ccd6-4609-a8c5-8d80142158001717158514876-NOISE-ColorFit-Icon-Buzz-Smartwatch-3821717158514236-1.jpg",
    },
  ];

  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  const handlePlaceOrder = () => {
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
      alert("✅ Order Confirmed!\nDelivery in 4–5 days");
    }, 500);
  };

  return (
    <div className="watch-container">
      <h2 className="title">Watches</h2>

      <div className="watch-grid">
        {items.map((item, index) => (
          <div className="watch-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>

            <button className="buy-btn" onClick={() => handleBuyNow(item)}>
              BUY NOW
            </button>
          </div>
        ))}
      </div>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="overlay">
          <div className="payment-box">
            <button className="close-btn" onClick={() => setShowPayment(false)}>
              ✕
            </button>

            <h3>Payment</h3>

            <p className="selected">
              {selectedItem?.name} - {selectedItem?.price}
            </p>

            <select
              className="input"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Debit / Credit Card</option>
            </select>

            {paymentMethod === "card" && (
              <input
                type="number"
                className="input"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            )}

            <button className="confirm-btn" onClick={handlePlaceOrder}>
              PLACE ORDER
            </button>
          </div>
        </div>
      )}

      {orderPlaced && <div className="success-popup">Order Successful 🎉</div>}
    </div>
  );
}

export default Watches;
