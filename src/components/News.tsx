import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface NewsProps {}

const News = (props: NewsProps) => {
  const { topic } = useParams();
  const { state } = useLocation();

  return (
    <>
      <h4>News Component</h4>
      <p>Topic: {topic}</p>
      <p>State from link: </p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default News;
