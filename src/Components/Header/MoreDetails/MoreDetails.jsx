import './MoreDetails.css';
import Card from '../Card/Card';
import { useState } from 'react';

export default function MoreDetails() {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        if (downloading) return; //anti spam
        setDownloading(true);
        const a = document.createElement('a');
        a.href = '/curriculo-germano.pdf';
        a.download = 'Currículo de Germano Maccagnan dos Santos.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => setDownloading(false), 500);
    };

    const openDetails = () => {
        setTimeout(() => setIsCardOpen(true), 0);
    }

    return (
        <>
            <section className="more-details">
                <button onClick={openDetails}>Mais detalhes</button>
                <button onClick={handleDownload} disabled={downloading}>{downloading ? 'Aguarde' : 'Baixar PDF'}</button>
            </section>

            {isCardOpen && <Card setOpen={setIsCardOpen} />}
        </>
    );
}
