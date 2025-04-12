// 前端 调用 Coze API 的示例代码

const endpoint = 'https://api.coze.cn/open_api/v2/chat'

const payload = {
  bot_id: '7492336932509515785',
  user: 'vae',
  query: '你好',
  chat_history: [],
  stream: false,
  custom_variables:{
    prompt: '你是一个 AI助手',
  }
}

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_COZE_API_KEY}`,
  },
  body: JSON.stringify(payload),
})

const data = await response.json()

document.getElementById('reply').textContent = data.messages[0].content