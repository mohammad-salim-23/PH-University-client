import { TAcademicDepartment } from "../types";

export const monthNames = [
    'January',
    "February", "March", 
    "April", "May", "June", 
    "July", "August", "September", "October", 
    "November", "December"
];
export const monthOptions = monthNames.map((item)=>({
    value: item,
    label: item
}))

  
  export const academicDepartmentsConstant: TAcademicDepartment[] = [
    { name: 'Science', academicFaculty: 'Faculty of Science' },
    { name: 'Business Studies', academicFaculty: 'Faculty of Business' },
    { name: 'Humanities (Arts)', academicFaculty: 'Faculty of Arts' },
    { name: 'Engineering', academicFaculty: 'Faculty of Engineering' },
    { name: 'Medical', academicFaculty: 'Faculty of Medical Sciences' },
    { name: 'Law', academicFaculty: 'Faculty of Law' },
    { name: 'Agriculture', academicFaculty: 'Faculty of Agriculture' },
    { name: 'Fine Arts', academicFaculty: 'Faculty of Fine Arts' },
    { name: 'Islamic Studies', academicFaculty: 'Faculty of Islamic Studies' },
    { name: 'Marine and Fisheries', academicFaculty: 'Faculty of Marine and Fisheries' },
    { name: 'Architecture', academicFaculty: 'Faculty of Architecture' },
    { name: 'Environmental Science', academicFaculty: 'Faculty of Environmental Science' },
    { name: 'Tourism and Hospitality', academicFaculty: 'Faculty of Tourism and Hospitality' },
    { name: 'Journalism and Media', academicFaculty: 'Faculty of Journalism and Media' },
    { name: 'Computer Science and IT', academicFaculty: 'Faculty of Computer Science and IT' }
  ];
  