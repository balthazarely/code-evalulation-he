import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../styles/AppStyles';

export const ResultCard = ({ result }: any) => {
  return (
    <Link key={result.id} to={`/repo/${result.owner.login}/${result.name}`}>
      <Card>
        <div className="header">{result.name}</div>
        <div className="subheader">
          <span className="small">author:</span> {result.owner.login}
        </div>
        <div className="language"> {result.language}</div>
      </Card>
    </Link>
  );
};
