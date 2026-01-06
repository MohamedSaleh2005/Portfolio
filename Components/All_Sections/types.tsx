import { ReactNode } from "react"
import { FaInstagram , FaGithub , FaFacebook , FaTwitter} from 'react-icons/fa'

type Icons = {
    id:number
    link:string
    icon:ReactNode
}


export const icons: Icons[] = [
    {id:1 , link: "https://www.instagram.com/xs_______707", icon: <FaInstagram />},
    {id:2 , link: "https://github.com/MohamedSaleh2005" , icon: <FaGithub />},
    {id:3 , link: "#" , icon: <FaFacebook />},
    {id:4 , link: "#" , icon: <FaTwitter />},
]