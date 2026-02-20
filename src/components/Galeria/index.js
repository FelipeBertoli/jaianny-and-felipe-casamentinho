import { useMemo, useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import galleryData from "../../assets/gallery.json";
import "./style.css";

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function Gallery() {
    const gridRef = useRef(null);

    const randomImages = useMemo(
        () => shuffle(galleryData.gallery.map(item => item.link)),
        []
    );

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const msnry = new Masonry(grid, {
            itemSelector: ".grid-item",
            percentPosition: true,
            gutter: 8,
        });

        imagesLoaded(grid).on("progress", function () {
            msnry.layout();
        });

        return () => msnry.destroy();
    }, []);

    return (
        <div>
            <h3 className="gallery-title">Galeria de Fotos</h3>
            <div className="grid" ref={gridRef}>
                {randomImages.map((src, i) => (
                    <div className="grid-item" key={i}>
                        <img src={src} alt={`Foto ${i}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}