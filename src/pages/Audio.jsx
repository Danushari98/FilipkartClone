import React, { useState } from "react";
import "./Audio.css";

function Audio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardOrUpi, setCardOrUpi] = useState("");

  const audioItems = [
    {
      name: "Sony WH-1000XM5 Headphones",
      price: "₹29,999",
      img: "https://m.media-amazon.com/images/I/61ULAZmt9NL.jpg",
    },
    {
      name: "JBL Bluetooth Speaker",
      price: "₹4,499",
      img: "https://www.techhive.com/wp-content/uploads/2024/03/jbl-boombox-angled-100894505-orig-2.jpg",
    },
    {
      name: "Boat Airdopes 441",
      price: "₹1,999",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/441pro.jpg",
    },
    {
      name: "Samsung Galaxy Buds 2",
      price: "₹9,999",
      img: "https://m.media-amazon.com/images/I/51BOYHNPVyL.jpg",
    },
    {
      name: "Bose SoundLink Mini",
      price: "₹18,999",
      img: "https://m.media-amazon.com/images/I/710OWQavVcL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setPaymentMethod("");
    setCardOrUpi("");
  };

  const placeOrder = () => {
    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    if (paymentMethod !== "COD" && cardOrUpi.trim() === "") {
      alert("Enter payment details");
      return;
    }

    alert(
      `✅ Order Confirmed!\n\nProduct: ${selectedItem.name}\nDelivery in 4–5 days 🚚`
    );
    setSelectedItem(null);
  };

  return (
    <div className="audio-container">
      <h1 className="audio-title">🎧 Audio Products</h1>

      <div className="audio-grid">
        {audioItems.map((item, index) => (
          <div className="audio-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>

            <button className="buy-btn" onClick={() => handleBuyNow(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* PAYMENT POPUP */}
      {selectedItem && (
        <div className="overlay">
          <div className="popup-box">
            <h2>{selectedItem.name}</h2>
            <p className="price">{selectedItem.price}</p>

            <input type="text" placeholder="Full Address" />
            <input type="text" placeholder="Phone Number" />

            <select onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Select Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="CARD">Debit / Credit Card</option>
              <option value="COD">Cash on Delivery</option>
            </select>

            {(paymentMethod === "UPI" || paymentMethod === "CARD") && (
              <input
                type="text"
                placeholder={
                  paymentMethod === "UPI"
                    ? "Enter UPI ID"
                    : "Enter Card Number"
                }
                onChange={(e) => setCardOrUpi(e.target.value)}
              />
            )}

            <button className="confirm-btn" onClick={placeOrder}>
              Confirm Order
            </button>

            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Audio;
