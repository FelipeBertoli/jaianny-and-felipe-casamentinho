import './style.css'
import Calendario from "../components/Calendario/Calendario";

export default function DaySection() {
    return (
        <section className="day-section">
            <div className="day-content">
                <h2>A Cerimônia</h2>
                <div className="day-details">
                    <div className="day-detail">
                        <h3>Save the Date</h3>
                        <h4>Outubro de 2026</h4>
                        <Calendario />
                        {/* <span className="day-time">Às 16:00 horas</span> */}
                    </div>
                    {/* <div className="day-detail">
                      <h3>Local do Evento</h3> 
                        <text><b>Espaço Floratta</b> • Av. José Bonifácio • N° 2029 • Cambé, PR • 86181-570</text>
                        <Map />
                    </div> */}
                </div>
                {/* 

                <img src={lineArt} className="day-image" /> */}
            </div>
        </section>
    )
}