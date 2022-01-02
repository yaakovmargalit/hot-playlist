import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom"

export function ImageContainer(props) {
    const { query, search } = useLocation();
    console.log(query);
    return (
        <div>
            <img src={query.img} alt="" />
            <iframe src={`https://www.mixcloud.com/widget/iframe/?feed=${query.url}&hide_cover=1&light=1`} style={{ border: "none" }}></iframe>
        </div>
    )
}
