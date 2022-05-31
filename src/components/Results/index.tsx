import React from 'react';
import { ResultsList, ResultsListItem } from './Results.styles';

type ResultsProps = {
  className?: string;
  results: Array<{ name: string }>;
};

const Results: React.FC<ResultsProps> = ({ results, className }) => {
  return (
    <ResultsList id="results" className={className}>
      {results?.map((item) => (
        <ResultsListItem key={item.name}>{item.name}</ResultsListItem>
      ))}
    </ResultsList>
  );
};

export default Results;
