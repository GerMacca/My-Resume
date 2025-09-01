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
        links: { github: 'https://github.com/GerMacca/My-Resume' },
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
        links: { github: 'https://github.com/GerMacca/MarketPlaceInTerminalWithJava' }
    },
    {
        title: 'TrainerDex',
        subtitle: 'Suite de telas do mesmo projeto (PokéAPI)',
        period: '2025',
        badge: 'warn',
        status: 'MVP',
        desc: ['Conjunto: Login, Landing e Pokédex.'],
        children: [
            {
                title: 'Página de Login',
                subtitle: 'Front isolado para autenticação',
                period: '2024',
                badge: 'ok',
                status: 'Finalizado',
                desc: ['Validação, animações e tema Pokémon.'],
                stack: ['HTML', 'CSS', 'JavaScript'],
                links: { github: 'https://github.com/GerMacca/LoginPage-TrainerDex' }
            },
            {
                title: 'Landing Page',
                subtitle: 'Home de apresentação',
                period: '2025',
                badge: 'info',
                status: 'Em progresso',
                desc: ['Hero, CTA e seções de recursos.'],
                stack: ['HTML', 'CSS', 'JavaScript'],
                links: { github: 'https://github.com/GerMacca/MainContent-TrainerDex' }
            },
            {
                title: 'Pokédex',
                subtitle: 'Listagem + filtros (tipo/geração/altura/peso)',
                period: '2025',
                badge: 'warn',
                status: 'MVP',
                desc: ['Cards animados e carregamento incremental.'],
                stack: ['React Vite', 'CSS', 'PokéAPI'],
                links: { github: 'https://github.com/GerMacca/MainContent-TrainerDex' }
            }
        ]
    },
];

export default function Projects() {
    return (
        <section className="box projects">
            <div className="projects-wrap">
                <h2 className="projects-title">Projetos Pessoais</h2>

                <ul className="proj-list">
                    {projects.map((p, i) => (
                        <li className={`proj-item ${p.children ? 'proj-group' : ''}`} key={i}>
                            <div className="proj-content">
                                <div className="proj-head">
                                    <h3>{p.title}</h3>
                                    <span className={`badge ${p.badge}`}>{p.status} • ({p.period})</span>
                                </div>

                                {p.subtitle && <p className="proj-sub">{p.subtitle}</p>}
                                {p.desc?.length > 0 && (
                                    <ul className="proj-desc">{p.desc.map((d, j) => <li key={j}>{d}</li>)}</ul>
                                )}

                                <div className="proj-tags">
                                    {p.stack?.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                                </div>

                                <div className="proj-actions">
                                    {p.links?.github && (
                                        <a href={p.links.github} target="_blank" rel="noopener" aria-label="GitHub">
                                            <TbBrandGithubFilled size={20} />
                                        </a>
                                    )}
                                    {p.links?.live && (
                                        <a href={p.links.live} target="_blank" rel="noopener" aria-label="Live demo">
                                            <RiExternalLinkLine size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Subitens */}
                            {p.children && (
                                <ul className="proj-sublist">
                                    {p.children.map((c, k) => (
                                        <li className="proj-subitem" key={k}>
                                            <div className="proj-head">
                                                <h4>{c.title}</h4>
                                                <span className={`badge ${c.badge}`}>{c.status} • ({c.period})</span>
                                            </div>
                                            {c.subtitle && <p className="proj-sub">{c.subtitle}</p>}
                                            {c.desc?.length > 0 && (
                                                <ul className="proj-desc">{c.desc.map((d, j) => <li key={j}>{d}</li>)}</ul>
                                            )}
                                            <div className="proj-tags">
                                                {c.stack?.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                                            </div>
                                            <div className="proj-actions">
                                                {c.links?.github && (
                                                    <a href={c.links.github} target="_blank" rel="noopener" aria-label="GitHub">
                                                        <TbBrandGithubFilled size={20} />
                                                    </a>
                                                )}
                                                {c.links?.live && (
                                                    <a href={c.links.live} target="_blank" rel="noopener" aria-label="Live demo">
                                                        <RiExternalLinkLine size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}