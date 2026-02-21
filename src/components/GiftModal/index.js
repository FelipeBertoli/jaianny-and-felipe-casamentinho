import './style.css';
import pixImage from '../../assets/pix.jpeg';

export default function GiftModal({ gift, onClose }) {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-button" onClick={onClose}>
                    ✕
                </button>

                <img src={gift.image} alt={gift.name} />

                <h2>{gift.name}</h2>
                <span>{gift.value}</span>

                <div className="pix-section">
                    <span>PIX</span>
                    <img src={pixImage} alt="QR Code Pix" />
                </div>
            </div>
        </div>
    );
}