import CommonInput from "../common-input";
import CommonSelect from "../common-select";
import CommonText from "../common-text";

const formTypes={
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREAS : 'textarea' 
}
function CommonForm({formControls=[], formData, OnhandleSubmit,setFormData,buttonText}){
    function renderFormElements(getCurrentElement) {
        let content = null;
        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
                content = (
                    <CommonInput
                        label={getCurrentElement.label}
                        name={getCurrentElement.name}
                        id={getCurrentElement.id}
                        placeholder={getCurrentElement.placeholder}
                        value={formData[getCurrentElement.name]}
                        type={getCurrentElement.type}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [event.target.name]: event.target.value,
                            })
                        }
                    />
                );
                break;
            case formTypes.SELECT:
                content=(
                    <CommonSelect
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    value={getCurrentElement.value}
                    options={getCurrentElement.options|| []}
                    onChange={(event) =>
                        setFormData({
                          ...formData,
                          [event.target.name]: event.target.value,
                        })
                      }
                    />
                );
                break;
            case formTypes.TEXTAREAS:
                content=(
                    <CommonText
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    rows={getCurrentElement.rows}
                    cols={getCurrentElement.cols}
                    placeholder={getCurrentElement.placeholder}
                    onChange={(event) =>
                        setFormData({
                          ...formData,
                          [event.target.name]: event.target.value,
                        })
                      }
                    />
                );
                break;
            default:
                break;
        }
        return content;
    }
    
    return <form onSubmit={OnhandleSubmit}>
        {
            formControls?.length ?
            formControls.map(singleFormElementItem=> renderFormElements(singleFormElementItem))
            : null
        }
        <div style={{marginTop: '12px'}}>
            <button type="submit">{buttonText || 'Submit'}</button>
        </div>
    </form>
}
export default CommonForm;