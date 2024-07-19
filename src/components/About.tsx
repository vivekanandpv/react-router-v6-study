import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

interface AboutProps {}

const About = (props: AboutProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h4>About Component</h4>
      <p>Query Params: lang={searchParams.get('lang')}</p>
      <button
        className='btn btn-primary'
        onClick={() => setSearchParams({ lang: 'de' })}
      >
        Set Search Param lang=de
      </button>
      <button
        className='btn btn-primary ms-3'
        onClick={() => setSearchParams({ lang: 'en' })}
      >
        Set Search Param lang=en
      </button>
    </>
  );
};

export default About;
