import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

 const App = () => {
   return (
     <div className="App">
       <Navbar />
       <Hero />
       <About />
       <Projects />
       <Clients />
        <Experience />
       <Contact />
       <Footer />
     </div>
   )
 }

 export default App;