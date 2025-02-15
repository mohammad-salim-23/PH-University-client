
import { Button, Table } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";

const Courses = () => {
//   const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: courses,
 
    isFetching,
  } = useGetAllCoursesQuery(undefined);

;

  const tableData = courses?.data?.map(
    ({ _id, title, prefix, code }) => ({
      key: _id,
     title,
     code: `${prefix}${code}`
    })
  );

  const columns = [
    {
      title: 'Title',
      key: 'title',
      dataIndex: 'title',
  
    },
    {
      title: 'Code',
      key: 'code',
      dataIndex: 'code',
   
    },
   
   
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Assign Faculty</Button>
          </div>
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

//       filters.name?.forEach((item) =>
//         queryParams.push({ name: 'name', value: item })
//       );

//       filters.year?.forEach((item) =>
//         queryParams.push({ name: 'year', value: item })
//       );

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

export default Courses;