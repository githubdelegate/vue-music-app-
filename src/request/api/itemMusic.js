import service from "..";

export function getPlayListDetail(id) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`
    })
}