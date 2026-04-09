import Cursor         from "./components/Cursor.jsx";
import Navbar         from "./components/Navbar.jsx";
import LiveClock      from "./components/LiveClock.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero           from "./components/Hero.jsx";
import Marquee        from "./components/Marquee.jsx";
import About          from "./components/About.jsx";
import Experience     from "./components/Experience.jsx";
import Projects       from "./components/Projects.jsx";
import Skills         from "./components/Skills.jsx";
import CodingProfiles from "./components/CodingProfiles.jsx";
import Performance    from "./components/Performance.jsx";
import WhyHireMe      from "./components/WhyHireMe.jsx";
import Testimonials   from "./components/Testimonials.jsx";
import ResumeGenerator from "./components/ResumeGenerator.jsx";
import Contact        from "./components/Contact.jsx";
import Footer         from "./components/Footer.jsx";
import Chatbot        from "./components/Chatbot.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

const Divider = () => <div className="divider" />;

export default function App() {
  useScrollReveal();

  return (
    <>
      {/* Fixed chrome */}
      <div className="noise" />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <LiveClock />
      <Chatbot />

      {/* Page */}
      <main>
        <Hero />
        <Marquee />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <CodingProfiles />
        <Divider />
        <Performance />
        <Divider />
        <WhyHireMe />
        <Divider />
        <Testimonials />
        <Divider />
        <ResumeGenerator />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
