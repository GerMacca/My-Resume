import './MoreDetails.css';
import Card from '../Card/Card';
import { useState } from 'react';

export default function MoreDetails() {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        if (downloading) return;
        setDownloading(true);
        const a = document.createElement('a');
        a.href = '/curriculo-germano.pdf';
        a.download = 'Currículo de Germano Maccagnan dos Santos.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => setDownloading(false), 1000);
    };

    const openDetails = () => {
        setIsCardOpen(true)
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
