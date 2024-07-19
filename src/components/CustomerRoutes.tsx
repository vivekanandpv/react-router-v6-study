import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customer from './Customer';
import CustomerProfile from './CustomerProfile';
import CustomerTransactions from './CustomerTransactions';

const CustomerRoutes = () => {
  return (
    <>
      {/* Route should be within Routes */}
      <Routes>
        <Route path='' element={<Customer />}>
          <Route path=':id/profile' element={<CustomerProfile />} />
          <Route path=':id/transactions' element={<CustomerTransactions />} />
        </Route>
      </Routes>
    </>
  );
};

export default CustomerRoutes;
