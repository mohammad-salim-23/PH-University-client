import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = ()=>{
    const onSubmit : SubmitHandler<FieldValues>=(data)=>{
        console.log(data);
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
        <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="name" label="name"/>
            <PHInput type="text" name="name" label="year"/>
            <PHSelect label="name"/>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
        </Col>
        </Flex>
    )
}
export default CreateAcademicSemester;