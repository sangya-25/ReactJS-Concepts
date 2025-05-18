import { useEffect } from "react";
import useCounter from "../store/useCounter";

function Products(){
    const stateValue =useCounter(state=>state);
    const {fetchListOfProducts}=stateValue;
    const productList=useCounter(state=> state.listofProducts)
    useEffect(()=>{
        fetchListOfProducts()
    },[])
    return(
        <div>
            <h1>List of Products</h1>
            <ul style={{display:"flex", flexWrap:'wrap'}}>
                {
                    productList?.length > 0 ?
                    productList.map(singleProductItem=> <div key={singleProductItem.id}>
                        <p>{singleProductItem?.title}</p>
                        <img src={singleProductItem?.thumbnail} />
                    </div>)
                    : <h3>NO products available</h3>
                }
            </ul>
        </div>
    )
}
export default Products;