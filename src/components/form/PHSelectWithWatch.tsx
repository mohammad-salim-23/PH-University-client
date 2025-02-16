import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
type TPHSelectProps = {
    label: string;
    name: string;
    options: {value : string; label: string ; 
      disabled?: boolean
    }[] | undefined;
    mode? : "multiple" | undefined;
    disabled?: boolean;
    onValueChange : React.Dispatch<React.SetStateAction<string>>;
}
const PHSelectWithWatch = ({ label, name,
   options, 
  disabled , 
  mode,
  onValueChange
 }: TPHSelectProps) => {
  const method = useFormContext();
  const inputValue = useWatch({
    control : method.control,
    name ,
  });
 useEffect(()=>{
  onValueChange(inputValue);
 }, [inputValue])
  return (
    <Controller
       name={name}
       render = {({field, fieldState: {error}})=>(
        <Form.Item label={label}>
        <Select
          mode = {mode}
          style={{ width: "100%" }}
          {...field}
          options={options}
          size="large"
          disabled={disabled}
        />
        {error &&  <>{error.message}</>}
      </Form.Item>
       )}
    />
  );
};
export default PHSelectWithWatch ;
