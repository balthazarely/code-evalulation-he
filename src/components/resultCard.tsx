import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../styles/AppStyles';

export const ResultCard = ({ result }: any) => {
  return (
    <Card>
      <Link key={result.id} to={`/repo/${result.owner.login}/${result.name}`}>
        <div>{result.name}</div>
      </Link>
    </Card>
  );
};
