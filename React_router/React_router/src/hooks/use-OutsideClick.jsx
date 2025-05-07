import { useEffect } from "react";

function useOutsideClick(ref,handler){
    useEffect(()=>{
        function handleClickOutside(event){
            if(ref.current && !ref.current.contains(event.target)){
                handler();
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return()=>{
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[ref,handler]);
}
export default useOutsideClick;