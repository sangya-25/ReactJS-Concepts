function CommonInput({type, placeholder,name ,value, onChange, className}){
    return(
        <input style={{padding:"10px",borderRadius:'10px',fontSize:'17px'}}
            type={type || 'text'}
            placeholder={placeholder || 'Enter Value'}
            value={value}
            onChange={onChange}
            name={name}
            className={className || 'w-full block px-7 py-2 mt-2 text-black border rounded-lg'}
        />
    );
}
export default CommonInput;                  