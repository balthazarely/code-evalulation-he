import React from 'react';
import styled from 'styled-components';
import { ApiResults, GridProps } from '../models/models';
import { ResultCard } from './resultCard';

function ResultsGrid({ totalCount, results }: GridProps) {
  return (
    <CardGrid>
      {totalCount === 0 ? (
        <h1>Hmmmm.... there are no results for your search</h1>
      ) : (
        <>
          {results.map((result: ApiResults, i: number) => (
            <ResultCard key={i} result={result} />
          ))}
        </>
      )}
    </CardGrid>
  );
}

export default ResultsGrid;

const CardGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  padding: 10px;
`;
