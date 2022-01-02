import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function ImageContainer(props) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());    console.log(params);
    return (
        <div className="image-container">
            <img src={params.img} alt="" />
            <iframe src={`https://www.mixcloud.com/widget/iframe/?feed=${params.url}&hide_cover=1&light=1`} style={{ border: "none" }}></iframe>
        </div>
    )
}
