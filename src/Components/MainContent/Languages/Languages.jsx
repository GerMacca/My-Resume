import './Languages.css';

const languages = [
  {
    title: 'Português - 🇧🇷 ',
    subtitle: 'Língua nativa',
    period: '—',
    badge: 'ok',                // ok | warn | info
    status: 'Principal',
    desc: [
      'Leitura, escrita e conversação.',
      'Vocabulário técnico (TI / ERP).',
    ],
    stack: ['Nativo'],
  },
  {
    title: 'Inglês - 🇬🇧',
    subtitle: 'Compreensão intermediária-avançada',
    period: '—',
    badge: 'info',
    status: 'Língua secundária',
    desc: [
      'Leitura técnica diária (docs)',
      'Conversação',
      'Escrita',
    ],
    stack: ['B2', 'Intermediário-Avançado'],
  }
];

export default function Languages() {
  return (
    <section className="box languages">
      <div className="languages-wrap">
        <h2 className="languages-title">Idiomas</h2>

        <ul className="lang-list">
          {languages.map((l, i) => (
            <li className="lang-item" key={i}>
              <div className="lang-content">
                <div className="lang-head">
                  <h3>{l.title}</h3>
                  <span className={`badge ${l.badge}`}>
                    {l.status} {l.period !== '—' && <>• ({l.period})</>}
                  </span>
                </div>

                <p className="lang-sub">{l.subtitle}</p>

                <ul className="lang-desc">
                  {l.desc.map((d, j) => <li key={j}>{d}</li>)}
                </ul>

                <div className="lang-tags">
                  {l.stack.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
