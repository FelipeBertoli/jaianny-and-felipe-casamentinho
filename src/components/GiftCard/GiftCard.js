import './style.css';
function GiftCard({ gift, onSelect }) {
  return (
    <div className="card">
      <img src={gift.image} alt={gift.name} />

      <div className="card-content">
        <h3>{gift.name}</h3>
        <span>{gift.value}</span>

      <button className="card-button" onClick={() => onSelect(gift)}>
          Presentear
        </button>
      </div>
    </div>
  );
}

export default GiftCard;