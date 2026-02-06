import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import OffersSection from "./components/OffersSection.jsx";
import ProductSection from "./components/ProductSection.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./components/Profile.jsx";
import BuyNow from "./pages/BuyNow";

// Pages
import Cart from "./components/Cart.jsx";
import PaymentModal from "./components/PaymentModal.jsx";
import Track from "./components/Track.jsx";

// Category Pages
import Mobiles from "./pages/Mobiles.jsx";
import Laptops from "./pages/Laptops.jsx";
import TVs from "./pages/smarttv.jsx";
import Fashion from "./pages/Fashion.jsx";
import Beauty from "./pages/Beauty.jsx";
import Furniture from "./pages/Furniture.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Audio from "./pages/Audio.jsx";
import Grocery from "./pages/Grocery.jsx";
import Watches from "./pages/Watches.jsx";

// Modals
import LoginModal from "./components/LoginModal.jsx";
import SignupModal from "./components/SignupModal.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // AUTH STATE 🔥
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");

  // MODAL STATES
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      {/* NAVBAR */}
      <Navbar
        isLoggedIn={isLoggedIn}
        loggedUser={loggedUser}
        onLogout={() => {
          setIsLoggedIn(false);
          setLoggedUser("");
        }}
        openLoginModal={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
        openSignupModal={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      {/* LOGIN MODAL */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSignupOpen={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onSuccess={(name) => {
            setLoggedUser(name);
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onLoginOpen={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <OffersSection />
              <ProductSection searchQuery={searchQuery} />
            </>
          }
        />

        {/* CATEGORY PAGES */}
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/tvs" element={<TVs />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/buy-now" element={<BuyNow />} />

        {/* OTHER PAGES */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentModal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track" element={<Track />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
