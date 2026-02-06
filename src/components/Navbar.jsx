import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  isLoggedIn,
  loggedUser,
  onLogout,
  openLoginModal,
  openSignupModal,
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // 👉 Check BuyNow Page
  const isBuyNowPage = location.pathname === "/buy-now";

  // 🔍 SEARCH HANDLER
  const handleSearch = () => {
    if (!query.trim()) return;

    const q = query.toLowerCase();
    const categories = {
      mobiles: ["mobile", "mobiles", "tablet", "tablets"],
      fashion: ["fashion", "tshirt", "shirt", "jeans", "clothing"],
      appliances: ["tv", "fridge", "washing machine", "ac"],
      grocery: ["grocery", "milk", "rice"],
      electronics: ["laptop", "computer", "camera"],
      homeFurniture: ["sofa", "table", "chair"],
    };

    for (let category in categories) {
      if (categories[category].some((word) => q.includes(word))) {
        navigate("/" + category);
        return;
      }
    }

    navigate(`/search/${query}`);
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <Link to="/" className="logo">FlipkartClone</Link>

      {/* CENTER */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {/* 🚫 BuyNow page-la Login / Signup hide */}
        {!isBuyNowPage && !isLoggedIn && (
          <>
            <button className="auth-btn login" onClick={openLoginModal}>
              Login
            </button>
            <button className="auth-btn signup" onClick={openSignupModal}>
              Sign Up
            </button>
          </>
        )}

        {/* ✅ Logged User → Profile */}
        {isLoggedIn && (
          <>
            <Link to="/profile" className="profile-btn">
              👤 {loggedUser}
            </Link>

            {!isBuyNowPage && (
              <button className="auth-btn logout" onClick={onLogout}>
                Logout
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
