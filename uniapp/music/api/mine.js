import baseUrl from './request.js'

// 首页的接口请求
export const apiGetUserInfo = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/detail`,
		method: 'GET',
		data: {
			uid: uid
		}
	})
}