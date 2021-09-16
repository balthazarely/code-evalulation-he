import React from 'react';
import { Props } from '../models/models';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  border: 2px solid red;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const Layout = ({ children }: Props) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
