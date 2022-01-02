
export function ListControls(props) {
    return (
        <div>
            <button onClick={props.onNextResults}>====next</button>
            <span onClick={()=>props.onChangeMode(false)} class="material-icons ">
                grid_view
            </span>
            <span onClick={()=>props.onChangeMode(true)} class="material-icons">
                format_list_bulleted
            </span>
        </div>
    )
}
