import { icons } from './types'

export default function HeroContent() {
  return (
    <div>
                    <h2>Hello, I'm</h2>
                    <h1 className=' text-2xl font-bold'>Mohammed Saleh</h1>
                    <h3>And I'm a <span className="text-sky-400">Web Developer...</span> </h3>
                    <p className='w-80 mt-2 md:w-120 font-sans font-semibold'>I'm Mohamed Saleh, a Web Developer & Digital Marketer combining clean code with smart digital strategies to grow brands online.</p>

                    {/* social Media Icons */}
                    <div className='flex gap-3 mt-4'>
                        {icons.map((icon) => (<a className='BtnHover' key={icon.id} href={icon.link}>{icon.icon}</a>))}
                    </div>

                        {/* Download Cv btn */}
                    <a href='/Mohamed_Saleh_CV.pdf' download={"Mohamed Saleh CV"} className='My_Hover w-37'>Download CV</a>
    </div>
  )
}
