import './SocialOrbit.css';
import Me from '../../../Assets/me.jpg';
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialOrbit() {
    return (
        <nav className="orbit-container">
            <div className="social-orbit">
                <img src={Me} alt="Minha Foto" className="Me" draggable="false" />

                <div className="orbit-item" style={{ '--bg': '255, 255, 255' }}>
                    <a className="itemAncor" href="mailto:germaccagnan@gmail.com" target='_blank' rel="noopener">
                        <RiMailSendLine size={45} color="#000000ff" />
                    </a>
                </div>

                <div className="orbit-item" style={{ '--bg': '0, 122, 185' }}>
                    <a className="itemAncor" href="https://www.linkedin.com/in/germano-maccagnan-dos-santos-229b532a7/" target="_blank" rel="noopener">
                        <RiLinkedinFill size={45} color="#fff" draggable="false" />
                    </a>
                </div>

                <div className="orbit-item" style={{ '--bg': '255, 255, 255' }}>
                    <a className="itemAncor" href="https://github.com/GerMacca" target="_blank" rel="noopener">
                        <TbBrandGithubFilled size={45} color="#0d0858ff" />
                    </a>
                </div>

                <div className="orbit-item" style={{ '--bg': '85, 204, 107' }}>
                    <a className="itemAncor" href="https://wa.me/5554991630400" target="_blank" rel="noopener">
                        <FaWhatsapp size={45} color="#fff" />
                    </a>
                </div>
            </div>
        </nav>

    );
}
