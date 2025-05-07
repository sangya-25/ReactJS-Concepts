import { useEffect, useRef } from "react";

function Hooks(){
    const countvalue = useRef(0)
    const divElementRef=useRef()
    const inputRefElement=useRef()
    function handleClick(){
        countvalue.current++
        console.log(countvalue.current)
    } 
    // will access the html elements through useRef() hook and can do certain changes further through this referenced variable like changing font/color
    useEffect(()=>{
        const getDivReference=divElementRef.current;
        const getinputReference=inputRefElement.current;
        getinputReference.style.border='3px solid blue';
        inputRefElement.current.focus()
        getDivReference.style.color='cornflowerblue';
        setTimeout(()=>{
            getDivReference.style.color='red'
        },2000)
        console.log(getDivReference)
    })
    return(
        <div>
            <h1>Use ref, use Callback and use memo hook!</h1>
            <button onClick={handleClick}>Click me</button>
            <div ref={divElementRef}>Some Random Text</div>
            <input ref={inputRefElement} type="text" name="name" placeholder="enter your name"/>
        </div>
    )
}
export default Hooks;