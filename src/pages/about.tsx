import Layout from "@/components/layout/layout";
import { ReactElement } from "react";
import styled from "styled-components";
import LensIcon from "@material-ui/icons/Lens";
import LensOutlinedIcon from "@material-ui/icons/LensOutlined";

export default function About() {
  return (
    <Container>
      <TitleContainer>
        <h1>ABOUT</h1>
      </TitleContainer>
      <ContentContainer>
        <h3>기술 스택</h3>
        <ContentWrapper>
          <LensIcon />
          <p>Next.js (Typescript)</p>
        </ContentWrapper>
        <ContentWrapper>
          <LensIcon />
          <p>json-server</p>
        </ContentWrapper>
        <ContentWrapper>
          <LensIcon />
          <p>
            Axios: 객체 데이터를 더 쉽게 핸들링하고 더 많은 브라우저를 지원할 수
            있도록 도입하였습니다.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <LensIcon />
          <p>
            Styled-components: 구조화된 CSS 커스텀 컴포넌트를 위해
            도입하였습니다.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <LensIcon />
          <p>MaterialUI</p>
        </ContentWrapper>
        <br />
        <h3>기능 설명</h3>
        <ContentWrapper>
          <LensIcon />
          <p>Layout</p>
        </ContentWrapper>
        <ContentWrapper>
          <p className="sub-content">
            - Next.js의 getLayout을 사용하여 페이지마다 Header - Body - Footer
            형식으로 레이아웃을 적용해주었습니다.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <LensIcon />
          <p>Store Page</p>
        </ContentWrapper>
        <ContentWrapper>
          <p className="sub-content">
            - axios로 데이터를 가져온 후 Grid 형식으로 각 아이템을 Mapping해
            주었습니다.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <p className="sub-content">
            - ReactDOM의 createPortal을 사용하여 맛집 아이템 선택 시 모달 창이
            띄워지도록 했습니다.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <p className="sub-content">
            - 모달 창의 X버튼을 누르면 모달이 닫히도록 이벤트를 prop으로 함께
            넘겨주었습니다.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <LensIcon />
          <p>404 Handling</p>
        </ContentWrapper>
        <ContentWrapper>
          <p className="sub-content">
            - 정의하지 않은 URL 접근 시, 에러 페이지를 보여주고 setTimeout으로
            5초 후에 메인 페이지로 redirect 되도록 처리했습니다.
          </p>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div``;

const TitleContainer = styled.div`
  color: purple;
  padding: 1rem 3rem 0 3rem;
`;

const ContentContainer = styled.div`
  padding: 0 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  svg {
    font-size: 0.5rem;
    margin-right: 0.5rem;
  }
  p {
    /* text-overflow: ellipsis; */
    /* overflow: hidden; */
    /* display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical; */
  }
  .sub-content {
    margin-left: 1.5rem;
    /* -webkit-line-clamp: 2;
    word-wrap: break-word; */
  }
`;
