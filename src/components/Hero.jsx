import'boxicons/css/boxicons.min.css';
import DiamondAltIcon from './DiamondAltIcon.jsx';
import PaperclipIcon from './PaperclipIcon.jsx';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
   <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] '>

    <div
    data-aos="fade-right"
    data-aos-offset='300'
    data-aos-easing='ease-in-sine'
    className="max-w-xl ml-[5%] z-10 mt-[90%] lg:mt-0 ">
      {/* //tagbox */}
      <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
        <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
          <DiamondAltIcon />INTRODUCING
          
        </div>
      </div>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 tracking-wide my-8'>
        EMAIL FOR
        <br />
        DEVELOPER
      </h1>
      <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
        A new way to communicate with your team and clients. Stay updated with the latest news and features.
      </p>

      {/* button */}
      <div className='flex flex-col sm:flex-row gap-4 mt-12'>
        <a
          href="#"
          className=" w-fit border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] flex items-center gap-2"
        >
          <span>Documentation</span>
          <PaperclipIcon className="w-5 h-5 mt-[1px]" />
      </a>

      <a
          href="#"
          className=" w-fit border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] flex items-center gap-2 bg-gray-300 text-black hover:text-white"
        >
          <span>GetStart</span>
          <PaperclipIcon className="w-5 h-5 mt-[1px]" />
      </a>

      
      </div>

    </div>

    <Spline
    data-aos="fade-zoom-in"
    data-aos-offset='0'
    data-aos-easing='ease-in-back'
    data-aos-delay='300'
    data-aos-duration='3000'
    className='absolute top-[-18%] lg:top-0 bottom-0 lg:left-[25%] sm:left-[-2%] h-full'
    scene="https://prod.spline.design/yu8C4NeXDiggikab/scene.splinecode" />

    

   </main>
  )
}

export default Hero