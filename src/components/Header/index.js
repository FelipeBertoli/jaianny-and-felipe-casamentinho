import React, { useEffect, useState } from 'react';
import logoBranca from '../../assets/icone-branco.png';
import logoPreta from '../../assets/icone-vermelho.png';
import './style.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">

                <img
                    src={scrolled ? logoPreta : logoBranca}
                    alt="Logo"
                    className="app-logo"
                />

                <nav className="app-nav" aria-label="Main navigation">
                    <a className={`header-item ${scrolled ? 'scrolled' : ''}`} href="#start">Início</a>
                    {/* <a className={`header-item ${scrolled ? 'scrolled' : ''}`} href="#rsvp">Cerimônia</a> */}
                    <a className={`header-item ${scrolled ? 'scrolled' : ''}`} href="#gifts">Presentes</a>
                      <a className={`header-item ${scrolled ? 'scrolled' : ''}`} href="#gallery">Galeria</a>
                </nav>

                <img alt="Logo" className="app-logob" />
            </div>
        </header>
    );
}
