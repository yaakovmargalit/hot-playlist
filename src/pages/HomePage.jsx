import { useState, useEffect } from "react";
import { ResultsList } from "../cmps/ResultsList";
import { SearchBar } from "../cmps/SearchBar";
import { searchService } from "../services/search.servcis";

export function HomePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [resultsList, setResultsList] = useState([])

    useEffect(() => {
        (async () => {
            if(!searchTerm)return
            try {
                const res = await searchService.getPlalist(searchTerm)
                setResultsList(()=>res)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [searchTerm])

    const onSearch = term => {
        setSearchTerm(() => term)
        
    }

    return (
        <div className="home-page">
            <SearchBar onSearch={onSearch} />
            <ResultsList resultsList={resultsList} />
            {/* <iframe src="https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/shinshinobie/adele/&hide_cover=1&light=1" style={{border: "none"}}></iframe> */}
        </div>
    )
}
