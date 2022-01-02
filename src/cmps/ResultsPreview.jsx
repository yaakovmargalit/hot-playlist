import { Link } from "react-router-dom";

export function ResultsPreview(props) {
    const {resultsItem , isListMode}= props
    return (
        <div className={`results-preview ${isListMode? 'list-mode':'grid-mode'}`}>
            <Link to={{pathname: `/player`, query: {...resultsItem  }}}>
                <p>{resultsItem.name}</p>
                <img src={resultsItem.img} alt="" />
            </Link>
        </div>
    )
}
