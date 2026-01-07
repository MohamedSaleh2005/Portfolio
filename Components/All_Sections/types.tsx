import { ReactNode } from "react"
import { FaInstagram , FaGithub , FaFacebook , FaTwitter, FaChartBar , FaCode, FaPencilAlt} from 'react-icons/fa'


interface Icons {
    id:number
    link?:string
    icon:ReactNode
}

    // Hero Icons
export const icons: Icons[] = [
    {id:1 , link: "https://www.instagram.com/xs_______707", icon: <FaInstagram />},
    {id:2 , link: "https://github.com/MohamedSaleh2005" , icon: <FaGithub />},
    {id:3 , link: "#" , icon: <FaFacebook />},
    {id:4 , link: "#" , icon: <FaTwitter />},
]
    // Services Cards
interface Cards extends Icons {
    title:string
    text:string
}

export const cards: Cards[] = [
    {id:1 , title: "Web Development" , icon: <FaCode /> , text:"Building modern websites with clean code and strong performance."},
    {id:2 , title: "Digital Marketing" , icon: <FaChartBar /> , text:"Bachelor student focused on effective digital growth strategies"},
    {id:3 , title: "UI / UX Design" , icon: <FaPencilAlt /> , text:"Designing clean user friendly interfaces for better experiences"},
]
