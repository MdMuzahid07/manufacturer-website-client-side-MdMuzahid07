import React from 'react';
import { toast } from 'react-toastify';

const ErrorPage = () => {
    toast.warning("Page Not Found!");
    return (
        <div className='max-w-5xl mx-auto'>
            <img src="https://i.ibb.co/yhCmD8j/404-page-not-found.gif" alt="" />
        </div>
    );
};

export default ErrorPage;