// 将以下json转成HTML
// ```js
// var json = {
//     tag: 'div',
//     props: {
//        class: 'container'
//     },
//     children: [
//         'a text',
//         {
//             tag: 'img',
//             props: {
//               src: 'img-src',
//               class: 'portrait'
//             }
//         }
//         'an other text'
//     ]
// }
// ```

// 以及增加tag白名单和属性白名单，不在白名单里的 tag 进行报错，不在白名单里的属性进行忽略。

// ```js
// whiteList = {
//     'div': ['class'],
//     'img': ['class', 'src']
// }

var json = {
    tag: 'div',
    props: {
       class: 'container'
    },
    children: [
        'a text',
        {
            tag: 'img',
            props: {
              src: 'img-src',
              class: 'portrait'
            }
        },
        'an other text'
    ]
};

var whiteList = {
    'div': ['class'],
    'img': ['class', 'src']
};

function jsonToHtml(json, whiteList) {
    if (!whiteList[json.tag]) {
        throw new Error(`${json.tag} is not in whiteList`)
    }
    let propsString = ''
    if (json.props) {
        for (let prop in json.props) {
            if (whiteList[json.tag].includes(prop)) {
                propsString += ` ${prop}="${json.props[prop]}"`
            }
        }
    }
    let htmlString = `<${json.tag}${propsString}>`
    if (json.children) {
        json.children.forEach(child => {
            if (typeof child === 'string') {
                htmlString += child
            } else if (typeof child === 'object') {
                htmlString += jsonToHtml(child, whiteList)
            }
        })
    }
    htmlString += `</${json.tag}>`
    return htmlString
}

console.log(jsonToHtml(json, whiteList));
