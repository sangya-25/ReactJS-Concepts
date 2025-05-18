import { create } from "zustand";

const useCounter= create((set)=>{
    return{
        count: 0,
        listofProducts : [],
        handleIncrementCount : ()=> 
            set((state)=>({
            count: state.count+1,
        })),
        handleDecrementtCount : ()=> 
            set((state)=>({
            count: state.count-1,
        })),
        fetchListOfProducts: async ()=> {
            const apiResponse= await fetch('https://dummyjson.com/products')
            const result=await apiResponse.json()
            set({
                listofProducts: result?.products,
            });
        }
            
    };
});
export default useCounter;