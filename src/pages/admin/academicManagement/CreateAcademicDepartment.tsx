import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "../../../components/form/PHInput";
import { useCreateAcademicDepartmentMutation, useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TAcademicDepartment, TQueryParam,  } from "../../../types";
import { useState } from "react";
import { academicDepartmentsConstant } from "../../../constants/global";
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicDepartment = ()=>{
    const [params, setParams] = useState<TQueryParam[] | undefined>(undefined)
    const {data} = useGetAllAcademicDepartmentQuery(params);
    console.log(data);
    const [createAcademicDepartment] = useCreateAcademicDepartmentMutation();

    const [departmentfield, setDepartmentField] = useState("");
    const departmentSelectOptions = academicDepartmentsConstant.map(department=>({label:department.name, value:department.name}))
    const academicFacultySelectOptions = data?.data?.map((faculty:TAcademicDepartment)=>({label: faculty.academicFaculty?.name, value:faculty.academicFaculty?._id}))
    console.log(academicFacultySelectOptions );
    const onSubmit : SubmitHandler<FieldValues>= async(data)=>{
         const toastId = toast.loading("Creating Academic Department");
         const res = await createAcademicDepartment(data);
         if(res?.data?.success){
            toast.success("Academic Departmeent created successfully", {id:toastId});
         }else{
            toast.error('Failed to create Academic Department', {id:toastId})
         }
    }
    return (
        <Flex justify="center" align="center" style={{height:''}}>
            <Col span={6}>
        <PHForm onSubmit={onSubmit}
           resolver={zodResolver(academicDepartmentSchema)}
        >
             <PHSelect label="Academic Department" name="name" options={departmentSelectOptions}/>
            <PHSelect label="Faculty" name="faculty" options={academicFacultySelectOptions}/>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
        </Col>
        </Flex>
    )
}
export default CreateAcademicDepartment ;