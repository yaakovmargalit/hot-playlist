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
            <form className='search-bar' onSubmit={onSearchGo}>
                <input placeholder='Search...' onChange={handleChange} value={term} type="text" name="term" id="term" />
                <button className='search-btn'>Go</button>
            </form>
    )
}
