import * as React from 'react';

import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const News = React.lazy(() => import('./components/News'));
const Contact = React.lazy(() => import('./components/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const CustomerRoutes = React.lazy(() => import('./components/CustomerRoutes'));

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
        <React.Suspense fallback={<h3>Loading...</h3>}>
          {appRoutes}
        </React.Suspense>
      </div>
    </>
  );
};

export default App;
