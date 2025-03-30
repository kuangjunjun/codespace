// 版本号比较
// 输入：version1 = "1.2", version2 = "1.10"
// 输出：-1
// 解释：
// version1 的第二个修订号为 "2"，version2 的第二个修订号为 "10"：2 < 10，所以 version1 < version2。

function compareVersion(version1, version2) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let x = 0, y = 0
        if (i < v1.length) {
            x = parseInt(v1[i])
        }
        if (i < v2.length) {
            y = parseInt(v2[i])   
        }
        if (x < y) {
            return -1
        }
        if (x > y) {
            return 1
        }
    }
    return 0
}

console.log(compareVersion('1.0011', '1.011'))