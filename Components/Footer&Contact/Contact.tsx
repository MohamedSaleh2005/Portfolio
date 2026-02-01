"use client"
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
    const [result, setResult] = useState<string>("Send Message");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "87fef7a0-f3ac-4edb-befc-fbb9da7c3424");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                Swal.fire({
                    title: "Success ✅",
                    text: "Your Message has been sent",
                    icon: "success",
                    iconColor: "#38bdf8",

                    customClass: {
                        popup: "Special",
                        confirmButton: "Snt_Hover"
                    },
                });
                form.reset();
                setResult("Send Message")
            } else {
                setResult("Something went wrong ❌");
            }
        } catch (error) {
            setResult("Network Error ❌");
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2 py-20  md:py-0" id="Contact">
            <h1 className='myfont text-2xl m-auto'>Contact <span className='text-sky-400'>Me!</span></h1>
            <div className="flex m-auto mt-7">
                <input type="email" placeholder="Email Adress" name="email" className="Special Contact MyShadow w-82" required />

            </div>

            <div className="m-auto flex flex-col gap-2 ">
                <input type="text" placeholder="Full Name" name="name" className="Special Contact MyShadow w-82" required />
                <textarea placeholder="Write Your Massege" name="message" className="Special Contact MyShadow h-40 resize-none" required></textarea>
            </div>
            <button type="submit" className="My_Hover  m-auto ">{result}</button>
        </form>
    )
}
