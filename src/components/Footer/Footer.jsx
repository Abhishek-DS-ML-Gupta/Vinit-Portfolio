import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>Interested in collaborating on an AI project?<br />Reach out to me for inquiries.</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#b1a696]'>This portfolio is a showcase of<br />
                    Vinit Ghanekar's work in ML and AI.<br />
                    Built with passion and data.<br /><br />
                    If you would like to discuss a project or<br />
                    hire me for a role—<a href="#" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'> contact me.</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Welcome</a>
                    <a href="#intro" className='text-[#f2ede5] text-2xl'>Introduction</a>
                    <a href="#projects" className='text-[#f2ede5] text-2xl'>Projects</a>
                    <a href="#expertise" className='text-[#f2ede5] text-2xl'>Expertise</a>
                    <a href="#showcase" className='text-[#f2ede5] text-2xl'>Showcase</a>
                    <a href="#contact" className='text-[#f2ede5] text-2xl'>Contact</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaBehance className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><CiLinkedin className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaDribbble className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right">
                        Vinit Ghanekar—Machine Learning<br />
                        and AI Solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;