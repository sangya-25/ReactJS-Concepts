


function CommonInput({label, onChange, name, id, placeholder,value,type = 'text'}){
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            type={type}
            name={name} 
            id={id}
            placeholder={placeholder || 'Enter your value here'} 
            value={value} 
            onChange={onChange} 
            style={{margin:'5px'}}/>
    </div>
    );
}
export default CommonInput;