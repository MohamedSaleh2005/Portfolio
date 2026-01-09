import { cards } from './types'

export default function Services() {
    return (
        <section className='flex flex-col py-40' id='Services'>

            <h1 className='myfont text-2xl m-auto'>Our <span className='text-sky-400'>Services</span></h1>
        
            <div className='  md:px-30 my-10  grid md:grid-cols-3 place-items-center gap-4'>

                {cards.map((card) => (
                    <div key={card.id} className='w-65  hover:shadow-sky-400 hover:shadow-[0_3px_25px_-] p-5 rounded-xl border-sky-400 border-2 flex flex-col items-center'>
                       
                            <span className='text-sky-400 text-4xl flex'>{card.icon}</span>
                            <h1 className='myfont mt-2'>{card.title}</h1>
                            <p className="text-sm my-2 font-semibold text-center max-w-50">{card.text}</p>
                            <button className='Cv_Hover'>Read More</button>

                        </div>
                    ))}

            </div>

        </section>
    )
}
