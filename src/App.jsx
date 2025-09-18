import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/programs";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </div>
  );
};

export default App;
