import React from 'react';
import GradeCalculator from './components/GradeCalculator';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center py-10 px-4 overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <header className="mb-8 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-400 mb-2">
          Karunya Institute
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
          End Semester Mark & Grade Calculator
        </h2>
      </header>
      
      <main className="w-full max-w-4xl relative z-10">
        <GradeCalculator />
      </main>
      
      <footer className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 relative z-10">
        <p>© {new Date().getFullYear()} Karunya Institute of Technology and Science</p>
        <p>Developed By <a href="https://www.linkedin.com/in/hari-haran-k-08a8a1249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCgdt%2BGXtQcKMvBFErTGs2g%3D%3D" target="_blank">Hariharan_Krishnamoorthy 💜</a></p>

      </footer>
    </div>
  );
}

export default App;