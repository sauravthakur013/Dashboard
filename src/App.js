import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA"

function App() {
  return (
    <div className=" m-0 p-0 box-border ">
      <NavBar/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <CTA/>
    </div>
  );
}

export default App;
