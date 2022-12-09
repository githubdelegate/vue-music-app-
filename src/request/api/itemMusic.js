import service from "..";

export function getPlayListDetail(id) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`
    })
}

export function getMusicList(id) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${id}&limit=10&offset=1`
    })
}