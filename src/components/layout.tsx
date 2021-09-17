import React from 'react';
import { Props } from '../models/models';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 100px auto;
  text-align: center;
`;

export const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <h1>GitHub Search</h1>
      {children}
    </LayoutWrapper>
  );
};
