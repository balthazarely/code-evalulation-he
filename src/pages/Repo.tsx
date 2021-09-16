import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout';
import { ApiResults, ParamsInterface } from '../models/models';

export const Repo = () => {
  const params = useParams<ParamsInterface>();
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
      <>{result ? result.name : 'loading'}</>
    </Layout>
  );
};
