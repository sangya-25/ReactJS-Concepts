import { useState } from "react";
import Counter from "./counter";
import { set } from "react-hook-form";

function UseCallbackExample(){
    const [countOne, setCountOne]=useState(0)
    const [countTwo, setCountTwo]=useState(0)
    return (
        <div>
            <h1>Use callback Example</h1>
            <Counter countValue={countOne} onClick={()=>setCountOne(countOne+1)}/>
            <Counter countValue={countTwo} onClick={()=>setCountTwo(countTwo+1)}/>
        </div>
    );
}
export default UseCallbackExample;