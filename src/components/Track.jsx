import React, { useEffect, useState } from "react";
import "./Track.css";

const Track = () => {
  const [status, setStatus] = useState("Order Placed");

  useEffect(() => {
    setTimeout(() => setStatus("Packed"), 2000);
    setTimeout(() => setStatus("Shipped"), 4000);
    setTimeout(() => setStatus("Out for Delivery"), 6000);
    setTimeout(() => setStatus("Delivered"), 8000);
  }, []);

  return (
    <div className="track-page">
      <h2>Order Tracking</h2>

      <div className="status-box">
        <p>Current Status:</p>
        <h3>{status}</h3>
      </div>

      <p>Your order will be delivered in 3–4 days 🚚</p>
    </div>
  );
};

export default Track;
