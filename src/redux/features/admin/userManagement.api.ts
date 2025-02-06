import { TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseapi";

const userManagementApi = baseApi.injectEndpoints(
    {
       endpoints: (builder) =>({
               getAllStudents: builder.query({
                   query: (args)=>{
                       const params = new URLSearchParams()
                       
                    params.append(args[0].name,args[0].value)
                 if(args){
                   args.forEach((item: TQueryParam)=>{
                       params.append(item.name, item.value as string);
                   })
                 }
                       return {
                           url: '/students',
                       method:'GET',
                       params: params
                       }
                   },
                   
                   transformResponse: (response: TResponseRedux<any>)=>{
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
               
               
           }) 
    }
);
export const {useAddStudentMutation , useGetAllStudentsQuery} = userManagementApi;