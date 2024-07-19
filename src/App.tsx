import * as React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import CustomerProfile from './components/CustomerProfile';
import CustomerTransactions from './components/CustomerTransactions';
import Customer from './components/Customer';
import CustomerRoutes from './components/CustomerRoutes';

const App = () => {
  const appRoutes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/news/:topic',
      element: <News />,
    },
    {
      path: '/customers/*',
      element: <CustomerRoutes />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <div className='p-5'>
        <h2>React Router v6 Study</h2>
        <hr />
        <Navbar />
        <hr />
        {appRoutes}
      </div>
    </>
  );
};

export default App;
