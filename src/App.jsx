import About from "./Components/About/About";
import Campus from "./Components/Campus/campus.";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/programs";
import Testimonials from "./Components/Testimonials/testimonials";
import Title from "./Components/Title/title";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
        <Title subTitle="OUR PROGRAM" title="WHAT WE OFFER " />
        <About />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What our students said" />
        <Testimonials />
        <Title subTitle="TESTIMONIALS" title="What our students said" />
      </div>
    </div>
  );
};

export default App;
