import React from 'react';
import { Props } from '../models/models';
import { LayoutWrapper } from '../styles/AppStyles';

export const Layout = ({ children }: Props) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
