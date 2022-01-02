import { storageService } from "../services/storageService"

export function RecentSearches() {
    const recentSearches = storageService.load('recent-searches',[])
    return (
        <div>
            {recentSearches.map((item,idx)=><div key={item+idx}>{item}</div>)}
        </div>
    )
}
