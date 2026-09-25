import s from "./eden.module.css";

/** The 24-hour guarantee seal. */
export default function Guarantee() {
  return (
    <div className={s.guarantee} data-fade>
      <span className={s.seal} aria-hidden="true">24h</span>
      <p>
        <strong>Garantia 24 horas</strong>
        Se a sua IA não estiver no ar em até 24 horas depois do pagamento e do formulário preenchido, a implantação é por nossa conta.
      </p>
    </div>
  );
}
