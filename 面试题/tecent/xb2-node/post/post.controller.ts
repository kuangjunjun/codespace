import {
    getPosts
} from './post.service'

export const index = async () => {
    try {
        // model
        const posts = await getPosts({

        })
        Response.send(posts)
    } catch (err) {
        
    }
}