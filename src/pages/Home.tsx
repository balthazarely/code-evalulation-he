import React, { useState } from 'react';
import { Layout } from '../components/layout';
import SearchInput from '../components/searchInput';
import { ApiResults } from '../models/models';
import styled from 'styled-components';
import LanguageSelector from '../components/languageSelector';
import ResultsGrid from '../components/cardGrid';

export const Home = () => {
  const [query, setQuery] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ApiResults[]>([]);
  const [totalCount, setTotalCount] = useState<number>();

  const handleSearchQuery = (e: string) => {
    setResults([]);
    setQuery(e.toLowerCase());
  };

  const handleLanguageQuery = (e: string) => {
    setResults([]);
    setLanguage(e.toLowerCase());
  };

  const searchAllRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc`
      );
      const searchResults = await response.json();
      setResults([...results, ...searchResults.items]);
      setTotalCount(searchResults.total_count);
      setLoading(false);
      console.log(searchResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <>
        <InputWrapper>
          <SearchInput handleSearchQuery={handleSearchQuery} />
          <LanguageSelector handleLanguageQuery={handleLanguageQuery} />
          <SearchBtn onClick={searchAllRepos}>Search</SearchBtn>
        </InputWrapper>

        <ResultsGrid totalCount={totalCount} results={results} />
        {results.length > 0 && (
          <LoadMoreBtnWrapper>
            <SearchBtn
              onClick={() => {
                searchAllRepos();
              }}
            >
              {loading ? 'Loading...' : 'Load More'}
            </SearchBtn>
          </LoadMoreBtnWrapper>
        )}
      </>
    </Layout>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const SearchBtn = styled.button`
  border-radius: 5px;
  height: 40px;
  padding: 2px 25px 2px 25px;
  outline: 0;
  background-color: #0fbbf0;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;
  border: none;
  transition: all 100ms;
  &:hover {
    background-color: #07a4d4;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const LoadMoreBtnWrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
