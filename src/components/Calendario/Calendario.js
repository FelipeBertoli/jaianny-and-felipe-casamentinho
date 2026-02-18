import "./style.css";

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function Calendario() {
  const diasNoMes = 31;
  const inicioSemana = 4; // quinta-feira
  const diaSelecionado = 11;

  const dias = [
    ...Array(inicioSemana).fill(null),
    ...Array.from({ length: diasNoMes }, (_, i) => i + 1),
  ];

  return (
    <div className="calendario">
      <div className="semana">
        {diasSemana.map((dia, index) => (
          <span key={index}>{dia}</span>
        ))}
      </div>

      <div className="dias">
        {dias.map((dia, index) => (
          <span
            key={index}
            className={`dia ${
              dia === diaSelecionado ? "ativo" : ""
            } ${dia === null ? "vazio" : ""}`}
          >
            {dia}
          </span>
        ))}
      </div>
    </div>
  );
}
