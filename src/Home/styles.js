import styled from "styled-components";

import backgroundImg from "../assets/read_news.jpg";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  max-width: 72rem;
  margin: 0 auto;

  padding: 5rem 3rem;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;

  > svg {
    min-width: 50%;
    width: 60%;
    height: 100%;
  }
`;

export const Description = styled.div`
  margin-top: clamp(5rem, 10vw, 9rem);

  display: flex;
  flex-direction: column;
  gap: .9rem;

  > h1 {
    color: ${({theme}) => theme.COLORS.GREEN};

    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  > h2 {
    color: #FFFFFF;
    
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  > p {
    font-weight: 400;
    line-height: 1.9rem;

  }
`;

export const Form = styled.div`
  margin: 5rem 0;

  > h2 {
    color: ${({theme}) => theme.COLORS.GRAY};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 138.73%;

  }

  > div {
    margin-top: 1.7rem; 
  }
  
`;

export const ButtonText = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  
  color: ${({theme}) => theme.COLORS.PURPLE};
  font-weight: 700;
  line-height: 138.73%;
  
  >svg {
  width: 24px;
  height: 24px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;