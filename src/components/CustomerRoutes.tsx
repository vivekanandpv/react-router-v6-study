import * as React from 'react';
import { useRoutes } from 'react-router-dom';

const Customer = React.lazy(() => import('./Customer'));
const CustomerProfile = React.lazy(() => import('./CustomerProfile'));
const CustomerTransactions = React.lazy(() => import('./CustomerTransactions'));

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
