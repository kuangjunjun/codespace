// 使用 deepseek 基于 http 协议的 API
const endpoint = 'https://api.deepseek.com/chat/completions'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
}

const payload = {
    model: 'deepseek-chat',
    messages: [
        { role: 'system', content: '你是一个非常有帮助的助手' },   // assistant 角色
        { role: 'user', content: '你好，Deepseek'}
    ],
    stream: false  // 不使用流式响应
}

const response = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
})

const data = await response.json()  // 解析JSON响应
document.getElementById('reply').textContent = data.choices[0]?.message?.content