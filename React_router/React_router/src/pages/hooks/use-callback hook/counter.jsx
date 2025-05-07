function Counter({countValue,onClick}){
    console.log('this is getting rendered',countValue)
    return(
        <div>
            <p>{countValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    );
}
export default Counter;