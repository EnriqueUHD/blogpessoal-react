import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
    
    const data  = new Date().getFullYear()

    return(
        <>
          <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-x1 font-bold">
                    Blog Pessoal Generation | Copyright: {data}
                </p>
                
                <p className="text-lg">Acesse nossas redes sociais</p>
                <div className="flex gap-2">
                    <Link to={"https://www.linkedin.com/"} target="_blank"><LinkedinLogoIcon size={48} weight="bold"/></Link>
                    <Link to={"https://www.instagram.com/generationbrasil/"} target="_blank"><InstagramLogoIcon size={48} weight="bold"/></Link>
                    <Link to={"https://www.facebook.com/generationbrasil/"} target="_blank"><FacebookLogoIcon size={48} weight="bold"/></Link>
                </div>
            </div>
          </div>
        </>
    )
}
export default Footer 