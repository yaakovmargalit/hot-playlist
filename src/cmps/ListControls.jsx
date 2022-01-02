
export function ListControls(props) {
    return (
        <div className="list-controls ">
            <div className="container">
                <span title="Next Results" onClick={props.onNextResults} className="material-icons ">
                    skip_next
                </span>
                <div>
                    <span title="Grid View" onClick={() => props.onChangeMode(false)} className="material-icons ">
                        grid_view
                    </span>
                    <span title="List View" onClick={() => props.onChangeMode(true)} className="material-icons">
                        format_list_bulleted
                    </span>
                </div>
            </div>
        </div>
    )
}
