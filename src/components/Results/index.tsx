import React from 'react';
import { SearchItemType } from 'renderer/types';
import { ResultsList, ResultsListItem } from './Results.styles';

type ResultsProps = {
  results: SearchItemType;
};

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <ResultsList id="results">
      {results?.map((item) => (
        <ResultsListItem key={item.name}>
          <a href={item.url}>{item.name}</a>
        </ResultsListItem>
      ))}
    </ResultsList>
  );
};

export default Results;
