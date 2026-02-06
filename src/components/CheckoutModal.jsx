import React, { useState } from "react";
import "./CheckoutModal.css";

export default function CheckoutModal({ item, close }) {
  const [step, setStep] = useState("details");
  const [paymentMode, setPaymentMode] = useState("");

  return (
    <div className="checkout-overlay">
      <div className="checkout-box">

        {/* Close Button */}
        <button className="close-btn" onClick={close}>✖</button>

        <h2>Checkout - {item.name}</h2>
        <p className="price">{item.price}</p>

        {/* STEP 1: Address Details */}
        {step === "details" && (
          <div className="step">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Address" required />

            <button onClick={() => setStep("payment")}>Next → Payment</button>
          </div>
        )}

        {/* STEP 2: Payment Options */}
        {step === "payment" && (
          <div className="step">
            <h3>Select Payment Method</h3>

            <button onClick={() => setPaymentMode("upi")}>UPI</button>
            <button onClick={() => setPaymentMode("debit")}>Debit Card</button>
            <button onClick={() => setPaymentMode("credit")}>Credit Card</button>

            {paymentMode === "upi" && (
              <input type="text" placeholder="Enter UPI ID" />
            )}

            {paymentMode === "debit" && (
              <input type="text" placeholder="Debit Card Number" />
            )}

            {paymentMode === "credit" && (
              <input type="text" placeholder="Credit Card Number" />
            )}

            {paymentMode && (
              <button onClick={() => setStep("done")}>Pay Now</button>
            )}
          </div>
        )}

        {/* STEP 3: Order Completion */}
        {step === "done" && (
          <div className="step success">
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Delivery expected within <b>4–5 days</b>.</p>
          </div>
        )}

      </div>
    </div>
  );
}
