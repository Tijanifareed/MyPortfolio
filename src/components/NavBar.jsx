import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const NavBar = () => {
  return(
     <nav className=" mb-20 flex items-center justify-between py-6 ">
          <div className="flex flex-shrink-0 items-center">
               {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
               <h1 className="mx-2 w-10 text-4xl">FT</h1>
          </div>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* <a href=".../public/fareedcv.pdf" target="_blank" download className="px-6 py-3 bg-transparent-500 text-white text-lg font-semibold ">
               CV
          </a> */}
          <a 
               href="/fareedcv.pdf"  // Remove "public" from the path
               download="Fareed_Resume.pdf"
                className="px-6 py-3 bg-transparent-500 text-white text-lg font-semibold "
          >
                CV
          </a>



               <a href="https://www.linkedin.com/in/fareed-tijani-b693492b9/"><FaLinkedin/></a>
               <a href="https://github.com/Tijanifareed"><FaGithub/></a>
               <a href='https://www.instagram.com/agent_freddie/'><FaInstagram/></a>
               <a href="https://x.com/Agent_freddie4"><FaSquareXTwitter/></a>
          </div>
     </nav>

  );
  
  
};

export default NavBar
