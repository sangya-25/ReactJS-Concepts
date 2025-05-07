function CommonSelect({label,name,id,onChange,value,options=[]}){
    return(
    <div>
        <label htmlFor={name}>{label}</label>
        <select 
        name={name} 
        id={id} 
        value={value}
        onChange={onChange} 
        style={{margin:'5px'}}>
            {options.map((option, index)=>(
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
    );
}
export default CommonSelect