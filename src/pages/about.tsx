import Layout from "@/layout/layout";
import { ReactElement } from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <TitleContainer>
        <h1>ABOUT</h1>
      </TitleContainer>
      <div>프로젝트 소개 페이지</div>
    </Container>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div`
  padding: 0 2rem;
`;

const TitleContainer = styled.div`
  color: purple;
`;
