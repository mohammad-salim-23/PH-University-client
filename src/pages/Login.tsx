/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import Password from "antd/es/input/Password";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0002",
  //     password: "admin123",
  //   },
  // });
  // const defaultValues = {
  //   userId : 'A-0002',
  //   password:'admin123'
  // }
  const defaultValues = {
    userId : '2025030001',
    password:'student123'
  }
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');
    try{
      const userInfo = {
        id : data.userId,
        password: data.password
       };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken}));
      toast.success('Logged in', {id: toastId , duration: 2000})
      navigate(`/${user.role}/dashboard`)
    } catch(err){
      toast.error('Something went wrong', {id:toastId , duration: 2000})
    }
  };
  return (
  <Row  justify="center" align="middle" style={{height: "100vh"}}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <div>
        <PHInput type="text" name="userId" label="ID:" />
      </div>
      <div>
        <PHInput type="text" name="password" label="password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  </Row>
  );
};
export default Login;
