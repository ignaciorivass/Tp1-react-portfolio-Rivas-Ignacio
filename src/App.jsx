import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
    <br />
      <Header nombre="Ignacio Rivas" profesion="Programador" />
      <br />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
