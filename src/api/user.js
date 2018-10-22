import axios from 'axios'
import { base } from './base'

//登录
console.log(base)
export const signin = params => { return axios.post(`${base}/user/signin`, params)}

//注册
export const signup = params => { return axios.post(`${base}/user/signup`, params)}

//退出
export const logout = params => { return axios.post(`${base}/logout`, params)}
