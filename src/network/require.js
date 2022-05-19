import axios from 'axios'


//没用default的原因：这只是其中一个实例，真实开发中有多个url
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        // baseURL: 'http://123.207.32.32:8000',
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    //发送网络请求
    return instance(config)
}