

export default function Contact() {
    return (
        <form className="flex flex-col gap-2 py-20  md:py-0" id="Contact">
            <h1 className='myfont text-2xl m-auto'>Contact <span className='text-sky-400'>Me!</span></h1>
            <div className="flex m-auto gap-2 mt-7">
                <input type="email" placeholder="Email Adress" className="Special Contact MyShadow w-40" />
                <input type="tel" placeholder="Phone Number" className="Special Contact MyShadow w-40" />
            </div>

            <div className="m-auto flex flex-col gap-4">
                <input type="text" placeholder="Full Name" className="Special Contact MyShadow w-82" />
                <textarea placeholder="Write Your Massege" className="Special Contact MyShadow h-40 resize-none"></textarea>
            </div>
            <a href="#" className="My_Hover w-40 m-auto">Send Message</a>
        </form>
    )
}
