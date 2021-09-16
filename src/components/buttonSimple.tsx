import React from 'react';
import styled from 'styled-components';

type AppProps = {
  text: string;
};

const SimpleButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ButtonSimple: React.FunctionComponent<AppProps> = ({ text }) => {
  return (
    <div>
      <SimpleButton>{text}</SimpleButton>
    </div>
  );
};
