import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.replace("/");
    }, 5000);
  });

  return (
    <Container>
      <h3>AWESOME FOOD STORE</h3>
      <p>
        유효하지 않은 페이지입니다.
        <br />
        5초 후 메인페이지로 이동합니다.
      </p>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: purple;
  h3 {
    font-size: 1.5rem;
    color: #cc96f7;
  }
  p {
    font-size: 1.2rem;
    color: white;
    line-height: 2;
    font-weight: bold;
  }
`;
