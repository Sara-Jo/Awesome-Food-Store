import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h3>맛집 정보를 한 번에,</h3>
      <h1>ToGo</h1>
      <div>
        <div>ABOUT</div>
        <div>STORE</div>
      </div>
    </div>
  );
}
