import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({theme}) => theme.COLORS.GRAY};

  margin-bottom: 1rem; 

  > button {
   border: none;
   padding: 1.4rem;
   background: ${({ theme }) => theme.COLORS.PURPLE};
   color: ${({ theme }) => theme.COLORS.WHITE};
   display: flex;

  > svg {
    width: 2.0rem;
    height: 2.0rem;
   }
   
  }
 
  > input {
   height: 4.8rem;
   width: 100%;
   
   padding: 0 1rem;

   color: ${({ theme }) => theme.COLORS.BLACK};
   background: none;

   border: none;
   
   border-left: .5rem solid;
   border-left-color: ${({ theme }) => theme.COLORS.GREEN};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-size: 1.4rem;
      
    }

`;