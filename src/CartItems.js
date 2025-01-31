import React from "react";
import "./CartItems.css";
import { useStateValue } from "./StateProvider";

function CartItems() {
  const [{ basket }, dispatch] = useStateValue();
  const removefromcart = (id) => {
    //dispatch action on clicking the button into reducer
    dispatch({
      type: "REMOVE_FROM_CART",
      id:id,
    });
  };

  return (
    <div className="cart_item">
      {basket.map((item) => (
        <div className="cart_box">
          <div className="item_box_left">
            <img className="item_image" src={item.image} alt="" />
          </div>
          <div className="item_box_right">
            <strong>
              <p>{item.title}</p>
            </strong>
            <p>₹{item.price}</p>
            <div className="cart_star_display">
              {Array(item.star)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            <button onClick={()=>removefromcart(item.id)}>Remove From Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
