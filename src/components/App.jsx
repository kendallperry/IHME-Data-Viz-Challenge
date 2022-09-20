import "../index.css";
import Citation from "./Citation";
import VizContainer from "./Viz/VizContainer";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <VizContainer />
      <Citation />
      <Footer />
    </>
  );
}
