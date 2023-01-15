import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <h3>
            AWESOME <br />
            FOOD STORE
          </h3>
        </LogoContainer>
        <ButtonContainer>
          <Link href="/" style={{ textDecoration: "none" }}>
            <ButtonWrapper>HOME</ButtonWrapper>
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <ButtonWrapper>ABOUT</ButtonWrapper>
          </Link>
          <Link href="/store" style={{ textDecoration: "none" }}>
            <ButtonWrapper>STORE</ButtonWrapper>
          </Link>
        </ButtonContainer>
      </Header>
      <Body>{children}</Body>
      <Footer>@ 2023 Sara Jo</Footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: purple;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: bold;
`;

const Body = styled.body`
  height: 100%;
`;

const LogoContainer = styled.div`
  width: 15%;
  margin-right: 2rem;
  color: #cc96f7;
`;

const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonWrapper = styled.div`
  margin: 0 1rem;
  color: white;
  font-size: 1.1rem;
`;

const Footer = styled.footer`
  background-color: #cc96f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
  margin-top: 2rem;
  padding: 0.5rem 0;
`;
