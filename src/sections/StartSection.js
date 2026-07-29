import Calendario from "../components/Calendario/Calendario";
import Countdown from "../components/Countdown";
import Map from "../components/Map";
import { YouTubeEmbed } from "../components/YoutubeEmbedded";
import './style.css'

export default function DaySection() {
    return (
        <section className="start-section">
            <div className="start-content">
                <Countdown />
                <YouTubeEmbed />
                {/* <div className="day-detail">
                    <h3>Save the Date</h3>
                    <h4>Outubro de 2026</h4>
                    <Calendario />
                    {/* <span className="day-time">Às 16:00 horas</span> 
                </div> */}
                <div className="day-detail">
                      <h3>Local do Evento</h3> 
                        <text><b>Espaço Floratta</b> • Av. José Bonifácio • N° 2029 • Cambé, PR • 86181-570</text>
                        <Map/>
                    </div> 
            </div>
        </section>
    )
}