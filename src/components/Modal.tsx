import Image from "next/image";
import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import { useEffect, useState } from "react";
import IStore from "@/interface/store";
import Portal from "./Portal";

interface Props {
  storeId: number;
  toggleModal: () => void;
}

export default function Modal({ storeId, toggleModal }: Props) {
  const [store, setStore] = useState<IStore | null>(null);

  const getStoreById = async () => {
    const { data } = await axios.get(`http://localhost:9000/stores/${storeId}`);
    setStore(data);
  };

  useEffect(() => {
    getStoreById();
  }, []);

  return (
    <Portal>
      <Background>
        <Container>
          <ImageWrapper>
            {store && (
              <Image
                src={store?.image}
                alt={store?.name}
                height="480"
                width="480"
              />
            )}
          </ImageWrapper>
          <InfoWrapper>
            <CancelButtonWrapper>
              <CancelIcon onClick={() => toggleModal()} />
            </CancelButtonWrapper>
            <ContentWrapper>
              <TitleWrapper>{store && <h1>{store.name}</h1>}</TitleWrapper>
              <DescriptionWrapper>
                {store && <p>{store.description}</p>}
              </DescriptionWrapper>
            </ContentWrapper>
          </InfoWrapper>
        </Container>
      </Background>
    </Portal>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
