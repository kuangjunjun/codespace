import OpenAI from "openai/index.mjs";
import fs from "fs"

// 在运行环境中读取 github 的 token
const token = process.env['GITHUB_TOKEN']   // token存储到环境变量中了， 防止token被别人使用
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

function getImageDataUrl(imgUrl, imgFormat){
    const imageBuffer = fs.readFileSync(imgUrl)
    const imageBase64 = imageBuffer.toString('base64')
    return `data:image/${imgFormat};base64,${imageBase64}`
}

async function main() {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token})

    const response = await client.chat.completions.create({
        model: modelName,
        temperature: 1.0,
        max_tokens: 1000,
        top_p: 1.0,
        messages: [
            {role: 'system', content: '你是一个详细描述图片的好帮手'},
            {role: 'user', content: [
                {type: 'text', text: '这张图片有什么？'},
                {type: 'image_url', image_url: {
                    url: getImageDataUrl("./test.jpg", "jpg"),
                    detail: 'low'
                }}
            ]}
        ]
    })

    console.log(response.choices[0].message.content);
}

main()