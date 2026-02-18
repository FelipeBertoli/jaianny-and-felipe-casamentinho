import './style.css';

function GiftCard({ gift, onBuy }) {
  return (
    <div className="card">
      <img src={gift.image} alt={gift.name} />

      <h3>{gift.name}</h3>

      <a href={gift.link} target="_blank" rel="noreferrer">
        Ver presente
      </a>

      <button
        onClick={() => onBuy(gift.id)}
        disabled={gift.status === "adquirido"}
      >
        {gift.status === "adquirido"
          ? "Já adquirido"
          : "Marcar como adquirido"}
      </button>
    </div>
  );
}

export default GiftCard;
