import axios from "axios"
export const searchService = {
    getPlalist
}
async function getPlalist(term) {
    try {
        const res = await axios.get(`https://api.mixcloud.com/search/?q=${term}&type=cloudcast`)
        return _resForList(res.data.data)
    } catch (error) {
    }
}

function _resForList(data) {
    return data.map((item, idx) => ({
        name: item.name,
        img: item.pictures["320wx320h"],
        url: item.url
    })
    )
}