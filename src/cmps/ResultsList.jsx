import { ResultsPreview } from "./ResultsPreview";

export function ResultsList(props) {
   if(!props.resultsList) return <div><img src={require('../assets/imgs/loading.gif')} alt="ede" /></div>
    return (
        <div className={` ${props.isListMode? 'list-mode-for-list':'grid-mode-for-list'}`}>
            {props.resultsList.map(resultsItem => <ResultsPreview isListMode={props.isListMode} resultsItem={resultsItem} key={resultsItem.url} />)}
        </div>
    )
}
