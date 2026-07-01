import { useI18n } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { GlobalBackground } from "./components/GlobalBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Principles } from "./components/Principles";
import { AIUsage } from "./components/AIUsage";
import { Timeline } from "./components/Timeline";
import { Goals } from "./components/Goals";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  const { t } = useI18n();
  return (
    <>
      <a href="#main"
         className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[200] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        {t("a11y.skip")}
      </a>
      <GlobalBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Principles />
        <AIUsage />
        <Timeline />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
