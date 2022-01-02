import { ResultsPreview } from "./ResultsPreview";

export function ResultsList(props) {
    if(!props.resultsList)return <div>Loading...</div>
    return (
        <div>
            {props.resultsList.map(resultsItem => <ResultsPreview resultsItem={resultsItem} key={resultsItem.url} />)}
        </div>
    )
}
