import { useEffect, useState } from "react";

export function ImageContainer(props) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const [isPlay, setIsPlay] = useState(false)

    const onTogglePlayer = () => {
        setIsPlay(preState => !preState)
    }
    return (
        <div className="image-container">
            <div className="main-img">
                <img onClick={onTogglePlayer} src={params.img} alt="" />
                {!isPlay && <div className="img-cover" onClick={onTogglePlayer}>Click to play</div>}
            </div>
            {isPlay &&
                <iframe id="mixcloud-iframe" allow="autoplay" src={`https://www.mixcloud.com/widget/iframe/?feed=${params.url}&hide_cover=1&light=0&autoplay=1`} frameborder="0" ></iframe>}
        </div>
    )
}
