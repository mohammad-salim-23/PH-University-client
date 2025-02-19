
import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseapi";
const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllSemesters: builder.query({
            query: (args)=>{
                const params = new URLSearchParams()
                
                     if(args){
            args.forEach((item: TQueryParam)=>{
                params.append(item.name, item.value as string);
            })
          }
                return {
                    url: '/academic-semesters',
                method:'GET',
                params: params
                }
            },
            
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>)=>{
        //    console.log(response);
                return{
                data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicSemester: builder.mutation({
            query: (data)=>({
                url:'/academic-semesters/create-academic-semester',
                method:'POST',
                body:data
            })
        }),
        getAcademicFaculties: builder.query({
            query: ()=>{
                return {
                    url:'/academic-faculties',
                    method: 'GET'
                };

            },
            transformResponse: (response: TResponseRedux<TAcademicFaculty[]>)=>{
                
                return {
                    data: response.data,
                    meta:  response.meta
                }
            }
        }),
        addAcademicFaculty: builder.mutation({
            query: (data)=>(
                {
                    url:'/academic-faculties/create-academic-faculty',
                method: 'POST',
                body: data
                }
            ),
        }),
        getAllAcademicDepartment: builder.query({
            query: (args)=>{
                const params = new URLSearchParams()
                
        
          if(args){
            args.forEach((item: TQueryParam)=>{
                params.append(item.name, item.value as string);
            })
          }
          return {
            url: '/academic-departments',
            method: 'GET',
            params,
          }
        },  
        }),
        createAcademicDepartment: builder.mutation({
            query: payload=>({
                url:'/academic-departments/create-academic-department',
                method:'POST',
                body: payload
            })
        }),
    })
})
export const {useGetAllSemestersQuery, useAddAcademicSemesterMutation, useGetAcademicFacultiesQuery, useAddAcademicFacultyMutation,
    useGetAllAcademicDepartmentQuery,
    useCreateAcademicDepartmentMutation
} = academicManagementApi;