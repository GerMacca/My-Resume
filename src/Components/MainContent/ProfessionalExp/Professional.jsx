import './Professional.css';

const experiences = [
    {
        title: 'Estagiário & Desenvolvedor Júnior — ERP',
        company: 'Datalan Sistemas de Gestão',
        period: '07/2024 — Atual',
        badge: 'ok', // ok | warn | info
        status: 'Atual',
        bullets: [
            'Evolução e manutenção de áreas chave do ERP (operacional, fiscal e comercial)',
            'Integrações API: SendPulse (e-mail transacional) e Google Calendar (agendamentos).',
            'Relatórios e exportações Excel/CSV.',
            'Consultas e otimizações em Firebird SQL (índices, validações, NCMs e etc).',
            'Suporte técnico ao cliente',
            'Conhecimentos em contabilidade e legislação fiscal.',
        ]
    }
];

export default function Professional() {
    return (
        <section className="box professional">
            <div className="professional-wrap">
                <h2 className="professional-title">Experiências Profissionais</h2>

                <ul className="prof-list">
                    {experiences.map((exp, i) => (
                        <li className="prof-item" key={i}>
                            <div className="prof-head">
                                <h3>{exp.title}</h3>
                                <span className={`badge ${exp.badge}`}>
                                    {exp.status} • ({exp.period})
                                </span>
                            </div>
                            <p className="prof-sub">{exp.company}</p>
                            <ul className="prof-bullets">
                                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
