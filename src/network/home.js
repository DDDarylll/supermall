//文件作用，对首页所有url的请求做一个统一的管理

import { request } from "./require";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}