import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
type TPHSelectProps = {
    label: string;
    name: string;
    options: {value : string; label: string ; 
      disabled?: boolean
    }[] | undefined;
    mode? : "multiple" | undefined;
    disabled?: boolean
   
}
const PHSelect = ({ label, name, options, disabled , mode
 }: TPHSelectProps) => {
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
export default PHSelect;
