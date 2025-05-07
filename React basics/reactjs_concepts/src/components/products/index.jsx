import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css'

const initialState=false
const initialvalue=0
function ProductList(props){
    const {name, city, job, dummyProductData_key}=props;
    // const flag=false;
    //similar to setState and a method to handle the events in classbased component
    const [flag,setFlag]=useState(initialState)  //here useState() is a hook
    const [count, setCount]=useState(initialvalue);
    const [changeStyle, setStyle]=useState(false)
    const handletoggleText=()=>{
        setFlag(!flag);
    } 
    const handleCount=()=>{
        setCount(count+1);
    }
    useEffect(()=>{ //similar to ComponentDidMount
        setFlag(!flag)
    },[])//this is only run on page when load once
    useEffect(()=>{
        if(count===10){setStyle(true)};
    },[count]);

    function renderTextBox(getFlag){
        return getFlag? <h4>My Name is {name}, and I live in {city}</h4>: <h4>Welcome to React JS tutorial, I'm {name}</h4>
    }
    const renderTextblock= flag? <h4>Hey</h4> : <h3>Looking forward for a interactive designs</h3>

    return(
        <div>

            <h3 className="title">Ecommerce Projects</h3>
            <button onClick={handletoggleText}>Toggle Text</button>
            {
                renderTextBox(flag)
            }
            {renderTextblock}
            {
                flag?<h4>{name} and {city}</h4>:<h3>Hello Users</h3>
            }
            <div>
                <button onClick={handleCount} style={{backgroundColor:changeStyle?"cornflowerblue":"blue",filter: "drop-shadow(0 0 0.1em #646cffaa)"}}>Count</button>
                <p>Count is {count}</p>
            </div>
            <ul>
                {dummyProductData_key.map((item,index)=> (
                    <ProductItem singleProductItem={item} key={index}/>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;
