export const getPosts = async () => {
    const statement = `
        SELECT * FROM posts
    `
    const [data] = await connect.promise().query(statement)
}