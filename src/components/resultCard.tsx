import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ResultCard = ({ result }: any) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      key={result.id}
      to={`/repo/${result.owner.login}/${result.name}`}
    >
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

export const Card = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  background-color: #161c22;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
  transition: all 200ms;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 20px rgba(76, 225, 245, 0.35);
  }
  .header {
    color: white;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: left;
  }
  .subheader {
    color: #dadada;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    .small {
      font-weight: 200;
    }
  }
  .language {
    color: #dadada;
    font-size: 12px;
    font-weight: 200;
  }
`;
