import profilePic from "../assets/FareedTijani.jpg"
import { HERO_CONTENT } from "../constants"
import {motion} from "framer-motion";


const container = (delay) => ({
     hidden:{x:-100, opacity:0},
     visible:{
          x:0,
          opacity: 1,
          transition:{duration: 0.5, delay: delay}
     }
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
     <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
               <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
                         Fareed Tijani
                         </motion.h1>
                         <motion.span
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                         className="bg-gradient-to-r from-purple-600 via-slate-500 to-pink-500 bg-clip-text 
                         text-3xl tracking-tight text-transparent">
                              Software Engineer 
                         </motion.span>
                         <motion.p
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                         className="my-2 max-w-xl py-6 font-normal tracking-tighter">{HERO_CONTENT}</motion.p>
               </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
               <motion.img
               initial={{x:100, opacity: 0}}
               animate={{x:0, opacity:1}}
               transition={{duration: 1, delay: 1.2, }}
               src={profilePic}
               width={500}
               style={{ height: '470px',objectFit:"cover" }}
               className="rounded-2xl"
               alt="Fareed tijani" />

          </div>

          </div>
     </div>
    </div>
  )
}

export default Hero
