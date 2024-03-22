// 如何判断两个对象是否相等

function equal(v1, v2) {
    if ((typeof v1 === 'object' && v1 !== null) && (typeof v2 === 'object' && v2 !== null)) {
        if (Object.keys(v1).length !== Object.keys(v2).length) {
            return false
        }
        for (let key in v1) {
            if (v2.hasOwnProperty(key)) {
                if (!equal(v1[key], v2[key])) {
                    return false
                }
            } else {
                return false
            }
            return true
        }
    } else {
        return v1 === v2
    }
}