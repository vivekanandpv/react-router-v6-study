import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigator = useNavigate();

  const toTechNews = () => {
    navigator('/news/tech', {
      state: {
        message: 'message passed by programmatic navigation from Home',
      },
    });
  };

  return (
    <>
      <h4>Home Component</h4>
      <button className='btn btn-primary' onClick={toTechNews}>
        To Tech News
      </button>
    </>
  );
};

export default Home;
