function ajax(type, url, data){
    let xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.send(data)
    xhr.onreadystatechange = function(){

    }
}

// 参数冗余
ajax('POST', 'www.test.com', 'name=awei')
ajax('POST', 'www.test2.com', 'name=awei')
ajax('POST', 'www.test3.com', 'name=awei')

// 柯里化
let ajaxCurry = curry(ajax)
let post = ajaxCurry('POST')
// post('www.test.com', 'name=awei')
let postData = post('www.test.com')
postData('name=awei')
postData('name=zijun')