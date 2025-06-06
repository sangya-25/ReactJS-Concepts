//create the contect
//provide the state to context
//wrap the context in root component
//consume the context using useContext()

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext=createContext(null);

function ShoppingCartProvider({children}){
    const navigate=useNavigate();
    const[loading, setLoading]=useState(true);
    const [listOfProducts, setListOfProducts]= useState([]);
    const[productDetails, setProductDetails]=useState(null);
    const [cartItems, setCartItems]=useState([]);
    async function fetchListOfProducts() {
        const apiResponse=await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();

        console.log(result);
        if(result && result?.products){
            setListOfProducts(result?.products);
            setLoading(false)
        }
    }

    function handleAddtoCart(getProductDetails){
        console.log(getProductDetails);
        let copyExistingCartItems=[...cartItems];
        const findIndexofCurrentItem=copyExistingCartItems.findIndex(cartItem=>cartItem.id===getProductDetails.id);
        if(findIndexofCurrentItem===-1){
            copyExistingCartItems.push({
                ...getProductDetails,
                quantity:1,
                totalPrice: getProductDetails?.price
            })
        }else{
            console.log('item already in the cart!')
            copyExistingCartItems[findIndexofCurrentItem]={
                ...copyExistingCartItems[findIndexofCurrentItem],
                quantity: copyExistingCartItems[findIndexofCurrentItem].quantity+1,
                totalPrice: (copyExistingCartItems[findIndexofCurrentItem].quantity + 1) * copyExistingCartItems[findIndexofCurrentItem].price
            }
        }
        setCartItems(copyExistingCartItems);
        localStorage.setItem('cartItems',JSON.stringify(copyExistingCartItems));
        navigate('/cart-list')
    }
    function handleRemovefromcart(getProductDetails, isFullyRemovefromCart){
        let copyExistingCartItems = [...cartItems];
        const findIndexofCurrentItem=copyExistingCartItems.findIndex(item=> item.id === getProductDetails.id);
        if(isFullyRemovefromCart){
            copyExistingCartItems.splice(findIndexofCurrentItem, 1)
        }else{
            copyExistingCartItems[findIndexofCurrentItem]={
                ...copyExistingCartItems[findIndexofCurrentItem],
                quantity : copyExistingCartItems[findIndexofCurrentItem].quantity-1,
                totalPrice : (copyExistingCartItems[findIndexofCurrentItem].quantity-1)*copyExistingCartItems[findIndexofCurrentItem].price
            };
        }
        localStorage.setItem('cartItems',JSON.stringify(copyExistingCartItems));
        setCartItems(copyExistingCartItems)
    }
    useEffect(()=>{
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem('cartItems')|| []))
    },[])
    console.log(listOfProducts);
    return(
        <ShoppingCartContext.Provider value={{listOfProducts ,loading,setLoading,productDetails, setProductDetails,handleAddtoCart, cartItems,handleRemovefromcart,}}>{children}</ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider;