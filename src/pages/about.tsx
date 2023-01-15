import Layout from "@/layout/layout";
import { ReactElement } from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <TitleContainer>
        <h1>ABOUT</h1>
      </TitleContainer>
      <ContentContainer>프로젝트 소개 페이지</ContentContainer>
    </Container>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div``;

const TitleContainer = styled.div`
  color: purple;
  padding: 1rem 3rem;
`;

const ContentContainer = styled.div`
  padding: 1rem 3rem;
`;
