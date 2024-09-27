import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';

const About = () => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('ayoadesunday97@gmail.com');
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }
    
  return (
    <section className="c-space my-20" id='about'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="sm:h-[276px] w-full h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Hi, I'm Sunday</p>
                        <p className="grid-subtext">With 8 years of experience building web/mobile applications, I've honed my skills in frontend and backend development, with a focus on delivering apps that actually works.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="sm:h-[276px] w-full h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in Javascript/Typescript with focus on React and Nextjs ecosystems</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full h-fit flex justify-center items-center sm:h-[326px]">
                        <Globe
                            height={326} 
                            width={326} 
                            backgroundColor="rgba(0,0,0,0)" 
                            backgroundImageOpacity={0.5} 
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">I work remotely across most timezone</p>
                        <p className="grid-subtext">I'm based in Lagos, Nigeria, with remote work available</p>
                        <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="sm:h-[266px] w-full h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">I'm always looking for new opportunities</p>
                        <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="sm:h-[276px] md:h-[126px] w-full h-fit object-cover sm:object-top" />
                    <div className='space-y-2'>
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={isCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ayoadesunday97@gmail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About