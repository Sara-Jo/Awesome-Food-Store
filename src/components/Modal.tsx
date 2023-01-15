import IStore from "@/interface/store";
import Image from "next/image";
import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";

interface Props {
  store: IStore;
  toggleModal: () => void;
}

export default function Modal({ store, toggleModal }: Props) {
  return (
    <Background>
      <Container>
        <ImageWrapper>
          <Image
            src={store?.image}
            alt={store?.name}
            height="480"
            width="480"
          />
        </ImageWrapper>
        <InfoWrapper>
          <CancelButtonWrapper>
            <CancelIcon onClick={() => toggleModal()} />
          </CancelButtonWrapper>
          <ContentWrapper>
            <TitleWrapper>
              <h1>{store.name}</h1>
            </TitleWrapper>
            <DescriptionWrapper>{store.description}</DescriptionWrapper>
          </ContentWrapper>
        </InfoWrapper>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: white;
  width: 60rem;
  height: 30rem;
  box-shadow: 0px 0px 5px #444;
  border-radius: 0.5rem;
  display: flex;
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

const InfoWrapper = styled.div`
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  padding: 0 2rem;
`;

const TitleWrapper = styled.div`
  color: purple;
`;

const DescriptionWrapper = styled.div`
  margin-top: 2rem;
  line-height: 1.7;
  font-size: 0.9rem;
`;

const CancelButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;
