import React from 'react';
import { LoaderWrapper, Spinner } from '../styles/AppStyles';

const LoadingIndicator = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default LoadingIndicator;
