import { TQueryParam, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseapi";

const courseManagementApi = baseApi.injectEndpoints({
     endpoints: (builder) =>({
                   getAllRegisteredSemesters: builder.query({
                       query: (args)=>{
                           const params = new URLSearchParams()
                           
                        // params.append(args[0]?.name,args[0]?.value)
                     if(args){
                       args.forEach((item: TQueryParam)=>{
                           params.append(item.name, item.value as string);
                       })
                     }
                           return {
                           url: '/semester-registrations',
                           method:'GET',
                           params: params
                           }
                       },
                       
                       transformResponse: (response: TResponseRedux<TSemester[]>)=>{
                   //    console.log(response);
                           return{
                           data: response.data,
                               meta: response.meta
                           }
                       }
                   }),
                   addRegisteredSemester: builder.mutation({
                       query: (data)=>(
                           {
                               url:'/semester-registrations/create-semester-registration',
                           method: 'POST',
                           body: data
                           }
                       ),
                    //    invalidatesTags: ['semesters'],
                   }),
                   
                   
               }) 
});
export const {useAddRegisteredSemesterMutation, useGetAllRegisteredSemestersQuery}= courseManagementApi;