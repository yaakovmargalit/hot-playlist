import { useForm } from '../hooks/useForm'


export function SearchBar(props) {

    const [searchTerm, handleChange] = useForm({
        term: ''
    })

    const onSearchGo = (e) => {
        e.preventDefault()
        props.onSearch(searchTerm.term)
    }

    const { term } = searchTerm
    return (
        <div>
            <form onSubmit={onSearchGo}>
                <input onChange={handleChange} value={term} type="text" name="term" id="term" />
                <button>Go</button>
            </form>
        </div>
    )
}
