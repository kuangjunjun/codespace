import OpenAI from "openai/index.mjs";

// 在运行环境中读取 github 的 token
const token = process.env['GITHUB_TOKEN']   // token存储到环境变量中了
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

async function main() {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token})

    const response = await client.chat.completions.create({
        model: modelName,
        temperature: 1.0,
        max_tokens: 1000,
        top_p: 1.0,
        messages: [
            {role: 'system', content: '你是一个语文老师'},
            {role: 'user', content: '我小孩语文考试只考了 60 分， 我要怎么提高他的成绩'}
        ]
    })

    console.log(response.choices[0].message.content);
}

main()