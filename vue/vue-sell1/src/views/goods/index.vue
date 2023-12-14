<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li class="menu-item" v-for="(item, index) in goods" :key="index" 
                    @click="selectMenu(index)" :class="{'current' : currentIndex == index}">
                        <span class="text">
                            <SupportIcon size="3" :type="item.type" v-if="item.type >= 0" />
                            {{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper">
                右侧菜品
            </div>
        </div>
        <div class="card-wrapper">
            购物车
        </div>
    </div>
</template>

<script>
import { getGoods } from '@/api';
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import BScroll from '@better-scroll/core'

export default {
    components: {
        SupportIcon
    },
    data() {
        return {
            goods: [],
            currentIndex: 0
        }
    },
    created() {
        // 获取商品数据
        getGoods().then(res => {
            console.log(res);
            this.goods = res

            this.$nextTick(() => {  // $nextTick里面的回调会在页面加载完毕之后执行
                this.betterScroll()
            })
        })
    },
    mounted() {
        console.log(this.$refs.menuWrapper);
    },
    methods: {
        betterScroll() {
            // 获取到menu-wrapper的DOM
            new BScroll(this.$refs.menuWrapper, {
                click: true
            })
        },
        selectMenu(i) {
            this.currentIndex = i
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.goods {
    position: absolute;
    width: 100%;
    bottom: 46px;
    top: 177px;
    overflow: hidden;

    &-content {
        display: flex;
        height: 100%;

        .menu-wrapper {
            flex: 0 0 80px;
            background-color: @color-background-ssss;

            .menu-item {
                padding: 0 14px;
                font-size: @fontsize-small;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;

                &.current {
                    background-color: #fff;
                    font-weight: 700;
                }
            }
        }

        .foods-wrapper {
            flex: 1;
        }
    }


    .card-wrapper {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 48px;
        background-color: #aaa;
    }
}
</style>