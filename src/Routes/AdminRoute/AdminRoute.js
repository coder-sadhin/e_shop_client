import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const { isAdmin, isAdminLoading } = useAdmin(user?.email)

    const location = useLocation()

    if (loading || isAdminLoading) {
        return <div className='flex justify-center mt-32'>
            <Loading></Loading>
        </div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;