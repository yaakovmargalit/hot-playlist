import axios from "axios"
import { storageService } from "./storageService"
export const searchService = {
    getPlalist,
    saveRecentSearches
}
// Gets the data from "mixcloud"
async function getPlalist(term) {
    try {
        const res = await axios.get(`https://api.mixcloud.com/search/?q=${term}&type=cloudcast`)
        return _resForList(res.data.data)
    } catch (error) {
    }
}
// Entering 5 last searches
function saveRecentSearches(term){
    if(!storageService.load('recent-searches')){
        storageService.store('recent-searches',[])
    }
    var recentSearches = storageService.load('recent-searches')
    if(recentSearches.includes(term)) return
    if(recentSearches.length>=5) recentSearches.pop()
    recentSearches.unshift(term)
    storageService.store('recent-searches',recentSearches)
}

function _resForList(data) {
    return data.map((item, idx) => ({
        name: item.name,
        img: item.pictures["320wx320h"],
        url: item.url
    })
    )
}