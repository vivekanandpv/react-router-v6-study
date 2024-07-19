import * as React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Customer from './Customer';
import CustomerProfile from './CustomerProfile';
import CustomerTransactions from './CustomerTransactions';

const CustomerRoutes = () => {
  const customerRoutes = useRoutes([
    {
      path: '',
      element: <Customer />,
      children: [
        {
          path: ':id/profile',
          element: <CustomerProfile />,
        },
        {
          path: ':id/transactions',
          element: <CustomerTransactions />,
        },
      ],
    },
  ]);

  return customerRoutes;
};

export default CustomerRoutes;
