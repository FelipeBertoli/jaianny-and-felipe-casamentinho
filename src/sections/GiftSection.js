import './style.css';
import giftsData from '../assets/gifts.json';
import amazonLogo from '../assets/amazon.png';
import { useState } from 'react';
import GiftCard from '../components/GiftCard/GiftCard';


export default function GiftSection() {
    const [gifts, setGifts] = useState(giftsData.gifts);
    const markAsBought = (id) => {
        setGifts(prev =>
            prev.map(gift =>
                gift.id === id
                    ? { ...gift, status: "adquirido" }
                    : gift
            )
        );
    };

    return (
        <section className="gift-section">

            <div className="gift-content">
                <h2>Lista de Presentes</h2>
                <text>Sua presença já é um presente para nós.
                    Mas, caso queira nos ajudar a começar essa nova etapa, reunimos algumas ideias com muito carinho.</text>
                <a className="amazon-button" href="https://www.amazon.com.br/hz/wishlist/ls/BG0JHX983ERU?ref_=wl_share" target="_blank" rel="noopener noreferrer">
                    <img src={amazonLogo} alt="Amazon Logo" className="amazon-logo" />
                    <span className="amazon-text">Acessar Lista da Amazon</span>
                </a>

                <div className="gift-list">
                    {gifts.map(gift => (
                        <GiftCard
                            key={gift.id}
                            gift={gift}
                            onBuy={markAsBought}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}