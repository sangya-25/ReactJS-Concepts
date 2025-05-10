import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../components/cartTile";

function CartList() {
    const navigate=useNavigate();
    const {cartItems}=useContext(ShoppingCartContext);
    const handleOnNavigate=(route)=>{
        navigate(route);
    }
    return (
  <div className="bg-gray-900 min-h-screen">
    <div className="max-w-7xl w-full mx-auto px-6 py-20">
      <h4
        style={{ color: "cornflowerblue", fontSize: "34px", marginBottom: "50px" }}
        className="text-3xl font-bold text-center"
      >
        Shopping Cart Page
      </h4>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {/* Cart Items Section */}
        <div className="md:col-span-2 space-y-10 bg-zinc-800 rounded-md p-6 shadow-md min-h-[400px]">
          {cartItems?.length ? (
            cartItems.map((singleCartItem) => (
              <CartTile key={singleCartItem.id} singleCartItem={singleCartItem} />
            ))
          ) : (
            <h2 className="text-white text-2xl text-center mt-20">No items Available in Cart!</h2>
          )}
        </div>

        {/* Order Summary */}
        <div style={{border:"2px solid black"}} className="bg-gray-300 rounded-md p-6 h-max shadow-md">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-lg font-bold">
              Total <span>$ {cartItems.reduce((acc,curr)=> acc + curr.totalPrice, 0).toFixed(2)}</span>
            </p>
          </ul>
          <div className="mt-5 space-y-2 flex flex-col md:flex-row gap-4">
            <button disabled={cartItems.length===0} className="disabled:opacity-65"
              onClick={() => handleOnNavigate("/checkout")}
            >
              Checkout
            </button>
            <button
              onClick={() => handleOnNavigate("/product-list")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
export default CartList;