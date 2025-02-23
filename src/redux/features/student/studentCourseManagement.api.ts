import { TQueryParam, TResponseRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseapi";

const studentCourseApi = baseApi.injectEndpoints({
       endpoints: (builder) =>({
                   getAllOfferedCourses: builder.query({
                       query: (args)=>{
                           const params = new URLSearchParams()
                           
                       
                     if(args){
                       args.forEach((item: TQueryParam)=>{
                           params.append(item.name, item.value as string);
                       })
                     }
                           return {
                           url: '/offered-courses/my-offered-courses',
                           method:'GET',
                           params: params
                           }
                       },
                       
                       transformResponse: (response: TResponseRedux<TOfferedCourse[]>)=>{
                   //    console.log(response);
                           return{
                           data: response.data,
                               meta: response.meta
                           }
                       }
                   }),
                    
                   addStudent: builder.mutation({
                    query: (data)=>(
                        {
                            url:'/users/create-student',
                        method: 'POST',
                        body: data
                        }
                    ),
                }),
               }) ,
})
export const {useGetAllOfferedCoursesQuery} = studentCourseApi;