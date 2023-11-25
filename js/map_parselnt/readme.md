# map + parseInt 经典题

- 我在解决这道题的时候去看了MDN文档
    map     接收一个callback, 返回值是由callback的每一项组成的新数组
    callback    会接受到 item当前项   index 下标   array 数组本身
    parseInt    就是当前的callback  item， 可选的参数radix ?进制表达
    默认 10进制 ，
    0 无效， 使用10
    1 进制 item 为2， NaN
    2 进制 item 为3， NaN