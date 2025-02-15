import { FieldValues, SubmitHandler } from "react-hook-form";
import {  useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";

const CreateCourse = ()=>{
  
   const [createCourse] = useAddCourseMutation();
   //course er data get
   const {data : courses} = useGetAllCoursesQuery(undefined) ;
   
   const preRequisiteCoursesOptions = courses?.data?.map((item: any)=>({
    value: item._id,
    label: item.title
   }))
    const onSubmit : SubmitHandler<FieldValues> = async(data)=>{
        const toastId = toast.loading('Creating...');
        const courseData = {
            ...data,
            code : Number(data?.code),
            credits: Number (data?.credits),
           isDeleted: false,
           preRequisiteCourses : data?.preRequisiteCourses?.map((item:any)=> ({
            course:item,
            isDeleted: false

           }))
        };
        console.log(courseData);

        try{
            const res = (await createCourse(courseData)) as TResponse<any>;
            console.log(res);
            if(res.error){
                toast.error(res.error.data.message, {id: toastId});
            }else{
                toast.success('Semester created', {id: toastId});
            }
        }catch(err){
            toast.error('Something went wrong', {id:toastId});
        }
    };
    return (
        <Flex justify="center" align="center" style={{height:''}}>
            <Col span={6}>
        <PHForm onSubmit={onSubmit}
          
        >
            
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label=" Credits" />
          <PHSelect 
          mode = "multiple"
          options={preRequisiteCoursesOptions}
          
          name = "preRequisiteCourses"
          label = "preRequisiteCourses"
          
          />
            <Button htmlType="submit">Submit</Button>
        </PHForm>
        </Col>
        </Flex>
    )
}
export default CreateCourse;