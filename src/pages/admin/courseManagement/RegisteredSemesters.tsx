
import { TQueryParam, TSemester } from "../../../types";

import { Button, Dropdown, MenuProps, message, Table, TableColumnsType, Tag } from "antd";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";
import moment from "moment";


export type TTableData = Pick<
  TSemester,
   'startDate' | 'endDate' | 'status'
>;
const handleStatusDropdown = (data: any)=>{   
  console.log('click', data);
}
const items  = [
    {
        label : 'UPCOMING',
        key: 'UPCOMING'
    },
    {
        label: 'ONGOING',
        key: 'ONGOING'
    },
    {
        label: 'ENDED',
        key : 'ENDED'
    }
]
const RegisteredSemester = () => {
//   const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  

 const {data : semesterData,
    isLoading,
    isFetching
 }  = useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name:`${ academicSemester?.name} ${ academicSemester?.year}`,
      startDate: moment(new Date(startDate)).format('MMMM'), 
      endDate : moment(new Date(endDate)).format('MMMM'), 
      status
    })
  );
 
  const menuProps = {
    items,
    onClick : handleStatusDropdown
  }
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
     
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (item)=>{
        let color;
        if(item=== 'UPCOMING'){
            color = 'blue'
        }
        if(item=== 'ONGOING'){
            color = 'green'
        }
        if(item=== 'ENDED'){
            color = 'red'
        }

        return <Tag color = {color}>{item}</Tag>
      }
    },
    {
      title: 'Start Date',
      key: 'startDate',
      dataIndex: 'startDate',
    },
    {
      title: 'End Date',
      key: 'endDate',
      dataIndex: 'endDate',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <Dropdown menu={menuProps}>
        <Button>Update</Button>
          </Dropdown>
           
         
        );
      },
    },
  ];

//   const onChange: TableProps<TTableData>['onChange'] = (
//     _pagination,
//     filters,
//     _sorter,
//     extra
//   ) => {
//     if (extra.action === 'filter') {
//       const queryParams: TQueryParam[] = [];

//       setParams(queryParams);
//     }
//   };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    //   onChange={onChange}
    />
  );
};

export default RegisteredSemester;