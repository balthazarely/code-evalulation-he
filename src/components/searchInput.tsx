import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  handleSearchQuery: (query: string) => void;
}

const SearchInput = ({ handleSearchQuery }: SearchInputProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleSearchQuery(e.currentTarget.value);
  };
  return (
    <Input
      className="search"
      placeholder="Search"
      type="text"
      onChange={onChange}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  border-radius: 5px;
  height: 40px;
  padding: 2px 10px 2px 10px;
  outline: 0;
  width: 100%;
  max-width: 400px;
  background-color: #f5f5f5;
`;
