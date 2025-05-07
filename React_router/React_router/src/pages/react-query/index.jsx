import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListofProducts } from "./api";
import { useState } from "react";

function ReactQuery(){
    const [productTitle, setProductTitle]=useState("");
    const getQueryClient=useQueryClient();
const {data: productList, isLoading}=useQuery({
    queryKey: ['productList'],
    queryFn: ()=> fetchListofProducts(),
});
const {mutateAsync: handleNewProductMutation}=useMutation({
    mutationFn: addNewProduct,
    onSuccess: ()=>{
        getQueryClient.invalidateQueries(["productList"]);
    }
});
async function handleAddNewProduct(){
    await handleNewProductMutation(productTitle)
    setProductTitle("");
}
if(isLoading){
    return(
        <h1>loading data...</h1>
    )
}
    return(
        <div>
            <h1>React Query</h1>
            <div>
                <input onChange={(event)=> setProductTitle(event.target.value)} name="name" value={productTitle} type="text" placeholder="Enter Product Title"/>
                <button onClick={handleAddNewProduct} disabled={productTitle.trim()===""} type="button">Add Product</button>
            </div>
            <ul>
            {
                productList?.length>0 ? productList.map(item=>
                        <li key={item.id}>{item.title}</li>
                    ): <h3>No product Found</h3>
                }
            </ul>
        </div>
    )
}
export default ReactQuery;