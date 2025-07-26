import Header from "./components/Header"
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { useEffect } from 'react';  
AOS.init();

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
      
    });
  }, []);
  return (
   <main>
    
    <img src="/gradient.png" alt="image" className="absolute top-0 right-0 opacity-70 -z-10" />
    {/* light blur */}
    <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>

    <Header />
    <Hero />

 
   </main>
  )
}

export default App
