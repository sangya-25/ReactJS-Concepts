import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductTile({product}){
    const navigate=useNavigate();
    const {handleAddtoCart, productDetails, cartItems}=useContext(ShoppingCartContext);
    function handleNavigatetoProductsDetails(getcurrentProductId){
        navigate(`/product-details/${getcurrentProductId}`)
    }
    return(
        <div>
            <div style={{border:'3px solid cornflowerblue' , borderRadius:'10px'}} className="border p-4 rounded shadow">
            <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover mb-2 transition-all duration-300 group-hover: scale-120" />
            <h3 className="text-lg text-black font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
        </div>
        <button onClick={()=>handleNavigatetoProductsDetails(product?.id)} style={{width:'200px',marginTop:'7px' ,backgroundColor:"#1a1a1a", border:'3px solid cornflowerblue',fontWeight:"bold",fontSize:'17px'}}>View Details</button>
        <button onClick={()=>handleAddtoCart(product)}  style={{marginTop:'7px', marginLeft:'3px',backgroundColor:"#1a1a1a", border:'3px solid cornflowerblue',fontWeight:"bold",fontSize:'17px'}}>Add to cart</button>
        </div>
    );
}
export default ProductTile;