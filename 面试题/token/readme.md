# token  (令牌)

- cookies 是浏览器的内存空间，但是受后端的掌控，后端将登录令牌保存在 cookies 中，所有被保存在cookies
中的数据，都会在http请求时自动被携带在请求头当中

- 由   头部 - 负载 - 签名


- 前端登陆后， 后端校验账号密码成功后，会生成一个token，靠JWT来生成一个token，并将该token返回给前端，前端在接收到
token后，将token保存在浏览器本地缓存，封装了axios,在请求拦截中为每一次请求中添加一个Authorization字段，之后的接口
请求，后端获取到请求头中的token并进行校验，如果token合法则返回数据，否则返回401状态码，告诉前端token失效