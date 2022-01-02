import { Link } from "react-router-dom";

export function ResultsPreview(props) {
    const {resultsItem}= props
    return (
        <div className="results-preview">
            <Link to={{pathname: `/player`, query: {...resultsItem  }}}>
                <h4>{resultsItem.name}</h4>
                <img src={resultsItem.img} alt="" />
            </Link>
            {/* <Link to={{
                pathname: '/player',
                playerProps: {...resultsItem}
            }}>
                <h4>{resultsItem.name}</h4>
                <img src={resultsItem.img} alt="" />
            </Link> */}
        </div>
    )
}
