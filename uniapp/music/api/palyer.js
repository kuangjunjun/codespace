import baseUrl from './request.js'

// 我的页面的所有接口
export const apiGetSongUrl = (id) => {
	return uni.request({
		url: `${baseUrl}/url/v1`,
		method: 'GET',
		data: {
			id: id,
			level: 'jymaster'
		}
	})
}
