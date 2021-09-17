import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/layout';
import { ApiResults, RepoParamsInterface } from '../models/models';
import styled from 'styled-components';

export const Repo = () => {
  const params = useParams<RepoParamsInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ApiResults>();

  useEffect(() => {
    const searchSingleRepo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/repos/${params.author}/${params.name}`
        );
        const searchResults = await response.json();
        setResult(searchResults);
        setLoading(false);
        console.log(searchResults);
      } catch (error) {
        console.log(error);
      }
    };
    searchSingleRepo();
  }, []);

  return (
    <Layout>
      <>
        <Link style={{ textDecoration: 'none' }} to={'/'}>
          <BackBtn>Back</BackBtn>
        </Link>
        {result && (
          <ResultCard>
            <div className="header">{result.name}</div>
            <div className="subheader">author: {result.owner.login}</div>
            <MetaData>
              <div className="language">{result.language}</div>
              <div className="language">forks: {result.forks}</div>
              <div className="language">
                subscribers: {result.subscribers_count}
              </div>
              <div className="language">
                stargazers: {result.stargazers_count}
              </div>
            </MetaData>
            <div>
              <a target="BLANK" href={result.html_url}>
                <LinkBtn>Visit Repo</LinkBtn>
              </a>
            </div>
          </ResultCard>
        )}
      </>
    </Layout>
  );
};

const ResultCard = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: #161c22;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);

  .header {
    color: white;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .subheader {
    color: #dadada;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    .small {
      font-weight: 200;
    }
  }
  .language {
    color: #dadada;
    font-size: 16px;
    font-weight: 200;
  }
`;

const MetaData = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  div {
    margin: 7px 20px;
  }
`;

const LinkBtn = styled.button`
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  outline: 0;
  background-color: #0fbbf0;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;
  border: none;
  transition: all 100ms;
  color: white;
  font-size: 12px;
  margin-top: 15px;
  &:hover {
    background-color: #07a4d4;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const BackBtn = styled.div`
  width: 40px;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;
  color: #13bdf1;
  &:hover {
    color: #07a4d4;
  }
`;
