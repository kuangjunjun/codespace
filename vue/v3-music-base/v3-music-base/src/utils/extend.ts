// 流程代码 -> 模块化 (JS工具库)
import { useNumberFormat } from './number';

Number.prototype.numberFormat = function (digit = 2) {
    return useNumberFormat(this)
}