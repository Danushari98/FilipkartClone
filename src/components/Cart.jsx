const Cart = ({ cart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item) => (
        <div key={item.id} style={{
          border: "1px solid gray",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
