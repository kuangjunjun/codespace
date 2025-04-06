import OpenAI from "openai"
import dotenv from "dotenv"
import http from "http"

dotenv.config()  // 让 node 运行时去读取.env中的内容
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE_URL
})

// 连接大模型 LLM
const getCompletion = async (prompt) => {
    // 用户说的话
    const message = [{
        role: 'user',
        content: prompt,
    }]
    // chat
    const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: message,
        temperature: 0.1
    })
    return response.choices[0].message.content  
}

// 跟ai交互
const main = async (message) => {
    const user_message = message
    const prompt = `请帮我翻译以下的文字到英文, "${user_message[0]}"`
    const result = await getCompletion(prompt)
    return result
}

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        "access-control-allow-origin": '*'
    })
    
    // 获取到前端的参数
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams
    const inputText = query.get('inputText')

    const message = [
        inputText
    ]
    const result = await main(message)
    res.end(result)
})

server.listen(3000, () => {
    console.log('后端已经运行在3000端口'); 
})