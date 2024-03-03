import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Teams } from "./components/Teams";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
