import { useState } from "react";

export function ImageContainer() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const [isPlay, setIsPlay] = useState(false)

    const onTogglePlayer = () => {
        setIsPlay(preState => !preState)
    }

    // Check the theme for the player background
    const isLightMode = document.body.classList.contains('light-mode') ? '1' : '0'

    return (
        <div className="image-container">
        {/* The picture with the cover. When you press the cover, a player appears */}
            <div className="main-img">
                <img onClick={onTogglePlayer} src={params.img} alt="" />
                {!isPlay && <div className="img-cover" onClick={onTogglePlayer}>Click to play</div>}
            </div>
            {isPlay &&
                <iframe allow="autoplay" src={`https://www.mixcloud.com/widget/iframe/?feed=${params.url}&hide_cover=1&light=${isLightMode}&autoplay=1`} frameBorder="0" ></iframe>}
        </div>
    )
}
