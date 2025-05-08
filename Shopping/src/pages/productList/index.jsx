import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/product-item";
import NavBar from "../../components/navbar";

function ProductList() {
    const {listOfProducts, loading} = useContext(ShoppingCartContext);
    console.log(listOfProducts);
    if(loading){
        return(
            <div>
                <img style={{borderRadius:'50px'}} src="/src/assets/loading-1.gif" alt="" />
                <h1>Please wait...</h1>
            </div>
        )
    }
    return(
        <div>
            <NavBar/>
             <section style={{border:'5px solid cornflowerblue', marginTop:"30px"}} className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Our Featured Products</h2>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                {   
                    listOfProducts && listOfProducts.length > 0 ? 
                    listOfProducts.map((singleProductTile) => (
                    <ProductTile key={singleProductTile.id} product={singleProductTile} />
                    )) : 
                    <h3 className="text-black">No products Found!</h3>
                }
                </div>
            </div>
        </section>
        </div>
    )
}
export default ProductList;