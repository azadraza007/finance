import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import FAQ from "./component/FAQ";
import Service from "./component/Service";
import WhyChooseUs from "./component/whyChoooseUs";
import AboutCo from "./component/AboutCo";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutCo />
      <Service />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </>
  );
}
export default App;
