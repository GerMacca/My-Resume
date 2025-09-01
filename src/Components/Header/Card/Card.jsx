import { useEffect, useRef, useState, useCallback } from 'react'
import Delphi from '../../../Assets/Delphi.png'
import Firebird from '../../../assets/firebird.png'
import API from '../../../assets/API.png'
import MySQL from '../../../assets/mysql.png'
import HTML from '../../../assets/html-5.png'
import CSS from '../../../assets/CSS.png'
import JavaScript from '../../../assets/JS.png'
import Reactimg from '../../../assets/React.png'
import Python from '../../../assets/Python.png'
import Java from '../../../assets/Java.png'
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
            description: 'Tenho muita familiaridade com HTML. Estruturo páginas com facilidade, sempre buscando semântica e organização clara',
            image: HTML
        },
        {
            name: 'CSS',
            description: 'Uso CSS com confiança, aplicando estilos modernos, responsividade e animações leves para criar interfaces agradáveis e funcionais',
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
            description: 'Tenho experiência com consumo de APIs, Usei em alguns projetos pessoais e profissionais',
            image: API
        }
    ],
    [
        {
            name: 'Git',
            description: 'Controle de versão no dia a dia: branching, commits claros, pull/rebase, conflitos, tags/releases.',
            image: Git
        },
        {
            name: 'GitHub',
            description: 'Colaboração: PRs com review, Issues/Projects, Actions (CI) e Releases (em evolução).',
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
    const cardsRef = useRef([])
    const [activeIndex, setActiveIndex] = useState(0)

    const getAnimationClass = useCallback((skillName) => {
        const lowerCaseName = skillName.toLowerCase()

        if (ANIMATION_CONFIG.PULSE.includes(lowerCaseName)) return 'pulse'
        if (ANIMATION_CONFIG.SPIN.includes(lowerCaseName)) return 'spin'

        return ''
    }, [])

    const scrollToCard = useCallback((index) => {
        const targetCard = cardsRef.current[index]
        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: SCROLL_BEHAVIOR.SMOOTH,
                block: SCROLL_BEHAVIOR.CENTER
            })
        }
    }, [])

    const handleCardClick = useCallback((index) => {
        if (activeIndex !== index) {
            scrollToCard(index)
            setTimeout(() => {
                setActiveIndex(index)
            }, SCROLL_DELAY)
        }
    }, [activeIndex, scrollToCard, setActiveIndex])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    const handleScroll = useCallback(() => {
        const middleY = window.innerHeight / 2
        let closestIndex = -1
        let closestDistance = Infinity

        cardsRef.current.forEach((card, index) => {
            if (!card) return

            const rect = card.getBoundingClientRect()
            const cardMiddle = rect.top + rect.height / 2
            const distance = Math.abs(cardMiddle - middleY)

            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })

        if (closestIndex !== -1 && closestIndex !== activeIndex) {
            setActiveIndex(closestIndex)
        }
    }, [activeIndex])

    const handleKeyDown = useCallback((event) => {
        const { key } = event

        if (key === 'ArrowDown' && activeIndex < SKILLS_DATA.length - 1) {
            const newIndex = activeIndex + 1
            setActiveIndex(newIndex)
            scrollToCard(newIndex)
        } else if (key === 'ArrowUp' && activeIndex > 0) {
            const newIndex = activeIndex - 1
            setActiveIndex(newIndex)
            scrollToCard(newIndex)
        } else if (key === 'Escape') {
            setOpen(false);
        }
    }, [activeIndex, scrollToCard])

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
        const activeCard = cardsRef.current[activeIndex]
        if (activeCard) {
            activeCard.scrollIntoView({
                behavior: SCROLL_BEHAVIOR.SMOOTH,
                block: SCROLL_BEHAVIOR.CENTER,
            })
        }
    }, [activeIndex])

    useEffect(() => {
        const container = document.querySelector('.scroll-container')
        if (!container) return

        container.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => container.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    const renderCard = useCallback((cardData, index) => (
        <div
            key={index}
            data-index={index}
            className={`Card ${activeIndex === index ? 'active' : ''}`}
            ref={el => (cardsRef.current[index] = el)}
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
                    />
                    <p>{cardData[1].description}</p>
                </div>
            </div>
        </div>
    ), [activeIndex, handleCardClick, getAnimationClass])

    return (
        <div className='modal-overlay'>
            <div className='scroll-container'>
                <button onClick={handleClose} className="close-btn outline" aria-label="Fechar modal">
                    <IoCloseSharp size={36} color='white' />
                </button>
                <div className='Cards'>
                    {SKILLS_DATA.map((cardData, index) => renderCard(cardData, index))}
                </div>
            </div>
        </div>
    )
}

export default Card