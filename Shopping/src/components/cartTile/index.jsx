import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({singleCartItem}){
    const {handleRemovefromcart, handleAddtoCart}=useContext(ShoppingCartContext);
    return(
        <div style={{borderBottom:"2px solid gray", marginTop:"2px"}} className="grid grid-cols-3 items-start gap-5 p-5">
            <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-md ">
                    <img style={{border:"3px solid black"}} src={singleCartItem?.thumbnail} className="w-full h-full object-contain " alt="" />
                </div>
                <div>
                <h3 className="text-base font-bold text-gray-300 ">
                    {singleCartItem?.title}
                </h3>
                <button onClick={()=>handleRemovefromcart(singleCartItem, true)} style={{marginTop:'10px', border:"3px solid cornflowerblue"}}>Remove</button>
            </div>
            </div>
            <div className="ml-auto">
                <h3 className="text-lg font-bold text-gray-400">$ {singleCartItem?.totalPrice.toFixed(2)}</h3>
                <p className="mt-2 mb-3 text-[16px]">Quantity: {singleCartItem.quantity}</p>
                <div>
                    <button  className="opacity-100 disabled:opacity-60 disabled:cursor-not-allowed" disabled={Number(singleCartItem?.quantity ?? 0) === 1} onClick={()=>handleRemovefromcart(singleCartItem,false)} style={{ fontSize:"17px", marginRight:"10px", marginTop:"10px", }}>- 1</button>
                    <button onClick={()=>handleAddtoCart(singleCartItem)} style={{backgroundColor:"green",fontSize:"17px", marginRight:"10px"}}>+</button>
                </div>
            </div>
        </div>
    )
}
export default CartTile;