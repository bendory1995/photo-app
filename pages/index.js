import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

// import Feed from "../components/Feed";
// import Modal from "../components/Modal";
export default function Home() {
  return (
    <div className="bg-red-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Photo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <Header />
      <Feed />
      {/* <Modal /> */}
      {/* <Feed />  */}
      {/* FEED */}
      {/* Modal */}
    </div>
  );
}
