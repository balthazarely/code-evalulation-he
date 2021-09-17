import React from 'react';
import styled from 'styled-components';

interface SelectInputProps {
  handleLanguageQuery: (query: string) => void;
}

function LanguageSelector({ handleLanguageQuery }: SelectInputProps) {
  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    handleLanguageQuery(e.currentTarget.value);
  };
  return (
    <div>
      <Select name="languages" onChange={onChange}>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="Objective-C">Objective-C</option>
        <option value="C">C</option>
        <option value="Java">Java</option>
        <option value="ASP">ASP</option>
      </Select>
    </div>
  );
}

export default LanguageSelector;

const Select = styled.select`
  margin-left: 10px;
  width: 150px;
  height: 40px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 5px;

  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
