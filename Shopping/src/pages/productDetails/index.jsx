import { useContext, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetails() {
    const {id}=useParams();
    const navigate=useNavigate();
    const {productDetails, setProductDetails,loading,setLoading, handleAddtoCart, cartItems}=useContext(ShoppingCartContext)
    async function fetchProductDetails() {
        const apiResponse=await fetch(`https://dummyjson.com/products/${id}`)
        const result = await apiResponse.json();
        if(result){
            setProductDetails(result);
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchProductDetails()
    },[id])
    if(loading){
        return(
            <h1>Fetching Product Details...</h1>
        )
    }
    const handleOnNavigate=(route)=>{
        navigate(route);
    }
    return(
        <div>
            <button onClick={()=>handleOnNavigate('/')} style={{border:"3px solid cornflowerblue", marginRight:"20px"}}>Home</button>
            <button onClick={()=>handleOnNavigate('/product-list')}  style={{border:"3px solid cornflowerblue", marginBottom:'70px'}}>Product List</button>
            <h2 style={{color:'cornflowerblue', fontSize:"34px", fontWeight:'bold', marginBottom:"30px"}}>Product Details</h2>
            <div style={{borderRadius:"20px", border:"4px solid black"}} className="p-6 bg-white lg:max-w-7xl max-w-4xl mx-auto">
                <div className=" grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm-p-6">
                    <div className=" lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div style={{border:"5px solid black"}} className="px-4 py-10 rounded-xl shadow-lg relative">
                            <img className="w-4/5 rounded object-cover" src={productDetails?.thumbnail} alt={productDetails?.title} />
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto ">
                            {
                                productDetails?.images?.length>0 ? productDetails?.images.map((imageItem)=>
                                    <div style={{border:"2px solid black"}} className="rounded-xl p-4 shadow-md" key={imageItem}>
                                        <img className="w-24 cursor-pointer" src={imageItem} alt='Product Secondary Image' />
                                    </div>
                                ): null
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[#333333]">{productDetails?.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p style={{marginLeft:'22px'}} className="text-[#333333] text-xl font-bold">$ {productDetails?.price}</p>
                        </div>
                        <div>
                            <button className="disabled:opacity-65"  disabled={!productDetails || cartItems.findIndex(item => item.id === productDetails.id) > -1} onClick={()=>handleAddtoCart(productDetails)} style={{marginTop:"20px", border:'10px solid darkgray', width:"200px"}}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;