import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h3>맛집 정보를 한 번에,</h3>
      <h1>AWESOME FOOD STORE</h1>
      <ButtonContainer>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <ButtonWrapper>ABOUT</ButtonWrapper>
        </Link>
        <Link href="/store" style={{ textDecoration: "none" }}>
          <ButtonWrapper>STORE</ButtonWrapper>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: purple;
  opacity: 0.8;
  background-image: linear-gradient(#a841fc 0.5px, transparent 0.5px),
    linear-gradient(to right, #a841fc 0.5px, purple 0.5px);
  background-size: 10px 10px;

  h3 {
    font-weight: bold;
    margin-bottom: 0;
    color: white;
  }
  h1 {
    font-size: 3rem;
    color: white;
    margin-top: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const ButtonWrapper = styled.div`
  background-color: white;
  color: purple;
  padding: 0.8rem 1.5rem;
  border: 3px solid purple;
  margin: 0 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: purple;
    border: 3px solid white;
    color: white;
  }
`;
