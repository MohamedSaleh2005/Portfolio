import Image from "next/image";
import { FaShare } from "react-icons/fa";
import { projects } from "./types";

export default function Projects() {
    return (

        <section className='flex flex-col py-30' id='Projects'>


            <h1 className='myfont text-2xl m-auto'>My <span className='text-sky-400'>Projects</span></h1>

            <div className='my-10 grid md:grid-cols-3 gap-10 m-auto'>


                {/* Project Info */}
                {projects.map((project) => (
                
                    <div key={project.id} className='border-sky-400 border w-80 h-60 rounded-xl relative Pimage1 shadow-sky-400 shadow-[0_2px_20px_-] hover:scale-[1.02] transition-all duration-300'>
                        <div className=' flex flex-col items-center py-2 mt-8 myfont gap-4'>
                            <h1>{project.title}</h1>
                            <div className='flex gap-4'>
                                    {project.skills.map((skill, index) => (
                                    <span className="border rounded-lg border-sky-400 p-2 shadow-[0_1px_10px_-] shadow-sky-200 " key={index}>{skill}</span>
                                ))}
                            </div>
                            <a href={project.link} className='flex items-center mt-3 py-1.5 w-30 pl-5 hover:scale-105 transition-all duration-300 border-2 border-sky-400 rounded-md'>Githup<span className="pl-2"><FaShare /></span> </a>
                        </div>

                        {/* Project Image */}
                        <Image
                            fill
                            src={project.photo}
                            alt="PROJECT"
                            className="rounded-xl object-cover  Pimage2"
                        />

                    </div>
                ))}

            </div>
        </section>
    )
}
