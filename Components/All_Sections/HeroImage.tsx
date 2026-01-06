import Image from 'next/image'
export default function HeroImage() {

    {/* My Photo */}
  return (
            <div className='Photo cursor-pointer w-70 m-auto rounded-full relative  h-70 items-center flex border-5 border-sky-400 shadow-sky-400 shadow-[0_3px_25px_-] hover:shadow-[0_4px_35px_-]'>

              <div className='HiDiv absolute right-53 md:right-65 top-4 '>Hi</div>
              
                <Image
                    src="/saleh.jpg"
                    width={500}
                    height={500}
                    alt="My Photo"
                    className="rounded-full w-65 m-auto "
                />


            </div>
                
  )
}
