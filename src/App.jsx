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
      </div>
      <Title />
    </div>
  );
};

export default App;
