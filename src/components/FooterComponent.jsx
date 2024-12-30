
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons";

const FooterComponent = ()=>{
    const year = new Date().getFullYear();
    return (
        <div className="w-[100%] h-[100%] p-8 gap-4 bg-black text-white flex flex-col justify-center items-center">
            <div className=" ">
                <ol className="list-none flex sm:gap-8 gap-4 sm:text-xl text-md flex-wrap justify-center items-center">
                    <li>Terms Of Usw</li>
                    <li>Privacy-Policy</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>FAQ</li>
                </ol>
            </div>
            <div>
                <p className="text-lg text-center"> Made with 💗 by <a href="https://www.linkedin.com/in/sanni07/"><span className="text-pink-400">Sanni Kumar</span></a></p>
                <p className="text-lg">©️ {year} <span className="text-pink-600">Movie-Bajar </span><span className="text-blue-600">AI</span></p>
            </div>
            
            <ol className="flex gap-8 list-none justify-center items-center text-xl">
                <a href="https://github.com/Sanni-Singh"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/sanni07/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faMailchimp} />
                
            </ol>
        </div>
    )
}
export default FooterComponent;