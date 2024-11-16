<template>
    <div class="history">
        <div class="history-image"> </div>
        <div class="history-text">
            <h2>历史记载</h2>
            <p>周礼·地官·保氏》中说：“养国子以道，乃教之六艺：一曰五礼，二曰六乐，三曰五射，四曰五驭（御），五曰六书，六曰九数。"</p>
            <p>君子六艺之教育，在于能够培养出德才兼备、允文允武的谦谦君子。</p>
            <p>关于射艺，孔子说“君子无所争，必也射乎！”“故射者，进退周还必中礼，内志正，外体直，然后持弓矢审固；持弓矢审固，然后可以言中。此可以观德行矣。”射艺是通过射箭这种活动，对内端正心灵，对外要求身体正直的内外兼修。</p>
            <p>射艺在中国有着悠久的历史，和丰厚的文化积淀，我们可以从弓箭使用的历史来逐步了解。</p>
            <button class="Button" @click="showPopup">深入了解</button>
            <Popup :visible="popupVisible" :content="popupContent" @close="closePopup" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Popup from './PopUp4History.vue';
var popupVisible = ref(false);
var popupContent = "HelloWorld";

function showPopup(){
    popupVisible.value = true;
}

function closePopup(){
    popupVisible.value = false;
}

</script>

<style scoped>
.history{
    display: flex;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    height: 700px;
}
.history-image{
    flex: 1;
    min-width: 50%;
    max-width: 80%;
    background-image: url("../assets/pic/info.png");
    background-repeat: no-repeat;
    background-position:left top;
    background-size: 100%;
}

.history-text{
    margin-top: 2%;
    margin-left: 5%;
    flex:2;
    max-width:40%;
}
.history-text p{
    text-indent: 2em;
}

.Button{
    width: 100px;
    height: 40px;
    color: #000000e2; /* 文字颜色 */
    background: transparent; /* 清除背景色 */
    border: 3px solid #78b3ea; /* 边框样式、颜色、宽度 */
    border-radius: 8px; /* 给边框添加圆角 */
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

}

</style>