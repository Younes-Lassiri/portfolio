import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Landing from './Landing/Landing';
import Loader from './Loader/Loader';
import Recent from './Recent/Recent';
import Resume from './Resume/Resume';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import { useState, useEffect } from 'react';

function App() {



  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!pageLoaded) {
    return <Loader/>;
  }

  return (
    <div>
      <Landing/>
      <Services/>
      <Recent/>
      <Resume/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
