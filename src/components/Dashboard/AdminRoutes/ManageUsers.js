import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Loading';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fast-reef-28359.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(response => response.json()));

    if (isLoading) {
        return <Loading />
    };

    const makeAdmin = (email) => {
        fetch(`https://fast-reef-28359.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                if (response.status === 403) {
                    toast.error('Filed to make an Admin')
                }
                return response.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Admin permitted ${email}`)
                }
            })
    };

    return (
        <div className='lg:max-w-4xl mx-auto my-10'>
            <h1 className='text-2xl font-bold  my-5'><span className='text-3xl text-warning bg-black px-2'>Manage</span> Users</h1>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>User Id</th>
                            <th>Manage Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(({ email, _id, role }, index) =>
                                <tr key={index}>
                                    <td>
                                        <div class="btn font-bold bg-black text-warning rounded-xl">
                                            {
                                                role === "admin" &&
                                                <div class="font-bold">{role}</div>
                                            }
                                            {
                                                role !== "admin" &&
                                                <div class="font-bold">User</div>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{email}</div>
                                    </td>
                                    <td>
                                        <div class="font-bold">{_id}</div>

                                    </td>
                                    <th>
                                        <button class="btn btn-ghost bg-black text-warning btn-xs">Remove User</button>
                                        <br />
                                        {
                                            role !== "admin" &&
                                            <button onClick={() => makeAdmin(email)} class="btn btn-ghost bg-black text-warning btn-xs">Make Admin</button>
                                        }
                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;