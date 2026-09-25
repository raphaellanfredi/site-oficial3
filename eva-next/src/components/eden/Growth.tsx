import s from "./eden.module.css";

const STAGES = [
  { stage: "Semente", text: "Você contrata." },
  { stage: "Solo", text: "Você preenche o formulário de configuração. Sem reunião." },
  { stage: "Raízes", text: "A Eva IA monta a arquitetura e treina o agente com o seu negócio." },
  { stage: "Galhos", text: "Canais conectados e bateria de validação." },
  { stage: "Fruto", text: "Especialistas validam, você aprova e a Eva entra no ar." },
];

/** The five stages of the 24-hour implementation, with the vine drawn by scroll. */
export default function Growth() {
  return (
    <div data-growth>
      <div className={s.timeline}>
        <svg className={s.vine} viewBox="0 0 40 600" preserveAspectRatio="none" aria-hidden="true">
          <path className={s.vineBase} d="M20 0 C 36 60, 4 120, 20 180 S 36 300, 20 360 S 4 480, 20 600" />
          <path className={s.vineGrow} data-vine d="M20 0 C 36 60, 4 120, 20 180 S 36 300, 20 360 S 4 480, 20 600" />
        </svg>
        <ol className={s.stages}>
          {STAGES.map((g, i) => (
            <li key={g.stage} className={s.stage} data-stage>
              <span className={s.stageNum}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className={s.stageName}>{g.stage}</p>
                <p className={s.stageText}>{g.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className={s.note}>
        As 24 horas contam a partir do pagamento e do formulário preenchido. Depois do go-live, o jardim é cuidado por 90 dias de acompanhamento.
      </p>
    </div>
  );
}
