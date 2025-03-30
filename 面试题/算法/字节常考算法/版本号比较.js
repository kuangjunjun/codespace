// 给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。

// 比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。

// 返回规则如下：

// 如果 version1 < version2 返回 -1，
// 如果 version1 > version2 返回 1，
// 除此之外返回 0。
 

// 示例 1：

// 输入：version1 = "1.2", version2 = "1.10"

// 输出：-1

// 解释：

// version1 的第二个修订号为 "2"，version2 的第二个修订号为 "10"：2 < 10，所以 version1 < version2。

function compareVersion(version1, version2) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    for (let i = 0; i < v1.length || i < v2.length; i++){
        let x = 0, y = 0
        if (i < v1.length) {
            x = parseInt(v1[i])
        }
        if (i < v2.length) {
            y = parseInt(v2[i])
        }
        if (x > y) {
            return 1
        }
        if (x < y) {
            return -1
        }
    }
    return 0
}