## 기술 스택

- Next.js (Typescript)
- Json-Server
- Axios: 객체 데이터를 더 쉽게 핸들링하고 더 많은 브라우저를 지원할 수 있도록 도입했습니다.
- Styled-components: 구조화된 CSS 커스텀 컴포넌트를 위해 도입하였습니다.
- MaterialUI

<br />

## 기능 설명

- Layout
  - Next.js의 getLayout을 사용하여 페이지마다 Header - Body - Footer 형식으로 레이아웃을 적용해주었습니다.
- Store Page
  - axios로 데이터를 가져온 후 Grid 형식으로 각 아이템을 Mapping해 주었습니다.
  - ReactDOM의 createPortal을 사용하여 맛집 아이템 선택 시 모달 창이 띄워지도록 했습니다.
  - 모달 창의 X버튼을 누르면 모달이 닫히도록 이벤트를 prop으로 함께 넘겨주었습니다.
- 404 Handling
  - 정의하지 않은 URL 접근 시, 에러 페이지를 보여주고 setTimeout으로 5초 후에 메인 페이지로 redirect 되도록 처리했습니다.
