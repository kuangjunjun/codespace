import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'

class MovieStore {
    movieList = []
    constructor() {
        makeAutoObservable(this)
    }

    async setMovieList() {
        const res = await axios.get('https://mock.presstime.cn/mock/65a9154bb02591272cc21c5a/movie/movieList')
        console.log(res.data.movieList);
        runInAction(() => {
            this.movieList = res.data.movieList
        })
    }

}

const movieStore = new MovieStore()

export default movieStore