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
    return(
        <div>
            <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
                <h4 style={{color:"cornflowerblue",fontSize:'34px'}} className="text-2xl font-bold  text-center">Shopping Cart Page</h4>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div style={{marginTop:"100px",border:"3px solid cornflowerblue"}} className="md:col-span-2 space-y-10 bg-zinc-800 rounded-md" >
                        {
                            cartItems?.length ? cartItems.map((singleCartItem)=>
                                <CartTile singleCartItem={singleCartItem}/>
                            ) : <h2 style={{fontSize:'30px', marginTop:"70px"}}>No items Available in Cart!</h2>
                        }
                    </div>
                    <div style={{marginTop:"340px"}} className="bg-gray-200 rounded-md p-4 h-max">
                            <h3 className="text-xl font-extrabold text-gray-950 border-gray-300 pb-2">Order Summary</h3>
                            <ul className="text-gray-700 mt-4 space-y-2">
                                <p className="flex flex-wrap gap-4 text-lg font-bold">
                                    Total <span></span>
                                </p>
                            </ul>
                            <div className="mt-5 space-y-1 flex gap-2">
                                <button style={{border:"5px solid gray"}} onClick={()=>handleOnNavigate('/checkout')}>Checkout</button>
                                <button style={{border:"5px solid gray"}} onClick={()=>handleOnNavigate('/product-list')}>Continue Shopping</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartList;