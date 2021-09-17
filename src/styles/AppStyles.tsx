import styled, { keyframes } from 'styled-components';

export const LayoutWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const CardGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  padding: 10px;
`;

export const Card = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  background-color: #161c22;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
  transition: all 200ms;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 20px rgba(76, 225, 245, 0.35);
  }
  .header {
    color: white;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .subheader {
    color: #dadada;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    .small {
      font-weight: 200;
    }
  }
  .language {
    color: #dadada;
    font-size: 12px;
    font-weight: 200;
  }
`;

export const LoaderWrapper = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
