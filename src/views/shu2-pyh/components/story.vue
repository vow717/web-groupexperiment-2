<template>
<div class="container-fluid">
    <div class="row page g-0" v-for="e in els">

        <div class="col-md-2"> 
                <button class="btn btn-dark">{{ e.title }}</button>
        </div>

        <div class="col-md-10 storys">

            <div class="row" v-for="s in e.storys">
                
                <div class="col-md-4"><P5Button @click="show(s)"><P5Title :content="s.name" size="large" font_color="red"></P5Title></P5Button></div>
                <div :class="{'col-md-8':true,'animate__animated':true,'animate__lightSpeedInRight':s.flag,'active':s.flag}">
                    <div class="card">
                        <div class="card-body">
                            <P5Text>{{ s.content }}</P5Text>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <P5BackTop right="20"></P5BackTop>
</div>
</template>
<script setup>
import { onUnmounted, reactive,ref } from 'vue';
import {elements}  from '../js/data.js';
import {P5BackTop,P5Title,P5Text,P5Button} from 'p5-ui'
import 'p5-ui/dist/style.css'
import 'animate.css'

const els = reactive(elements);

const show = (s)=>{
    s.flag=true;
    console.log('1');
}

onUnmounted(()=>{
    for( const e of els){
        for(const s of e.storys){
            s.flag=false;
        }
    }
})

</script>

<style scoped>
*{
    overflow-x:hidden;
    overflow-y:hidden;
}


div.row{
    display: flex;
    align-items: center;
    margin:10px 0;
}
.page{
    min-height: 300px;
    border-radius: 10px;
}
.animate__animated{
    opacity: 0;
}
.active{
    opacity: 1;
}
</style>