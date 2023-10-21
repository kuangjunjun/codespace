//读取用户屏幕第一行放了多少张图
//操作下一张图，找到上一行最矮的高度，将图片排放到其下方
imgLocation('container', 'box')
function imgLocation(parent, content) { //当前有多少张图要摆放
    var cparent = document.getElementById(parent)
    var ccontent = getChildElement(cparent, content)
    var imgWidth = ccontent[0].offsetWidth
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    cparent.style.cssText = `width: ${imgWidth * num}`
   
}

function getChildElement(parent, content) {
    var contetArr = []
    var allContent = parent.getElementsByTagName('*')
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contetArr.push(allContent[i])
        }
    }
    return contetArr
}