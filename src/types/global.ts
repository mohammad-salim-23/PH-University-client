import { BaseQueryApi } from "@reduxjs/toolkit/query";
export type TError= {
   data:{
    message: string;
    stack: string;
    success: boolean;
   };
   status: number;
};

export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
}
export type TResponse<T> = {
    data?:T;
    error ?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
}
export type TAcademicFaculty={
    key?: string;
    _id:string;
    name:string;
    
}
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TAcademicDepartment = {
    name: string;
    academicFaculty: TAcademicFaculty; 
};
export type TQueryParam = {
    name: string;
    value: boolean | React.Key;
}