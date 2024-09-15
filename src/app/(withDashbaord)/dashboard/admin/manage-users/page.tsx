"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Optional for alerts
import LoadingPage from '@/app/loading';
import useAxiosSecure from '@/app/components/axios/axiosSecure';
import { TUser } from '@/app/types/user.type';
import { toast } from 'sonner';

const ManageUsers = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure=useAxiosSecure();

    useEffect(() => {
        // Fetch all users from the backend
        const fetchUsers = async () => {
            try {
                const response = await axiosSecure.get('/allusers');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [axiosSecure]);

    const handlePromote = async (userId:string, role:string) => {
        try {
            const response = await axiosSecure.patch(
                `/admin/users/role/${userId}`,
                { role }
            );
            Swal.fire({
                icon: 'success',
                title: `User role updated to ${role} successfully`,
                showConfirmButton: false,
                timer: 1500
            });
            // Fetch the updated users list
            setUsers(prev =>
                prev.map((user:TUser) => user._id === userId ? { ...user, role } : user)
            );
        } catch (error) {
            console.error('Error updating role:', error);
            Swal.fire('Error', 'Failed to update user role', 'error');
        }
    };

    const handleDelete = async (userId:string) => {
        try {
            const response = await axios.delete(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            Swal.fire({
                icon: 'success',
                title: 'User deleted successfully',
                showConfirmButton: false,
                timer: 1500
            });
            // Remove the user from the list
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
           toast.info("Only Superadmin can delete this")
        }
    };

    if (loading) {
        return <LoadingPage/>;
    }

    return (
        <div className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Manage Users</h3>
        
        {/* Make table scrollable on smaller screens */}
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-2 sm:px-4 py-2 border">S.No</th>
                        <th className="px-2 sm:px-4 py-2 border">Name</th>
                        <th className="px-2 sm:px-4 py-2 border">Email</th>
                        <th className="px-2 sm:px-4 py-2 border">Role</th>
                        <th className="px-2 sm:px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td className="px-2 sm:px-4 py-2 border text-sm">{index + 1}</td>
                            <td className="px-2 sm:px-4 py-2 border text-sm">{user.name}</td>
                            <td className="px-2 sm:px-4 py-2 border text-sm">{user.email}</td>
                            <td className="px-2 sm:px-4 py-2 border text-sm">{user.role}</td>
                            <td className="px-2 sm:px-4 py-2 border">
                                {/* Buttons with responsive width */}
                                <button
                                    className="bg-green-500 text-white px-2 sm:px-4 py-1 rounded w-full sm:w-auto block sm:inline mb-2 sm:mb-0 sm:mr-2"
                                    onClick={() => handlePromote(user._id, 'instructor')}
                                >
                                    Promote to Instructor
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-2 sm:px-4 py-1 rounded w-full sm:w-auto block sm:inline mb-2 sm:mb-0 sm:mr-2"
                                    onClick={() => handlePromote(user._id, 'admin')}
                                >
                                    Promote to Admin
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 sm:px-4 py-1 rounded w-full sm:w-auto block sm:inline mt-1"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete User
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    );
};

export default ManageUsers;
