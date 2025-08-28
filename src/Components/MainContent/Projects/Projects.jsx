import './Projects.css';
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiExternalLinkLine } from "react-icons/ri";

const projects = [
    {
        title: 'Currículo / Portfólio',
        subtitle: 'Site pessoal em React',
        period: '2025',
        badge: 'ok',                 // ok | warn | info
        status: 'Finalizado',
        desc: [
            'Layout responsivo com grid “masonry” e cards.',
            'Animações: órbita dos ícones e anel de luz conic-gradient.',
            'Seleção de temas',
        ],
        stack: ['React Vite', 'CSS'],
        links: { github: 'https://github.com/GerMacca/My-Resume', live: '#' },
    },
    {
        title: 'Pokédex — TrainerDex',
        subtitle: 'Integração com PokéAPI',
        period: '2025',
        badge: 'warn',
        status: 'MVP',
        desc: [
            'Filtros combinados (tipo, geração, altura, peso).',
            'Cards com animações e carregamento incremental.',
            'Plano: pesquisa por filtro direto na API e tema dark.',
        ],
        stack: ['React Vite', 'CSS', 'PokéAPI'],
        links: { github: '#', live: '#' },
    },
    {
        title: 'Página de Login',
        subtitle: 'Login funcional com tema Pokémon, para complementar ao projeto da Pokédex. Apenas FrontEnd',
        period: '2024',
        badge: 'ok',
        status: 'Finalizado',
        desc: [
            'Página de login com tema Pokémon.',
            'Validação de formulário com feedback.',
            'Animações de transição e hover.',
        ],
        stack: ['HTML', 'CSS', 'JavaScript'],
        links: { github: '#', live: '#' },
    },
    {
        title: 'Mini-MarketPlace',
        subtitle: "Projeto feito em ambiete universitário",
        period: '02/2025',
        badge: 'ok',
        status: 'Finalizado',
        desc: [
            'Sistema usado apenas no Terminal',
            'Cadastro de produtos, fornecedores, clientes, pedidos e etc',
            'Sistema de Carrinho',
            'Distinção de Usuários',
            'Replicação de um Banco de Dados por meio de arquivos'
        ],
        stack: ['Java'],
        links: { github: '#', live: '#' }
    }
];

export default function Projects() {
    return (
        <section className="box projects">
            <div className="projects-wrap">
                <h2 className="projects-title">Projetos Pessoais</h2>

                <ul className="proj-list">
                    {projects.map((p, i) => (
                        <li className="proj-item" key={i}>
                            {p.cover && (
                                <div className="proj-cover">
                                    <img src={p.cover} alt={p.title} loading="lazy" />
                                </div>
                            )}

                            <div className="proj-content">
                                <div className="proj-head">
                                    <h3>{p.title}</h3>
                                    <span className={`badge ${p.badge}`}>
                                        {p.status} • ({p.period})
                                    </span>
                                </div>

                                <p className="proj-sub">{p.subtitle}</p>

                                <ul className="proj-desc">
                                    {p.desc.map((d, j) => <li key={j}>{d}</li>)}
                                </ul>

                                <div className="proj-tags">
                                    {p.stack.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                                </div>

                                <div className="proj-actions">
                                    {p.links.github && (
                                        <a href={p.links.github} target="_blank" rel="noopener" aria-label="GitHub">
                                            <TbBrandGithubFilled size={20} />
                                        </a>
                                    )}
                                    {p.links.live && (
                                        <a href={p.links.live} target="_blank" rel="noopener" aria-label="Live demo">
                                            <RiExternalLinkLine size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
