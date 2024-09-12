'use client'
import { useAuth } from '../../../lib/AuthProvider';
import React from 'react';

const DashboardPage = () => {
  const {user}= useAuth();
  return (
    <div className='flex flex-col justify-center items-center '>
      
      <h3 className='text-2xl text-black font-bold'>Welcome Back, <span className='text-primary'> {user?.name}</span> </h3>
    </div>
  );
};

export default DashboardPage;