1. 减少HTTP请求, 使用http2.0
2. 使用服务端渲染 (让首屏加载更快, SEO好)
3. 合理使用CDN
4. 将css放在文件头部,将js放在文件底部  <script async defer />
5. 使用精灵图 (雪花图)  --- 有效减少http请求
6. 善用缓存 (http缓存)
7. 压缩文件
8. 懒加载  <image src="xxxxxx" data-src="xxxxx" />
9. 尽量用css,字体,来代表图片    <i class='iconfont xxxx'></i>
10. 使用webp格式的图片 (更优秀的图像压缩算法)
11. webpack  tree-sharking  打包文件名+hash
12. 尽量减少回流重绘
    - 不要用js直接改css
      box.style.width = '200px'

      .more{
        width: 200px;
      }
      box.classList.add('more')

    - 如果需要对DOM执行一系列操作, 先让DOM脱离文档流, 再带回文档流中  (或者 DocumentFragment)

13. 使用事件委托

14. if-else vs  switch-case

15. 避免页面卡顿

16. 开辟多线程 (Web Worker)

17. css 选择器复杂性
18. 尽量使用flexbox   (性能好)