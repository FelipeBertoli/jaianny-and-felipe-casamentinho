import React, { useState } from 'react';
import './style.css';
import pixImage from '../../assets/pix.jpeg';

export default function GiftModal({ gift, onClose }) {
    const [textToCopy] = useState("00020101021126360014br.gov.bcb.pix0114+55439916166355204000053039865802BR5921JAIANNY A M RODRIGUES6005CAMBE62070503***6304E9CA");
    
    const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
     };

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
                    <button className="card-button" onClick={handleCopy}>
                        Copiar chave pix
                    </button>
                    <img src={pixImage} alt="QR Code Pix" />
                </div>
            </div>
        </div>
    );
}