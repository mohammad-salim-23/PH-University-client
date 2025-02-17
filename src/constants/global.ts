
import { TAcademicDepartment, TAcademicFaculty } from "../types";

export const monthNames = [
    'January',
    "February", "March", 
    "April", "May", "June", 
    "July", "August", "September", "October", 
    "November", "December"
];
const weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
export const genders = ['Male', 'Female', 'Other'];
export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const monthOptions = monthNames.map((item)=>({
    value: item,
    label: item
}));
export const genderOptions = genders.map((item)=>({
  value: item.toLowerCase(),
  label: item,
}));

export const bloodGroupOptions = bloodGroups.map((item)=>({
  value: item,
  label: item
}))
export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));
  
  const faculties: TAcademicFaculty[] = [
    { _id: "1", name: "Faculty of Science" },
    { _id: "2", name: "Faculty of Business" },
    { _id: "3", name: "Faculty of Arts" },
    { _id: "4", name: "Faculty of Engineering" },
    { _id: "5", name: "Faculty of Medical Sciences" },
    { _id: "6", name: "Faculty of Law" },
    { _id: "7", name: "Faculty of Agriculture" },
    { _id: "8", name: "Faculty of Fine Arts" },
    { _id: "9", name: "Faculty of Islamic Studies" },
    { _id: "10", name: "Faculty of Marine and Fisheries" },
    { _id: "11", name: "Faculty of Architecture" },
    { _id: "12", name: "Faculty of Environmental Science" },
    { _id: "13", name: "Faculty of Tourism and Hospitality" },
    { _id: "14", name: "Faculty of Journalism and Media" },
    { _id: "15", name: "Faculty of Computer Science and IT" }
];


export const academicDepartmentsConstant: TAcademicDepartment[] = [
    { name: 'Science', academicFaculty: faculties[0] },
    { name: 'Business Studies', academicFaculty: faculties[1] },
    { name: 'Humanities (Arts)', academicFaculty: faculties[2] },
    { name: 'Engineering', academicFaculty: faculties[3] },
    { name: 'Medical', academicFaculty: faculties[4] },
    { name: 'Law', academicFaculty: faculties[5] },
    { name: 'Agriculture', academicFaculty: faculties[6] },
    { name: 'Fine Arts', academicFaculty: faculties[7] },
    { name: 'Islamic Studies', academicFaculty: faculties[8] },
    { name: 'Marine and Fisheries', academicFaculty: faculties[9] },
    { name: 'Architecture', academicFaculty: faculties[10] },
    { name: 'Environmental Science', academicFaculty: faculties[11] },
    { name: 'Tourism and Hospitality', academicFaculty: faculties[12] },
    { name: 'Journalism and Media', academicFaculty: faculties[13] },
    { name: 'Computer Science and IT', academicFaculty: faculties[14] }
];
