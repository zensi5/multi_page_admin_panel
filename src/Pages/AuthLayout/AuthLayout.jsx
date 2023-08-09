import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../../Components/background/Background';

const AuthLayout = () => {
  return (
    <div className='AuthWrapper'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 leftBackground">
            <Background />
          </div>
          <div className="col-8 col-lg-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AuthLayout;
