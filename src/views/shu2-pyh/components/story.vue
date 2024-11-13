<template>
    <br>
<div class="container">
    <div class="row page" v-for="e in els">

        <div class="col-md-2"><button class="btn btn-dark">{{ e.title }}</button></div>

        <div class="col-md-10 storys">

            <div class="row" v-for="s in e.storys">

                <div class="col-md-3"><button class="btn btn-light" @click="show(s)">{{ s.name }}</button></div>
                <div :class="{'col-md-9':true,'animate__animated':true,'animate__backInRight':s.flag,'active':s.flag}">
                    {{ s.content }}
                </div>

            </div>

      </div>
    </div>
</div>
<br>
</template>

<script setup>
import { onUnmounted, reactive,ref } from 'vue';
import {elements}  from '../js/data.js'
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