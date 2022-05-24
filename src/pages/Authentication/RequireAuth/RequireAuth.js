import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../../../firebse.init';

const RequireAuth = () => {

    const [user] = useAuthState(auth);

    if(!user) {
        <Navigate to="/signup" />
    }


    return <Outlet/>
};

export default RequireAuth;