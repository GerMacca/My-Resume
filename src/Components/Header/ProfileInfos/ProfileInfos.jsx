import './ProfileInfos.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Alert from '../../AlertToolTip/Alert.jsx';
import { useState } from 'react';

export default function ProfileInfos() {
    const [tooltip, setTooltip] = useState(null);

    const handleCopy = (e, text) => {
        navigator.clipboard.writeText(text);
        setTooltip({ x: e.clientX, y: e.clientY })
    }
    return (
        <>
            <nav className='contacts'>
                <button className='ctt-item' onClick={(e) => handleCopy(e, 'germaccagnan@gmail.com')}>
                    <MdMailOutline size={38} className='icon' />
                    <p>germaccagnan@gmail.com</p>
                </button>

                <button className='ctt-item' onClick={(e) => handleCopy(e, 'Url')}>
                    <FaLink size={38} className='icon' />
                    <p>url</p>
                </button>

                <button className='ctt-item' onClick={(e) => handleCopy(e, '+55 54 991630400')}>
                    <FaPhoneVolume size={32} className='icon' />
                    <p>+55 (54) 99163-0400</p>
                </button>

                <button className='ctt-item' onClick={(e) => handleCopy(e, 'Rua Bento Gonçalves, 471, Nossa Senhora de Lourdes Caxias do Sul - RS, CEP: 95020-410')}>
                    <FaMapMarkerAlt size={38} className='icon' />
                    <p>Rua Bento Gonçalves, 471<br />Nossa Senhora de Lourdes - Caxias do Sul/RS</p>
                </button>
            </nav>
            <div>
                {tooltip && (
                    <Alert
                        x={tooltip.x}
                        y={tooltip.y}
                        onDone={() => setTooltip(null)}
                    />)}
            </div>
        </>
    );
}