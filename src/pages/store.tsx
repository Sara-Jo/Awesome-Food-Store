import IStore from "@/interface/store";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>STORE</h1>
      <p>맛집 리스트</p>
      {stores.map((store) => (
        <div key={store.id}>{store.name}</div>
      ))}
    </div>
  );
}
