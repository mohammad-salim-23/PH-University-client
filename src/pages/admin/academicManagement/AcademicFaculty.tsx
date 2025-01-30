import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi"
const AcademicFaculty= ()=>{
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <div>
            <h1>This is AcademicFacultyComponent</h1>
        </div>
    )
}
export default AcademicFaculty;