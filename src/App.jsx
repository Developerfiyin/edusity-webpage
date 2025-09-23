import About from "./Components/About/About";
import Campus from "./Components/Campus/campus.";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
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
        <Title subTitle="Contact us" title="Get in touch" />
        <Contact />
        <Title subTitle="Contact us" title="Get in touch" />
        <Footer />
      </div>
    </div>
  );
};

export default App;
