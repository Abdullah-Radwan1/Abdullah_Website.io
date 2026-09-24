import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { EducationLanguages } from './components/EducationLanguages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <EducationLanguages />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Curriculum Vitae Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default App;
