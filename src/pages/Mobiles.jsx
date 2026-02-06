import React, { useState } from "react";
import "./Mobiles.css";

function Mobiles() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = [
    { name: "iPhone 15 Pro", price: "₹1,29,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3nXrwyjYfleObj1X30ZOfAnZ1a2xPVWqYQ&s" },
    { name: "Samsung Galaxy S24 Ultra", price: "₹1,39,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdI6iVtB_UEYvfWF2JHVktZO0-eHX-2SCR7w&s" },
    { name: "OnePlus 12", price: "₹64,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkDIWd3DIGkwR-7yFT7Unbj_OAFbrLkNyBw&s" },
    { name: "POCO M7 5G", price: "₹8,499", img: "https://i02.appmifile.com/mi-com-product/fly-birds/poco-m7/PC/00d55520447ac8a9ec31bdf123cdc7f0.jpg" },
    { name: "Vivo T4 Lite", price: "₹12,999", img: "https://cdn.beebom.com/content/2025/07/vivo-t4-lite-5g-in-blue-colour-option-back-design.jpg" },
    { name: "Oppo Reno 11", price: "₹22,999", img: "https://drnareshkumar.in/wp-content/uploads/2025/07/Oppo-Reno-14-Pro-5G_20250630_134137_0000-1024x576.webp" },
    { name: "iQOO Z9 5G", price: "₹14,999", img: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1680678352553/zip/img/iqoo9pro-charge-video-mb.jpg.webp" },
    { name: "Realme Narzo 70 Pro", price: "₹18,999", img: "https://s3b.cashify.in/gpro/uploads/2024/02/28141609/Narzo_70_1_1200x600-1024x512.webp" },
    { name: "Pixel 8", price: "₹74,999", img: "https://cdn.editorji.com/1689079222375/64ad4db65b8d8_google-pixel-8-price-launch-tipped_img.0000000.jpg" },
    { name: "Redmi Note 13", price: "₹16,499", img: "https://i.ytimg.com/vi/mz-7Iwb41QY/hq720.jpg" }
  ];

  // BUY NOW
  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPayment(true);
  };

  // PLACE ORDER (Frontend only)
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
      alert("Order Confirmed 🎉\nYour mobile will be delivered in 4–5 days.");
      setOrderPlaced(false);
      setPaymentMethod("");
      setCardNumber("");
      setSelectedProduct(null);
    }, 300);
  };

  return (
    <div className="mobiles-page">
      <h1 className="title">Mobiles & Tablets</h1>

      <div className="mobiles-grid">
        {products.map((p, index) => (
          <div className="mobile-card" key={index}>
            <img src={p.img} alt={p.name} className="mobile-img" />
            <h3>{p.name}</h3>
            <p className="mobile-price">{p.price}</p>

            <button className="buy-btn" onClick={() => handleBuyNow(p)}>
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

            <input type="text" className="input" placeholder="Full Address" />
            <input type="text" className="input" placeholder="Phone Number" />

            <h3>Payment Method</h3>
            <select className="input" onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Select</option>
              <option value="upi">UPI</option>
              <option value="card">Debit / Credit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {paymentMethod === "upi" && (
              <input type="text" className="input" placeholder="Enter UPI ID" />
            )}

            {paymentMethod === "card" && (
              <input
                type="text"
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
        <div className="success-popup">
          Order Successful 🎉
        </div>
      )}
    </div>
  );
}

export default Mobiles;
