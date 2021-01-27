import "./App.scss";
import Download from "./components/Download/Download";
import Expertise from "./components/Expertise/Expertise";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FunFact from "./components/FunFact/FunFact";
import Header from "./components/Header/Header";
import Screen from "./components/Screen/Screen";
import Solution from "./components/Solution/Solution";
import Steps from "./components/Steps/Steps";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonial/Testimonial";
import Video from "./components/Video/Video";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <main>
      <Header />
      <FunFact />
      <Steps />
      <Features />
      <Video />
      <Expertise />
      <WhyUs />
      <Solution />
      <Screen />
      <Download />
      <Testimonial />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
