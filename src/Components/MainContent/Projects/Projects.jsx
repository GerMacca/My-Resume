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
            'Grid responsivo com cards objetivos.',
            'Acesso rápido a projetos e perfis.',
            'Contato facilitado e currículo (PDF) para download/impressão.'
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
        subtitle: 'Telas de um mesmo projeto',
        period: '2025',
        badge: 'warn',
        status: 'MVP',
        desc: ['Páginas de Login, Inicial e Pokédex desenvolvidas no meu primeiro projeto; cada uma usa tecnologias diferentes e está em processo de integração para formar um único site.'],
        children: [
            {
                title: 'Página de Login',
                subtitle: 'Apenas FrontEnd por enquanto',
                period: '2024',
                badge: 'warn',
                status: 'Em progresso',
                desc: ['Tela de login com UX agradável', 'Autentificação em produção'],
                stack: ['HTML', 'CSS', 'JavaScript'],
                links: { github: 'https://github.com/GerMacca/LoginPage-TrainerDex' }
            },
            {
                title: 'Página Inicial',
                subtitle: 'Página de apresentação',
                period: '2025',
                badge: 'warn',
                status: 'Em progresso',
                desc: [
                    'Apresenta o objetivo do site.',
                    'Direciona o visitante para o conteúdo principal.',
                    'Traz introdução com imagem temática e seção sobre o projeto.',
                    'UX: navegação clara e acessível (inclusive por teclado).'
                ],
                stack: ['HTML', 'CSS', 'JavaScript'],
                links: { github: 'https://github.com/GerMacca/MainContent-TrainerDex' }
            },
            {
                title: 'Pokédex',
                subtitle: 'Listagem + filtros',
                period: '2025',
                badge: 'warn',
                status: 'Em progresso',
                desc: [
                    'Cards animados com informações principais.',
                    'Carregamento animado.',
                    'Filtros combináveis.'
                ],
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