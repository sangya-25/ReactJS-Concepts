import useOutsideClick from '../../hooks/use-OutsideClick';
import { use, useRef, useState } from 'react';
function ModalExample(){
    const[isModelOpen,setIsModelOpen]=useState(false);
    const modalRef=useRef(null);
    useOutsideClick(modalRef,()=>setIsModelOpen(false));
    return(
        <div>
            <button onClick={()=> setIsModelOpen(true)}>Open Modal</button>
        {isModelOpen && (
            <div style={{position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
                <div ref={modalRef} style={{backgroundColor: "#fff",
                    padding: "2rem",
                    borderRadius: "8px",
                    minWidth: "300px",
                    textAlign: "center"}}>
                    <h2>Modal Wibdow</h2>\
                    <p>Click Outside this box to close the modal.</p>
                    <button onClick={()=> setIsModelOpen(false)}>Close Manually</button>
                </div>
            </div>
        )}
        </div>
    );
}
export default ModalExample;