import { request } from "./require";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}