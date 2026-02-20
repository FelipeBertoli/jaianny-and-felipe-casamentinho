import './style.css';

function GiftCard({ gift, onBuy }) {
  return (
    <div className="card">
      <img src="https://drive.google.com/thumbnail?id=1I-J1s0sLOOAVSVDBhawtVSSuiSTrp6cJ" alt={gift.name} />
      <div className="card-content">
        <h3>{gift.name}</h3>
        <span>{gift.value}</span>
        <button
          onClick={() => onBuy(gift.id)}
          disabled={gift.status === "adquirido"}
        >
          Presentear
        </button>
      </div>
    </div>
  );
}

export default GiftCard;
