import './style.css';
export default function Map() {
    return (
        <div className="map-container">
            <iframe
                title="Mapa do local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.774962324828!2d-51.30704392467816!3d-23.287625278988866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb59ddf5327431%3A0xd731ecffa1d1c4b2!2sESPA%C3%87O%20FLORATTA!5e0!3m2!1spt-BR!2sbr!4v1767566985718!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
