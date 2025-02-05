import { baseApi } from "../../api/baseapi";

const userManagementApi = baseApi.injectEndpoints(
    {
       endpoints: (builder) =>({
            //    getAllSemesters: builder.query({
            //        query: (args)=>{
            //            const params = new URLSearchParams()
                       
            //         params.append(args[0].name,args[0].value)
            //      if(args){
            //        args.forEach((item: TQueryParam)=>{
            //            params.append(item.name, item.value as string);
            //        })
            //      }
            //            return {
            //                url: '/academic-semesters',
            //            method:'GET',
            //            params: params
            //            }
            //        },
                   
            //        transformResponse: (response: TResponseRedux<TAcademicSemester[]>)=>{
            //    //    console.log(response);
            //            return{
            //            data: response.data,
            //                meta: response.meta
            //            }
            //        }
            //    }),
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
export const {useAddStudentMutation } = userManagementApi;