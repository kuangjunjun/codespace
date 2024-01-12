import http from './http';
import type { searchHotDetail } from '@/models/search';

export async function getSearchHotDetail() {
    const { data } = await http.get<{data: searchHotDetail[]}>('/search/hot/detail')
    return data
}

export async function getSearchSuggest(keywords: string) {
    const { result } = await http.get('/search/suggest',
     { keywords: keywords })
    return result
}