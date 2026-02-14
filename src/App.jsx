import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrendSection from "./components/TrendSection/TrendSection";
import TopSelling from "./components/TopSelling/TopSelling";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import BestO2 from "./components/BestO2/BestO2";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendSection />
      <TopSelling />
      <CustomerReview />
      <BestO2 />
      <Footer />
    </>
  );
}

export default App;