<template>
    <div v-if="visible" class="popup">
      <!-- 弹窗的内容 -->
      <div class="popup-content">
      <div class="Button">
        <button class="unselectedButton" :class="{selectedButton: selected===1}" @click="clicked(1)" >历史发展</button>
        <button class="unselectedButton" :class="{selectedButton: selected===2}" @click="clicked(2)" >弓的介绍</button>
        <button class="unselectedButton" @click="closePopup">关闭</button>
    </div>
        <table v-show="selected===1">
                <tr v-for="item in size">
                    <td v-for="it in item">
                        {{it}}
                    </td>
                </tr>
        </table>

        <textarea class="text" v-show="selected===2" readonly="true">
长弓
    长弓（longbow）是一种长度与射手的高度相若的弓，弓臂相对较窄并向内弯曲，其横切面呈半圆形或D字形，与相仿的反曲弓不同之处在于后者的弓臂末端是向外弯曲的。长弓曾被世界上很多不同的文明用于狩猎及战争之中，而中世纪的英格兰长弓则是当中最著名的佼佼者。在现代经济中，长弓通常被只会被用来进行指向射击，不会装有瞄准器具。

反曲弓
    反曲弓（recurve bow）是一种侧面看来与普通长弓不同的弓：一把未上弓弦的反曲弓弓臂末端向外弯曲。其中一个专门的定义指出，反曲弓与其他弓的分别在于上弦的反曲弓的弓弦与其弓臂有所接触。相比同等拥有直臂的弓，反曲弓可储存更多能量，使得射出的箭有更高的动能。因此，反曲弓可以比普通的弓造得更短，却可保持其威力。这个优势使得反曲弓适合用于较长兵器会构成不便的地方，例如丛林、森林或马背上。相对而言，传统较直身的长弓会引起“层递”的效应——即弓拉得愈开，拉弓所需的力会增加得非常显著。反曲的弓臂能使弓承受更大的拉力，但射出箭时会产生更大的噪音。

复合弓
    复合弓（compound bow）是使用现代机械工程的力学原理原理设计的弓，在弓的设计中加入滑轮设计来增强弓手拉弦时产生的机械效益帮助弯曲弓臂。复合弓的弓臂比传统弓的弓臂硬实，让弓的本身达到较好的能源效益。另外，复合弓的器材和反曲弓相比一般组件更多，特别在于瞄具的配置上和一般反曲弓的规定有分别。复合弓的瞄准器可以加入放大镜，另外还可以透过在弓弦上组装的觇孔进行瞄准，从而提升其准确度，还有在复合弓的磅数上也有更严格的规定， 一般上限是60磅，而且复合弓因为比起反曲弓准确度较高，所以在比赛上距离也会有差别，而且瞄准的靶纸也会比起反曲弓的小。

弩
    弩也称十字弓（crossbow），是将弓的弹性蓄能设计横着安装在一个形似枪托的框架上，并设有挂弦机制的设计，在射击时扣动扳机或扳杆进行释放。在传统的弓臂设计之外，近年来使用复合弓机械原理的复合弩（compound crossbow）也越来越多的出现在市场上，甚至出现了以扭力弹簧提供弹力的扭力弩设计。相比弓，弩通常拥有更高的磅数和更平直的外弹道，并可以安装较高精度的瞄准器材（比如特制的瞄准镜），因此适合更远距离的精准射击，射击风格也更接近枪械。

箭
    最常见的箭是由箭镞、箭身、箭羽以及箭尾组成。箭通常用箭袋携带。
        </textarea>

      </div>
    </div>
</template>
   
<script setup lang="ts">
import{ ref } from 'vue';
var selected = ref(1);
interface props{
    visible: boolean,
    content: string,
}

const props = withDefaults(
    defineProps<props>(),{
        visible: false
    }
)

defineExpose({closePopup})
const emit = defineEmits(['close'])
function closePopup(){
    emit('close')
}

const size = [
    ["时期","发展","内容"],
    ["远古社会", "弓箭最早的痕迹", "在《十六经·正乱》篇中有一段记载：“黄帝身禺（遇）之（蚩）尤，因而擒之，剥其口革以为干侯。使人射之，多中者赏”。《虞书》曰：侯以明之。注云：作射侯之礼，以明善恶。"],
    ["夏", "习射教育的发端", "《礼记·明堂位》载：“序，夏后氏之序也。”《孟子·滕文公上》解释：“序者，射也。”"],
    ["殷商", "习射教育", "殷商时期，学校习射教育的周期已经较为明确，一般在15天左右。通常从甲午日开始，到戊申日结束。"],
    ["西周", "六艺之射艺的形成", "《周礼·地官·保氏》中说：“保氏掌谏王恶，而养国子以道。乃教之六艺：一曰五礼，二曰六乐，三曰五射，四曰五驭（御），五曰六书，六曰九数。”   "],
    ["西周末", "“礼制”", "强调的是射礼运动的制度建设"],
    ["东周", "“礼治”", "强调射礼运动的道德教化"],
    ["秦汉", "竞技", "射艺逐渐回归军事化"],
    ["隋唐", "娱乐", "射艺更多地转向娱乐化和礼仪化，如“大射礼”的隆重仪式"],
    ["宋代", "多元化", "射艺不仅在军事和礼仪上有重要地位，还出现了多种与弓箭相关的民间社团和娱乐活动，如“锦标社”等"],
    ["现代", "复兴", "射艺在现代社会中逐渐复兴，不仅作为体育项目受到重视，还在全球范围内举办各种射箭比赛和活动"]
]
function clicked(num:number){
    selected.value = num;
}
</script>
   
<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    flex-wrap: wrap;
    backdrop-filter: blur(20px);
}
   
.popup-content {
    background: rgba(255, 255, 255, 0.8);
    width: 70%;
    height: 70%;
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(50px);
}
.Button{
    display: flex;
    justify-content: space-between;
}
.unselectedButton{
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
.selectedButton{
    color: #ffffff;
    background-color: #78b3ea;
}

.text{
    scrollbar-width: none;
    resize: none;
    margin-top: 10px;
    width: 100%;
    height: 90%;
    font-size: 20px;
    border-radius: 8px;
    display: inline-block;
    background-color: #ffffff00;
    margin-left: 0%;
    margin-right: 1%;
}

.text::-webkit-scrollbar{
  display: none;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: 1px solid #ddd;
}

td {
  padding: 10px;
  text-align: left;
}

</style>