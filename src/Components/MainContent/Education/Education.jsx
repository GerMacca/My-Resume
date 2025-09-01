import './Education.css';

const graduations = [
    {
        title: 'CETEC – Escola de Ensino Médio e Técnico',
        badge: 'ok',
        status: 'Concluído',
        period: '2021 – 2023'
    },
    {
        title: 'UCS – Universidade de Caxias do Sul',
        badge: 'warn',
        status: 'Em andamento, previsão de conclusão em 2029',
        period: 'Início em 2024',
        desc: 'Bacharelado em Ciência da Computação, atualmente no 4º semestre'
    }
];

const courses = [
    { title: 'OneBitCode', badge: 'ok', status: 'Concluído', period: '2023 – 2024' },
    { title: 'Cursos de Extensão – UCS (Microsoft MySQL)', badge: 'ok', status: 'Concluído', period: '11/2024' },
    { title: 'Cursos de Extensão – UCS (Python)', badge: 'ok', status: 'Concluído', period: '06/2024' }
];

export default function Education() {
    return (
        <section className="box education">
            <div className="education-wrap">
                <h2 className="education-title">Formações</h2>

                <ul className="edu-list">
                    {graduations.map((e, i) => (
                        <li className="edu-item" key={i}>
                            <div className="edu-content">
                                <div className="edu-head">
                                    <h3>{e.title}</h3>
                                    <span className={`badge ${e.badge}`}>
                                        {e.status}{e.period && ` • (${e.period})`}
                                    </span>
                                </div>
                                {e.desc && <p className="edu-desc">{e.desc}</p>}
                            </div>
                        </li>
                    ))}
                </ul>

                <h3 className="education-subtitle">Cursos Complementares</h3>
                <ul className="edu-list">
                    {courses.map((c, i) => (
                        <li className="edu-item" key={i}>
                            <div className="edu-content">
                                <div className="edu-head">
                                    <h3>{c.title}</h3>
                                    <span className={`badge ${c.badge}`}>
                                        {c.status} • ({c.period})
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
