import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectCurrentUser, TUser, useCurrenttoken } from '../../redux/features/auth/authSlice';
type TProtectedRoute = {
    children: ReactNode,
    role : string | undefined
}
import { Navigate } from 'react-router-dom';
import { verifyToken } from '../../utils/verifyToken';
const ProtectedRoute = ({children, role}:TProtectedRoute )=>{
    const token = useAppSelector(useCurrenttoken);
    
    let user;

    if(token){
        user = verifyToken(token);
    }

    const dispatch = useAppDispatch();
    console.log(user);
    if(!user){
        <p>Loading...</p>
    }
    console.log(role);
    if(role !== undefined && role !== (user as TUser)?.role){
        dispatch(logout());
        return <Navigate to="/login" replace={true}/>
    }
    if(!token){
        return <Navigate to="/login" replace={true}/>
    }
    return children;
}
export default ProtectedRoute;