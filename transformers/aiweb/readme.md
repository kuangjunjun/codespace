# AI + 前端如何结合
图像识别 nlp任务

- transformers
    pipeline
    前端？  展示，可视化，交互


## AI 前端应用体验

- coze bot 应用图标生成
    - 以前我们需要设计师设计好图标后，我们上传
    - 设计师被KO了，LLM的AIGC帮助我们生成
        - 前端通过弹窗组件 收集名字+描述  文本内容
        - 通过ajax 传递给 LLM 生成图片（AIGC）
            - LLM 需要一些时间, loading效果很nice
        - 基于LLM的AI面前，人人平等，我们可以完成AIGC任务
        - 生成的图片存在服务器端，static 静态服务器
        - 前端拿到url 显示，完成

    - 图片上传体验
        input type=file 可定制不高, display:none, 再label for 触发

    - 本地预览，优化图片上传体验
        - 传统需要先上传到服务器，得到src才能显示，但是这样太慢了
        - html5 File(e.target.files,访问文件系统)
            FileReader(e.target.files[0]) 将文件读取到内存中
            DOM  img

- 前端 + AI结合
    - ajax + LLM api 调用coze
    - transformer.js 浏览器端
    - 浏览器加载大模型
    - await 调用接口
    - 返回结果
