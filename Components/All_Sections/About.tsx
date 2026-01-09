
import Image from 'next/image'
export default function About() {
  return (
        <section className='flex' id='About'>

          <div className='m-auto py-30 md:py-40 px-5 flex flex-col md:flex-row items-center gap-10'>

             <div className='w-50 h-50 rounded-full flex  border-3 border-sky-400 p-2'>
            
                    <Image
                            src="/saleh2.jpg"
                            width={500}
                            height={500}
                            alt="My Photo"
                            className="rounded-full  object-cover h-45 m-auto  "
                            />
            </div>

                            {/* About Content */}

                <div className='myfont'>
                    <h1 className='text-2xl'>About <span className='text-sky-400'>Me</span></h1>
                    <h2 className='text-lg'>Front-End-Developer</h2>
                    <p  className='mt-2 max-w-xl text-sm'>I’m a 21 years old, Web Developer and Digital Marketing student who builds clean, responsive websites with a focus on performance, user experience.</p>
                    <button className='Cv_Hover'>Read More</button>
                </div>

             </div>
        </section>
  )
}
