import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { TResponse } from "../types";
import {useNavigate } from "react-router-dom";


const ChangePassword = () =>{

    const [changePassword] = useChangePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit : SubmitHandler<FieldValues> =async (data)=>{
        console.log(data);
      const res = ( await  changePassword(data)) as TResponse<any>;
      if(res?.data?.success){
        dispatch(logout());
       navigate('/login');
      }
     
    }
    return (
        <div>
<Row  justify="center" align="middle" style={{height: "100vh"}}>
      <PHForm onSubmit={onSubmit} >
      <div>
        <PHInput type="text" name="oldPassword" label="Old Password" />
      </div>
      <div>
        <PHInput type="text" name="newPassword" label=" New Password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  </Row>
        </div>
    )
}
export default ChangePassword;