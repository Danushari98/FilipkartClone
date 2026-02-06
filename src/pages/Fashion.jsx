import React, { useState } from "react";
import "./fashion.css";

const fashionProducts = [
  { name: "Men's T-shirt", price: "₹499", img: "https://thehouseofrare.com/cdn/shop/files/molo-red.jpg?v=1750659751" },
  { name: "Women's Kurti", price: "₹699", img: "https://m.media-amazon.com/images/I/61tyq4EnOpL._AC_UY1100_.jpg" },
  { name: "Men’s Jeans", price: "₹1,299", img: "https://assets.ajio.com/medias/sys_master/root/20250613/YwJl/684bc92f55340d4b4fa91720/-473Wx593H-701345279-grey-MODEL.jpg" },
  { name: "Women’s Top", price: "₹899", img: "https://m.media-amazon.com/images/I/71V9cS6vRJL._AC_UY1100_.jpg" },
  { name: "Men’s Shirt", price: "₹999", img: "https://campussutra.com/cdn/shop/files/CSMOVSRT7609_3_52eadbc3-3c06-4480-abda-47bf3a54c0dd.jpg?v=1730801146&width=2000" },
  { name: "Women’s Dress", price: "₹1,499", img: "https://mahezon.in/cdn/shop/files/IMG-20241126-WA0674_800x1026_crop_center@2x.jpg?v=1732617734" },
];

function Fashion() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);

  const [form, setForm] = useState({
    address: "",
    phone: "",
    payment: "",
    cardOrUpi: ""
  });

  const handleBuy = (item) => {
    setSelected(item);
    setOpen(true);
    setStep(1);
  };

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    setStep(4);

    setTimeout(() => {
      setOpen(false);
      setForm({ address: "", phone: "", payment: "", cardOrUpi: "" });
    }, 3000);
  };

  return (
    <div className="fashion-page">
      <h1 className="fashion-title">👗 Fashion</h1>

      <div className="fashion-grid">
        {fashionProducts.map((item, i) => (
          <div className="fashion-card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button className="buy-btn" onClick={() => handleBuy(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {open && (
        <div className="overlay">
          <div className="popup-box">
            <h2>{selected?.name}</h2>

            {step === 1 && (
              <>
                <input name="address" placeholder="Delivery Address" onChange={change} />
                <input name="phone" placeholder="Phone Number" onChange={change} />
                <button onClick={() => setStep(2)}>Next</button>
              </>
            )}

            {step === 2 && (
              <>
                <select name="payment" onChange={change}>
                  <option value="">Select Payment</option>
                  <option value="UPI">UPI</option>
                  <option value="CARD">Debit / Credit Card</option>
                  <option value="COD">Cash on Delivery</option>
                </select>
                <button onClick={() => setStep(3)}>Continue</button>
              </>
            )}

            {step === 3 && (
              <>
                {form.payment !== "COD" && (
                  <input
                    name="cardOrUpi"
                    placeholder={form.payment === "UPI" ? "Enter UPI ID" : "Enter Card Number"}
                    onChange={change}
                  />
                )}
                <button onClick={placeOrder}>Confirm Order</button>
              </>
            )}

            {step === 4 && (
              <h3 className="success">
                ✅ Order Placed <br /> Delivery in 4–5 Days 🚚
              </h3>
            )}

            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fashion;
