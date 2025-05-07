function CommonText({label,name,id,placeholder,onChange,rows,cols}){
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <textarea 
             name={name}
             id={id}
             placeholder={placeholder||'Enter your Text'}
             rows={rows}
             cols={cols}
             onChange={onChange}
             style={{margin:'5px',maxWidth:'200px'}}>
             </textarea>
        </div>
    )
}
export default CommonText