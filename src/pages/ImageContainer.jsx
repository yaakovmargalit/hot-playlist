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
            <img onClick={onTogglePlayer} src={params.img} alt="" />
            {isPlay &&
                <iframe src={`https://www.mixcloud.com/widget/iframe/?feed=${params.url}&hide_cover=1&light=1`} style={{ border: "none", backgroundColor: 'transparent' }}></iframe>}
        </div>
    )
}
