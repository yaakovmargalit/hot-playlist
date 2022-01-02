import { Link } from "react-router-dom";

export function ResultsPreview(props) {
    const {resultsItem}= props
    return (
        <div className="results-preview">
            <Link to={{
                pathname: '/player',
                playerProps: {...resultsItem}
            }}>
                <h4>{resultsItem.name}</h4>
            </Link>
        </div>
    )
}
