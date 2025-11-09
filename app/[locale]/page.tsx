import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Roadmap from '@/components/Roadmap';
import Resources from '@/components/Resources';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Tips from '@/components/Tips';
import Coffee from '@/components/Coffee';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <Roadmap />
      <Resources />
      <Skills />
      <Projects />
      <Tips />
      <Coffee />
      <Footer />
    </main>
  );
}
