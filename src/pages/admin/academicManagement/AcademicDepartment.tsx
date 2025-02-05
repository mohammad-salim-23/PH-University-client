import { Button, Input, InputRef, Space, Table, TableColumnsType, TableColumnType, TableProps } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicDepartment, TQueryParam } from "../../../types";
import { useRef, useState } from "react";
import { TTableData } from "./AcademicSemester";
import { SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps } from "antd/es/table/interface";
type DataIndex = keyof TAcademicDepartment;
const AcademicDepartment = ()=>{
    const [params, setParams] = useState<TQueryParam[] | undefined>(undefined)
    const {data: departmentData, isFetching} = useGetAllAcademicDepartmentQuery(params);
    console.log(departmentData);
    const facultyTableData = departmentData?.data?.map((department:TAcademicDepartment)=>({key: department._id, name:department.name,facultyName: department.academicFaculty?.name}));
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
          selectedKeys: string[],
          confirm: FilterDropdownProps['confirm'],
          dataIndex: DataIndex,
    ) => {
          confirm();
          setSearchText(selectedKeys[0]);
          setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
          clearFilters();
          setSearchText('');
    };
    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<TAcademicDepartment> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
              <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                    <Input
                          ref={searchInput}
                          placeholder={`Search ${dataIndex}`}
                          value={selectedKeys[0]}
                          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                          style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                          <Button
                                type="primary"
                                onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                                icon={<SearchOutlined/>}
                                size="small"
                                style={{ width: 90 }}
                          >
                                Search
                          </Button>
                          <Button
                                onClick={() => clearFilters && handleReset(clearFilters)}
                                size="small"
                                style={{ width: 90 }}
                          >
                                Reset
                          </Button>
                          <Button
                                type="link"
                                size="small"
                                onClick={() => {
                                      close();
                                }}
                          >
                                close
                          </Button>
                    </Space>
              </div>
        ),

        render: (text) =>
              searchedColumn === dataIndex ? (
                    <Highlighter
                          highlightStyle={{ backgroundColor: '#ffc069', padding: 2, borderRadius: "2px", fontSize: 20 }}
                          searchWords={[searchText]}
                          autoEscape
                          textToHighlight={text ? text.toString() : ''}
                    />
              ) : (
                    text
              ),
  });

   const columns : TableColumnsType<TAcademicDepartment>=[
     {
        title:'Department Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...getColumnSearchProps('name'),
     },
     {
        title: 'Faculty Name',
        dataIndex:'academicFaculty',
        key: 'academicFaculty',
        width: '20%',
        ...getColumnSearchProps('academicFaculty'),
     },
     {
        title:'Actions',
        key:'1',
        render :() =>{
            return (
              <div>
                  <Button>Update</Button>
              </div>
            )
           }
     }
   ]
   const onChange : TableProps<TTableData>['onChange']=
   (
    _pagination,
    filters,
    _sorter,
    extra
   )=>{
     if(extra.action === 'filter'){
        const queryParams : TQueryParam[] = [];
        filters.name?.forEach(item=>
            queryParams.push({name:"name", value:item})
        );
        filters.facultyName?.forEach(item=>
            queryParams.push({name:"academicFaculty", value:item})
        );

     }
   }
    return (
        <Table
        loading={isFetching}
        columns = {columns}
        onChange={onChange}
        showSorterTooltip= {{target: 'sorter-icon'}}
        />
    )
}
export default AcademicDepartment ;