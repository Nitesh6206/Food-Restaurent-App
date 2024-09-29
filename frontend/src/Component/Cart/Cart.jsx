// src/components/Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../Store/Slices/cartSlice';
import './Cart.css'; // Import the external CSS file

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle order placement
  const handleOrder = () => {
    // Here you can add order processing logic (e.g., API calls)
    // For now, we'll just show the modal
    setIsModalOpen(true);
    // Optionally, clear the cart after ordering
    dispatch(clearCart());
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-header">
              <div className="header-item image-column">Image</div>
              <div className="header-item name-column">Name</div>
              <div className="header-item price-column">Price</div>
              <div className="header-item quantity-column">Quantity</div>
              <div className="header-item total-column">Total</div>
              <div className="header-item action-column">Actions</div>
            </div>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} />
                    ) : (
                      <div className="placeholder-image">No Image</div>
                    )}
                  </div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">RS {item.price.toFixed(2)}</div>
                  <div className="item-quantity">{item.quantity}</div>
                  <div className="item-total">RS {(item.price * item.quantity).toFixed(2)}</div>
                  <div className="item-action">
                    <button
                      className="remove-button"
                      onClick={() => dispatch(removeFromCart(item))}
                      aria-label={`Remove RS{item.name} from cart`}
                    >
                      &times; Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="summary-item">
                <span>Total Items:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="summary-item">
                <span>Total Price:</span>
                <span>RS {totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-buttons">
                <button className="order-button" onClick={handleOrder}>
                  Order Now
                </button>
                <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal Implementation */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Order Placed Successfully!</h3>
            <p>Thank you for your purchase.</p>
            <button className="close-modal-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
