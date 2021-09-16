import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 10px;
`;

export const Card = styled.div`
  border: 2px solid red;
  height: 150px;
`;
