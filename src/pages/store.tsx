import IStore from "@/interface/store";
import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/layout/layout";
import styled from "styled-components";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function Store() {
  const [stores, setStores] = useState<IStore[]>([]);
  const [selectedStoreId, setSelectedStoreId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStores = async () => {
    const { data } = await axios.get("http://localhost:9000/stores");
    setStores(data);
  };

  useEffect(() => {
    getStores();
  }, []);

  const handleStoreClick = (storeId: number) => {
    setSelectedStoreId(storeId);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <TitleContainer>
        <h1>STORE</h1>
      </TitleContainer>
      {isModalOpen && (
        <Modal
          storeId={selectedStoreId}
          toggleModal={() => setIsModalOpen(false)}
        />
      )}
      <StoreContainer>
        {stores.map((store) => (
          <StoreWrapper
            key={store.id}
            onClick={() => handleStoreClick(store.id)}
          >
            <Image
              src={store.thumb}
              objectFit="cover"
              alt={store.name}
              width={200}
              height={200}
            />
          </StoreWrapper>
        ))}
      </StoreContainer>
    </Container>
  );
}

Store.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div``;

const TitleContainer = styled.div`
  color: purple;
  padding: 1rem 3rem;
`;

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 3rem;
  column-gap: 2rem;
  row-gap: 2rem;
`;

const StoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 1rem;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.6;
  }
`;
