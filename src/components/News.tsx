import * as React from 'react';
import { useParams } from 'react-router-dom';

interface NewsProps {}

const News = (props: NewsProps) => {
  const { topic } = useParams();

  return (
    <>
      <h4>News Component</h4>
      <p>Topic: {topic}</p>
    </>
  );
};

export default News;
