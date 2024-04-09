// 根组件
import './Jsx.css'

const songs = [
  { id: 1, name: '庐州月' },
  { id: 2, name: '千百度' },
  { id: 3, name: '等你下课' }
]

const flag = true

const styleObj = {
  color: 'blue'
}

const showGreen = true

function App() {
  return (
    <>
      <div className="app">
        <h2>Hello React</h2>
        <ul>
          {
            songs.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
        <h3>{flag ? 'react真好玩' : 'vue真不错'}</h3>
        {/* { flag && <a href="#">哈哈哈哈</a>} */}
        {flag ? <a href="#">哈哈哈哈哈</a> : null}

        <h2 style={{ color: 'red' }}>红色字体</h2>

        <h2 style={styleObj}>蓝色字体</h2>

        <h2 className={showGreen ? 'green' : ''}>绿色字体</h2>

      </div>
      <div className="box">22222</div>
    </>
  )
}

export default App