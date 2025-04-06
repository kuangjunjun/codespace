import { createCrawl, createCrawlOpenAI} from 'x-crawl'
import dotenv from 'dotenv'
dotenv.config()


// 创建爬虫
const crawlApp = createCrawl({
  maxRetry: 3, // 最大重试次数
  intervalTime: { min: 1000, max: 3000 }, // 请求间隔时间
})

// 创建OpenAI爬虫
const crawlOpenAI = createCrawlOpenAI({
  clientOptions: {
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: process.env.OPENAI_API_BASE_URL,
  },
  defaultModel: { chatModel: 'gpt-4o'}
})

crawlApp.crawlPage('https://movie.douban.com/chart').then(async(res) => {
  // console.log(res)
  const { page, browser} = res.data

  // 获取页面内容
  const targetSelector = '.article'
  await page.waitForSelector(targetSelector)
  const highlyHTML = await page.$eval(targetSelector, (el) => el.innerHTML)
  // console.log(highlyHTML)

  // 让ai解析出我们要的数据
  const result = await crawlOpenAI.parseElements(
    highlyHTML,
    `获取电影评分，将评分不小于 8.0 的电影的图片链接、电影名称、电影的上映时间，电影评分获取到。
    输出格式为 JSON 数组。如：
    [
      {
        "image": "https://img.com/1.jpg",
        "name": "电影名称",
        "time": "上映时间",
        "score": "评分"
      }
    ]`
  )

  browser.close()
  console.log(result)

})
