import * as React from 'react';
import CustomerList from './CustomerList';
import { Outlet } from 'react-router-dom';

const Customer = () => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <CustomerList />
        </div>
        <div className='col'>
          {/* Outlet can be used to drill-down information to the child routes */}
          <Outlet
            context={{
              user: 'roger',
              roles: ['admin', 'manager'],
              department: 'system',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Customer;
