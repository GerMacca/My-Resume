import { useEffect, useRef, useState, useCallback } from 'react'
import Delphi from '../../../Assets/Delphi.png'
import Firebird from '../../../Assets/firebird.png'
import API from '../../../Assets/API.png'
import MySQL from '../../../Assets/mysql.png'
import HTML from '../../../Assets/html-5.png'
import CSS from '../../../Assets/CSS.png'
import JavaScript from '../../../Assets/JS.png'
import Reactimg from '../../../Assets/React.png'
import Python from '../../../Assets/Python.png'
import Java from '../../../Assets/Java.png'
import Git from '../../../Assets/git.png'
import GitHub from '../../../Assets/gitHub.png'
import { IoCloseSharp } from "react-icons/io5";

import './Card.css'

const ANIMATION_CONFIG = {
    PULSE: ['python', 'apis', 'css', 'javascript', 'html', 'mysql', 'java', 'delphi', 'firebird'],
    SPIN: ['react']
}

const SCROLL_BEHAVIOR = {
    SMOOTH: 'smooth',
    CENTER: 'center'
}

const SCROLL_DELAY = 200

const SKILLS_DATA = [
    [
        {
            name: 'HTML',
            description: 'Tenho bastante familiaridade com HTML. Estruturo páginas com facilidade, sempre buscando organização clara',
            image: HTML
        },
        {
            name: 'CSS',
            description: 'Uso CSS diariamente, aplicando estilos modernos, responsividade e animações leves para criar interfaces agradáveis e funcionais',
            image: CSS
        }
    ],
    [
        {
            name: 'JavaScript',
            description: 'Tenho aprendido JavaScript explorando interações no front-end dos meus projetos. Já usei para animações, manipulação de DOM e lógica de interfaces',
            image: JavaScript
        },
        {
            name: 'React',
            description: 'Tenho usado React em projetos pessoais como meu site de currículo. Trabalho com componentização, animações e uso de hooks, sempre focando em interfaces modernas e bem estruturadas',
            image: Reactimg
        }
    ],
    [
        {
            name: 'Java',
            description: 'Aprendi Java na cadeira de Programação Orientada a Objetos da faculdade. Conheço bem os fundamentos da linguagem, como classes, herança e encapsulamento',
            image: Java
        },
        {
            name: 'MySQL',
            description: 'Fiz um curso introdutório de 15h, onde aprendi a modelar tabelas, realizar consultas e entender a base do funcionamento do MySQL',
            image: MySQL
        }
    ],
    [
        {
            name: 'Python',
            description: 'Uso Python como ferramenta auxiliar no dia a dia. Crio scripts, rotinas automatizadas e soluções rápidas, mesmo sem projetos grandes',
            image: Python
        },
        {
            name: 'APIs',
            description: 'Tenho experiência com consumo de APIs, fiz uso em projetos pessoais e profissionais',
            image: API
        }
    ],
    [
        {
            name: 'Git',
            description: 'Uso para controle de versão: commits claros, branching e merge seguindo boas práticas.',
            image: Git
        },
        {
            name: 'GitHub',
            description: 'Uso o GitHub para backup e repositório, pull requests, documentações e portifólio.',
            image: GitHub
        }
    ],
    [
        {
            name: 'Delphi',
            description: 'Aprendi Delphi no meu primeiro estágio, foi com ele que comecei a programar de verdade e entender lógica de desenvolvimento',
            image: Delphi
        },
        {
            name: 'Firebird',
            description: 'Foi meu primeiro contato com bancos de dados, aprendi a configurá-lo e a trabalhar com consultas, modelagem e manutenção',
            image: Firebird
        }
    ]
]

function Card({ setOpen }) {
    const cardsRef = useRef([]);
    const containerRef = useRef(null);
    const isProgrammatic = useRef(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const totalImages = SKILLS_DATA.length * 2;
    const ready = loadedCount >= totalImages;
    const [activeIndex, setActiveIndex] = useState(0);

    const getAnimationClass = useCallback((skillName) => {
        const lowerCaseName = skillName.toLowerCase();
        if (ANIMATION_CONFIG.PULSE.includes(lowerCaseName)) return 'pulse';
        if (ANIMATION_CONFIG.SPIN.includes(lowerCaseName)) return 'spin';
        return '';
    }, []);

    const scrollToCard = useCallback((index) => {
        const targetCard = cardsRef.current[index];
        if (targetCard) {
            isProgrammatic.current = true;
            targetCard.scrollIntoView({
                behavior: SCROLL_BEHAVIOR.SMOOTH,
                block: SCROLL_BEHAVIOR.CENTER
            });

            window.setTimeout(() => {
                isProgrammatic.current = false;
            }, 400);
        }
    }, []);

    const handleCardClick = useCallback((index) => {
        if (activeIndex !== index) {
            setActiveIndex(index);
        }
    }, [activeIndex]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleScroll = useCallback(() => {
        if (isProgrammatic.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const middleY = containerRect.top + containerRect.height / 2;

        let closestIndex = -1;
        let closestDistance = Infinity;

        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const cardMiddle = rect.top + rect.height / 2;
            const distance = Math.abs(cardMiddle - middleY);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex !== -1 && closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    }, [activeIndex]);

    const handleKeyDown = useCallback((event) => {
        const { key } = event;

        if (key === 'ArrowDown') {
            event.preventDefault();
            if (activeIndex < SKILLS_DATA.length - 1) {
                setActiveIndex((i) => i + 1);
            }
        } else if (key === 'ArrowUp') {
            event.preventDefault();
            if (activeIndex > 0) {
                setActiveIndex((i) => i - 1);
            }
        } else if (key === 'Escape') {
            setOpen(false);
        }
    }, [activeIndex, setOpen]);

    useEffect(() => {
        const scrollY = window.scrollY;
        const { overflow, position, top, width } = document.body.style;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        return () => {
            document.body.style.overflow = overflow;
            document.body.style.position = position;
            document.body.style.top = top;
            document.body.style.width = width;
            window.scrollTo(0, scrollY);
        };
    }, []);

    useEffect(() => {
        scrollToCard(activeIndex);
    }, [activeIndex, scrollToCard]);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;
        const onScroll = () => {
            requestAnimationFrame(handleScroll);
        };
        element.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();
        return () => element.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const renderCard = useCallback((cardData, index) => (
        <div
            key={index}
            data-index={index}
            className={`Card ${activeIndex === index ? 'active' : ''}`}
            ref={(element) => (cardsRef.current[index] = element)}
            onClick={() => handleCardClick(index)}
        >
            <div className="total-size">
                <div className="half">
                    <h3>{cardData[0].name}</h3>
                    <img
                        src={cardData[0].image}
                        alt={cardData[0].name}
                        className={getAnimationClass(cardData[0].name)}
                        draggable="false"
                        loading="eager"
                        onLoad={() => setLoadedCount(c => c + 1)}
                        onError={() => setLoadedCount(c => c + 1)}
                    />
                    <p>{cardData[0].description}</p>
                </div>
                <div className="half">
                    <h3>{cardData[1].name}</h3>
                    <img
                        src={cardData[1].image}
                        alt={cardData[1].name}
                        className={getAnimationClass(cardData[1].name)}
                        draggable="false"
                        loading="eager"
                        onLoad={() => setLoadedCount(c => c + 1)}
                        onError={() => setLoadedCount(c => c + 1)}
                    />
                    <p>{cardData[1].description}</p>
                </div>
            </div>
        </div>
    ), [activeIndex, handleCardClick, getAnimationClass]);

    return (
        <div className="modal-overlay">
            <div className="scroll-container" ref={containerRef}>
                <button onClick={handleClose} className="close-btn outline" aria-label="Fechar modal">
                    <IoCloseSharp size={36} color="white" />
                </button>
                <div className={`Cards ${ready ? 'is-ready' : ''}`}>
                    {SKILLS_DATA.map((cardData, index) => renderCard(cardData, index))}
                </div>
            </div>
        </div>
    );
}

export default Card;