
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">About <span className="text-neutral-500">Me</span></h2>
      <div className="flex flex-wrap">
          <motion.div
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                    <img className="rounded-2xl"
                     src={aboutImg}
                     width={500}
               style={{ height: '470px',objectFit:"cover" }}
                      alt="about"/>
              </div>
          </motion.div>
          <motion.div
          whileInView={{opacity:1, x: 0}}
          initial={{opacity:0, x: 100}}
          transition
          className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                         <h2 className="my-2 max-w-xl py-6 
                        
                         ">{ABOUT_TEXT}</h2>
                    </div>
              </motion.div>
      </div>
    </div>
  )
}

export default About
