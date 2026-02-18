import './style.css'

export function YouTubeEmbed({ }) {
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/zd2yAD5njao?si=KV8lr18fSsOvvCzJ`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
