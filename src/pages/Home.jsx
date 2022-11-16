// import { lazy, Suspense } from "react";

// const Card = lazy(() => import("../components/Card"));
// const Footer = lazy(() => import("../components/Footer"));
import Card from "../components/CardClass";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* <Suspense> */}
      <h1>Welcome to my website</h1>
      <Card title="Total Article" body="100" bgColor="#f8f8f8" />
      <Footer />
      {/* </Suspense> */}
    </>
  );
}

export default Home;
