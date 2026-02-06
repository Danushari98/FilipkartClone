import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");
  const navigate = useNavigate();

  const orders = [
    { id: 1, product: "iPhone 15", status: "Delivered" },
    { id: 2, product: "Boat Headset", status: "Shipped" },
  ];

  const coupons = [
    { code: "SAVE10", discount: "10% OFF" },
    { code: "FLAT500", discount: "₹500 OFF" },
  ];

  return (
    <div className="profile-page">
      <h2 className="profile-title">My Profile</h2>

      {/* TABS */}
      <div className="profile-tabs">
        <button
          className={activeTab === "orders" ? "active" : ""}
          onClick={() => setActiveTab("orders")}
        >
          My Orders
        </button>

        <button
          className={activeTab === "coupons" ? "active" : ""}
          onClick={() => setActiveTab("coupons")}
        >
          My Coupons
        </button>
      </div>

      {/* CONTENT */}
      <div className="profile-content">
        {activeTab === "orders" &&
          orders.map((order) => (
            <div className="card" key={order.id}>
              <h4>{order.product}</h4>
              <p>Status: {order.status}</p>
            </div>
          ))}

        {activeTab === "coupons" &&
          coupons.map((c, i) => (
            <div className="coupon-card" key={i}>
              <h4>{c.code}</h4>
              <p>{c.discount}</p>
            </div>
          ))}
      </div>

      {/* LOGOUT */}
      <button
        className="logout-profile-btn"
        onClick={() => {
          navigate("/");
          window.location.reload(); // frontend demo logout
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
