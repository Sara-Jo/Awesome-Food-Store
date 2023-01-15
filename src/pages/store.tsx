import IStore from "@/interface/store";
import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/layout/layout";
import styled from "styled-components";
import Image from "next/image";

export default function Store() {
  const [stores, setStores] = useState<IStore[]>([]);

  const getStores = async () => {
    const { data } = await axios.get("http://localhost:9000/stores");
    setStores(data);
  };

  useEffect(() => {
    getStores();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h1>STORE</h1>
      </TitleContainer>
      <StoreContainer>
        {stores.map((store) => (
          <StoreWrapper key={store.id}>
            <Image
              src={store.thumb}
              // layout="fill"
              objectFit="cover"
              alt={store.name}
              width={250}
              height={250}
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

const Container = styled.div`
  padding: 0 2rem;
`;

const TitleContainer = styled.div`
  color: purple;
`;

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StoreWrapper = styled.div`
  margin: 1rem 0;
  img {
    border-radius: 1rem;
    cursor: pointer;
  }
`;
