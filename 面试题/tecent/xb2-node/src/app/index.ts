import express from 'express'
const app = express()

app.use(express.json()) // post

app.use(currentUser)  // 获取当前用户

app.use(cors({  // 跨域资源共享

}))

app.use(   // 路由
    postRouter,
    useRouter,
    ...
)

// 默认异常处理  稳定
app.use(defaultErrorHandler)

app.listen(3000)