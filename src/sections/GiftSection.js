import './style.css';
import amazonLogo from '../assets/amazon.png';
import giftsData from '../assets/gifts.json';
import { useState } from 'react';
import GiftCard from '../components/GiftCard/GiftCard';
import GiftModal from '../components/GiftModal';

export default function GiftSection() {

    const [selectedGift, setSelectedGift] = useState(null);

    return (
        <section className="gift-section" id="gifts">
            <div className="gift-content">
                <h2>Lista de Presentes</h2>

                <span>
                    Sua presença já é um presente para nós.
                    Mas, caso queira nos ajudar a começar essa nova etapa,
                    reunimos algumas ideias com muito carinho.
                </span>

                <a
                    className="amazon-button"
                    href="https://www.amazon.com.br/hz/wishlist/ls/BG0JHX983ERU?ref_=wl_share"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={amazonLogo} alt="Amazon Logo" className="amazon-logo" />
                    <span className="amazon-text">Acessar Lista da Amazon</span>
                </a>

                <div className="gift-list">
                    {giftsData.gifts.map(gift => (
                        <GiftCard
                            key={gift.id}
                            gift={gift}
                            onSelect={setSelectedGift}
                        />
                    ))}
                </div>
            </div>

            {selectedGift && (
                <GiftModal
                    gift={selectedGift}
                    onClose={() => setSelectedGift(null)}
                />
            )}
        </section>
    );
}