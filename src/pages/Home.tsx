import React, { useEffect, useState } from 'react';
import { Layout } from '../components/layout';
import { ResultCard } from '../components/resultCard';
import { ApiResults } from '../models/models';
import { CardGrid } from '../styles/AppStyles';

export const Home = () => {
  const [query, setQuery] = useState<string>('tetris');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ApiResults[]>([]);

  useEffect(() => {
    const searchAllRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc`
        );
        const searchResults = await response.json();
        setResults(searchResults.items);
        setLoading(false);
        console.log(searchResults);
      } catch (error) {
        console.log(error);
      }
    };
    searchAllRepos();
  }, []);

  return (
    <Layout>
      <>
        {loading && <h1>Loading</h1>}
        <CardGrid>
          {results.map((result: ApiResults) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </CardGrid>
      </>
    </Layout>
  );
};
