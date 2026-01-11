import Image from 'next/image'
import { skills } from './types'

export default function Skills() {
  return (
    <section className='flex flex-col py-40 items-center' id='Skills'>

            <h1 className='myfont text-2xl m-auto'>My <span className='text-sky-400'>Skills</span></h1>

                <div className='my-10 grid grid-cols-2 md:grid-cols-4 gap-7'>

                    {skills.map((skill) => (
                        
                    <div key={skill.id} className='Special border border-sky-400 w-40 md:w-50 flex items-center gap-4 md:gap-7 px-3 py-2 rounded-lg cursor-pointer hover:scale-105 shadow-sky-700 shadow-[1px_1px_3px_1px] hover:shadow-[0_3px_25px_-] transition-all duration-300'>
                        <Image
                            width={500}
                            height={500}
                            alt='Skill Photo'
                            src={skill.photo}
                            className='w-auto h-12'
                        />
                        <span className='myfont text-sky-400 text-sm'>{skill.title}</span>
                    </div>
                    ))}
                 

                </div>
    </section>
  )
}
