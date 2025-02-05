import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHInput from "../../../components/form/PHInput";

const CreateAcademicFaculty= ()=>{
    const [createAcademicFaculty] = useAddAcademicFacultyMutation();
    const handleCreateAcademicFaculty: SubmitHandler<FieldValues> = async(data)=>{
        const toastId = toast.loading("Creating Academic Faculty...");
        const res = await createAcademicFaculty(data);
        if(res?.data?.success){
            toast.success("Academic Faculty created successfully", {id:toastId})
        }else{
            toast.error("Failed to create AcademicFaculty", {id:toastId})
        }
    }
    return (
        <div>
            <Flex justify="center" align="center" style={{height:''}}>
            <Col span={6}>
        <PHForm onSubmit={handleCreateAcademicFaculty}
           resolver={zodResolver(academicFacultySchema)}
        >
           <PHInput name="name" label="Enter Faculty Name"/>
    
            <Button htmlType="submit">Submit</Button>
        </PHForm>
        </Col>
        </Flex>
        </div>
    )
}
export default CreateAcademicFaculty;