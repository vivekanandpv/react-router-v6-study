import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className='p-5'>
        <h2>React Router v6 Study</h2>
        <hr />
        <Navbar />
        <hr />
        <Routes>
          {/* element could be any JSX */}
          {/* all routes are exact routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          {/* catch-all route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
