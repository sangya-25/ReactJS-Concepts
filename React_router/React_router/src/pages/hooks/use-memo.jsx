import UseFetch from "../../hooks/use-fetch";
import { useMemo, useState } from "react";

function UseMemoExample() {
    const{data,loading}=UseFetch('https://dummyjson.com/products');
    const [flag , setFlag]=useState(false);
    function filterProducts(getProducts){
        return getProducts?.length>0 ? getProducts.filter(singleProductItem=> singleProductItem.price>10):[]
    }
    const memorizedVersion=useMemo(()=>
        filterProducts(data?.products),
        [data?.products]
    )
    if(loading){
        console.log('this data is getting rendered!')
        return(
        <h1>Data id loading...Please wait!</h1>)
    }
    return(
        <div>
            <h1 style={{color:flag?'blue':'red'}}>Use Memo Example</h1>
            <button onClick={()=> setFlag(!flag)}>Toggle Flag</button>
            <ul>
                {
                    memorizedVersion.map(item=> 
                    <li key={item.id}><img src={item.images?.[0]}/>{item.title}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default UseMemoExample;