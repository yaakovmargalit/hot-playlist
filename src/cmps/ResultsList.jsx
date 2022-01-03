import { ResultsPreview } from "./ResultsPreview";

export function ResultsList(props) {
    console.log(props);
   if(!props.resultsList.length) return <div className="empty-msg">Search something to play ...</div>
    return (
        <div className={` ${props.isListMode? 'list-mode-for-list':'grid-mode-for-list'}`}>
            {props.resultsList.map(resultsItem => <ResultsPreview isListMode={props.isListMode} resultsItem={resultsItem} key={resultsItem.url} />)}
        </div>
    )
}
