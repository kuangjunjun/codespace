# 全新项目技术栈

- ts
- echarts 百度开源的2D数据可视化
- hooks 
   - 函数式编程
   - 将状态， 生命周期等封装到函数中，提升了项目的复用
      useStore  useRouter  useRoute  defineStore
      (useTodoList)
   - vueuse 第三方的状态管理
      useLocalization   useMemory ...
   - 自定义hook
      自定了useResize、useLocalStorage等hook函数, 提升组件复用
      - 如果不封装, onMounted onUnmounted  生命周期函数挺复杂的, 都在重复
      - 定时器，事件处理器等 在组件卸载后，要移除，不然会带来内存泄露

- 项目亮点
   - 介绍项目架构
      - utils   js 功能函数复用  dry  don't repeat yourself
         直接拿到下个项目中去  防抖节流，格式化数据  (92.118),
      - 公用css 文件放入到assets/css/
         大型项目需要 index.css reset.css variable.css
      - hooks
         有状态函数, 将组件的状态逻辑也可以复用, 加速UI组件化
         loading....  useRequest  vueuse
         request
         显示组件
      - 适配
         - rem
            - em vw
         - onDomContentLoaded 设置html fontSize
            设计稿 px   蓝湖
         - 1920 移动端适配， 大屏适配