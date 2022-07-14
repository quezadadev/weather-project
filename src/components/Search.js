import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content:center;
  position: relative;
  width: 500px;
  height:64px;
  margin: 0 auto;
`

const StyledInput = styled.input`
  border: 3px solid lightgrey;
  height: 20px;
  width: 450px;
  text-align: center;
  border-radius: 70px;
  padding-left:15px;
  margin-bottom: 5px;
  padding: 1rem;
`

const Search = ({newSearch, handleSearch}) => {
   
  return (
   <StyledContainer>
    <StyledInput
      placeholder="Get the Weather Bytes"
      value={newSearch}
      onChange={handleSearch} 
    />
   </StyledContainer>
  )
}

export default Search;