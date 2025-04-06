<template>
    <div>
        <div class="head">
            <div class="logo">AI翻译器</div>
            <div class="help">帮助中心</div>
        </div>
        <section class="main">
            <div class="box">
                <div class="title">
                    <div class="lang">
                        <span class="text">{{ state.from }}</span>
                        <i class="iconfont icon-arrow-down"></i>
                    </div>

                    <i class="iconfont icon-zhuanhuan" @click="change"></i>

                    <div class="lang">
                        <span class="text">{{ state.to }}</span>
                        <i class="iconfont icon-arrow-down"></i>
                    </div>
                </div>
                <div class="content">
                    <div class="input item">
                        <textarea @keydown.enter="handle" v-model="state.inputText" placeholder="请输入要翻译的文本"></textarea>
                    </div>
                    <div class="output item">
                        <textarea disabled placeholder="翻译结果将在这里显示">{{ state.outputText }}</textarea>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    from: "English",
    to: "中文",
    inputText: "",
    outputText: "",
});

const change = () => {
    [state.from, state.to] = [state.to, state.from];
};

const handle = () => {
    // console.log(state.inputText);
    // 将用户输入的内容传给后端
    axios
        .get(`http://localhost:3000?inputText=${state.inputText}`)
        .then((response) => {
            console.log(response.data);
            state.outputText = response.data;
        });
};
</script>

<style lang="css" scoped>
.head {
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
}

.head .logo {
    font-size: 20px;
}

.head .help {
    color: #666;
}

.main {
    overflow: hidden;
}

.box {
    width: 896px;
    height: 296px;
    background: #ffffff;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
        0px 4px 6px -4px rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 8px 8px;
    margin: 0 auto;
    margin-top: 32px;
    padding: 24px;
    box-sizing: border-box;
}

.title {
    display: flex;
    align-items: center;
}

.lang {
    width: 86px;
    height: 40px;
    background: #f3f4f6;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.icon-zhuanhuan {
    margin: 0 16px;
    font-weight: 700;
    cursor: pointer;
}

.content {
    margin-top: 16px;
    display: flex;
}

.content .item {
    flex: 1;
    height: 192px;
}

.content .item:first-child {
    margin-right: 16px;
}

.content .item textarea {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 10px 6px;
    box-sizing: border-box;
    font-size: 18px;
}
</style>