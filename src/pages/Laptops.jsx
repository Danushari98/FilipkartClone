import React, { useState } from "react";
import "./CategoryPage.css";

function Laptops() {
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const laptops = [
    {
      name: "MacBook Air M2",
      price: "₹1,04,999",
      img: "https://m.media-amazon.com/images/I/719C6bJv8jL.jpg"
    },
    {
      name: "ASUS ROG Strix G15",
      price: "₹1,24,990",
      img: "https://m.media-amazon.com/images/I/61BuT2yTQ6S._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "HP Pavilion x360",
      price: "₹68,999",
      img: "https://rukminim2.flixcart.com/image/704/844/xif0q/computer/q/g/c/-original-imahg2mgeskmjbnj.jpeg?q=20&crop=false"
    },
    {
      name: "Lenovo IdeaPad Slim 5",
      price: "₹56,499",
      img: "https://hnsgsfp.imgix.net/9/images/detailed/111/Lenovo_IdeaPad_Slim_5_83HL002WMJ_(Snapdragon_X_Plus_X1P-42-10032GB512GB)14-inch_Laptop_01.JPG"
    },
    {
      name: "Dell Inspiron 15",
      price: "₹52,999",
      img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/spi/plastic/black/ng/notebook-inspiron-15-3535-plastic-black-campaign-hero-504x350-ng.psd"
    }
  ];

  const handleBuy = (item) => {
    setSelectedLaptop(item);
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
      alert("Order Confirmed 🎉\nLaptop will be delivered in 4–5 days");
      setOrderPlaced(false);
    }, 400);
  };

  return (
    <div className="category-page">
      <h1 className="category-title">💻 Laptops</h1>

      <div className="products-grid">
        {laptops.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} className="product-img" />
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
        <div className="payment-overlay">
          <div className="payment-box">
            <button className="close-btn" onClick={() => setShowPayment(false)}>✕</button>

            <h2>Delivery Details</h2>
            <input className="input" placeholder="Full Address" />
            <input className="input" placeholder="Phone Number" />

            <h3>Payment Method</h3>
            <select className="input" onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Select</option>
              <option value="upi">UPI</option>
              <option value="card">Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            <button className="confirm-btn" onClick={placeOrder}>
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div className="success-popup">
          ✅ Order Successful
        </div>
      )}
    </div>
  );
}

export default Laptops;
