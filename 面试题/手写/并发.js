function A() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('A')
    }, 1);
  })
}

function B() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('B')
    }, 3);
  })
}

function C() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('C')
    }, 2)
  })
}

let urls = [A, B, C]

function fetchUrl(urls, num) {
  return new Promise((reslove, reject) => {
    let result = []
    let complete = 0
    let index = 0

    function Request() {
      if (index >= urls.length) return
      let currentIndex = index
      index++

      let url = urls[currentIndex]
      url().then(res => {
        complete++
        result[currentIndex] = res
        if (complete === urls.length) {
          reslove(result)
        } else {
          Request()
        }
      })
    }

    for (let i = 0; i < num; i++){
      Request()
    }
  })
}

fetchUrl(urls, 2).then(
  res => console.log(res)
)