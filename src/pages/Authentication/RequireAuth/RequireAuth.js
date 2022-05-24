import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebse.init';
import Loading from '../../../components/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    console.log(user);

    if(loading) {
        return <Loading/>
    }


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }


    return children;
};

export default RequireAuth;