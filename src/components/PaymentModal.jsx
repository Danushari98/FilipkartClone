import { useState } from "react";

const PaymentModal = ({ product, close }) => {
  const [step, setStep] = useState("select");

  const handlePayment = () => {
    setStep("done");
    setTimeout(() => {
      window.location.href = "/track";
    }, 2000);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        width: "350px",
        borderRadius: "10px"
      }}>
        {step === "select" && (
          <>
            <h2>Pay for {product.name}</h2>
            <p>Amount: ₹{product.price}</p>

            <h3>Select Payment Method</h3>

            <button onClick={handlePayment}>UPI</button>
            <br /><br />
            <button onClick={handlePayment}>Debit Card</button>
            <br /><br />
            <button onClick={handlePayment}>Credit Card</button>
            <br /><br />

            <button onClick={close} style={{ marginTop: "10px" }}>
              Cancel
            </button>
          </>
        )}

        {step === "done" && (
          <h2 style={{ textAlign: "center" }}>
            ✅ Order Placed Successfully! <br />
            Delivery: 3–4 Days
          </h2>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
