# 1. 不做任何操作，直接渲染

# 2. setTimeout
 dom结构渲染和页面的刷新率不同步造成闪烁

# 3. requestAnimationFrame  + fragment    (时间分片)
 浏览器不需要一次性渲染上万条数据


 # 虚拟列表
1. 拿到上万条数据
2. 获取可视区域的高度
3. 滚动页面过程中实时计算可视区域内可以展示的数据 起始下标和 结束下标， 去原数组中截取要展示的数据
