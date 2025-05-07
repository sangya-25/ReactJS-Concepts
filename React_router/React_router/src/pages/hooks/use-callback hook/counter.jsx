import { memo } from "react";

function Counter({countValue,onClick}){
    console.log(onClick, 'is getting rendered & count is: ',countValue)
    return(
        <div>
            <p>{countValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    );
}
export default memo(Counter);