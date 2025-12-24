import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesBlock from './components/ServicesBlock';
import IndustriesBlock from './components/IndustriesBlock';
import CareerBlock from './components/CareerBlock';
import ProjectsBlock from './components/ProjectsBlock';
import ContactBlock from './components/ContactBlock';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div style={{ width: '100vw' , overflow: 'hidden'}}>
      <Navigation />
      <Hero />
      <ServicesBlock />
      <IndustriesBlock />
      <CareerBlock />
      <ProjectsBlock />
      <ContactBlock />
      <Footer />
    </div>
  );
}
