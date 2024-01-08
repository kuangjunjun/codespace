<template>
    <div>
        <div class="note-list">
            <ul>
                <li>
                    <div class="img">
                        <img src="https://p26-passport.byteacctimg.com/img/user-avatar/6836faf9f43e8c77ef339218ab8b601b~140x140.awebp" alt="">
                    </div>
                    <p class="time">2023/05/20</p>
                    <p class="title">今天去吃了猪脚饭今天去吃了猪脚饭今天去吃了猪脚饭</p>
                </li>
                <li>
                    <div class="img">
                        <img src="https://p26-passport.byteacctimg.com/img/user-avatar/6836faf9f43e8c77ef339218ab8b601b~140x140.awebp" alt="">
                    </div>
                    <p class="time">2023/05/20</p>
                    <p class="title">今天去吃了猪脚饭</p>
                </li>
                <li>
                    <div class="img">
                        <img src="https://p26-passport.byteacctimg.com/img/user-avatar/6836faf9f43e8c77ef339218ab8b601b~140x140.awebp" alt="">
                    </div>
                    <p class="time">2023/05/20</p>
                    <p class="title">今天去吃了猪脚饭</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted} from 'vue' 

onMounted(() => {
    // 页面加载中发请求，拿到当前分类的数据
})


</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
}
ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    li{
        img{
            width: 100%;
            border-radius: 0.27rem;
        }
        .time{
            font-size: 0.37rem;
            color: rgba(16, 16, 16, 1);
            margin: 10px 0px 5px 0;
        }
        .title{
            width: 3.5rem;
            font-size: 0.37rem;
            color: rgba(16, 16, 16, 1);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>