import { SelectContent } from "@radix-ui/react-select";
import{Input} from "../ui/input"
import { Label} from "../ui/label" ;
import{  Select, SelectItem, SelectTrigger, SelectValue} from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"



function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText,element }) {
  function renderInputsByComponentType(getControlItem) {
    element = null;
    const value = formData[getControlItem.name] || '';
    switch (getControlItem.componentType) {
      case "input":
         element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) => setFormData({ ...formData, [getControlItem.name]: event.target.value })}
            required={getControlItem.required}
            style={{border: '1px solid white',
              color: 'white',
              backgroundColor: 'transparent',
              paddingLeft: '12px', }}
            
          />
        );
        break;

      case "select":
        element = (
          <Select onValueChange ={(value)=> setFormData({
            ...formData,
            [getControlItem.name]: value,
          })}
          value={value} >
            <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
                {getControlItem.options &&
                 getControlItem.options.length > 0 ? (
                  getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                ) : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
            <Textarea
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                value={value}
                onChange={(event) => setFormData({ ...formData, [getControlItem.name]: event.target.value })}
            />
        );
        break;
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            style={{border: '1px solid white',
              color: 'white',
              backgroundColor: 'transparent',
              paddingLeft: '12px', }}
            
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}  >
      <div className="flex flex-col gap-3 justify-center items-center ">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5 "  key={controlItem.name}>
            <Label className="mb-1 text-1xl" style={{ color: 'white', marginBottom: '4px' }}>{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
         <Button type="submit" className="mt-2 w-full bg-white text-black cursor-pointer ">{buttonText || 'submit'}</Button>
      </div>
     
    </form>
  );
}


export default CommonForm;