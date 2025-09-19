import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/programs";
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
      </div>
    </div>
  );
};

export default App;
