import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi"
const AcademicDepartment = ()=>{
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <div>
            <h1>This is AcademicDepartment Component</h1>
        </div>
    )
}
export default AcademicDepartment ;