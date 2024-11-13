<template>
<!-- 灰色水平导航栏，在小屏幕上变为垂直 -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand"><i class="bi bi-aspect-ratio"></i></router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav">

        <li class="nav-item" v-for="n in navs" :key="n.id">
          <router-link  class="nav-link" :to="'/shu2-pyh/'+n.add">
            <button class="btn btn-light">{{ n.nav }}</button>
          </router-link>
        </li>
<!-- 
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" role="button"
         data-bs-toggle="dropdown" aria-expanded="false"
          to="" ><button class="btn btn-light">Link</button></router-link>
   
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->

      </ul>

    </div>
  </div>
</nav>

</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const navs = reactive([
  {id:1,nav:'主页',add:'home'},
  {id:2,nav:'人',add:'person'},
  {id:3,nav:'事',add:'story'},
  {id:4,nav:'书',add:'book'}
])


</script>

<style scoped>
nav{
  height: 60px;
  align-items: center;
}
.navbar-brand{
    transition: scale,0.5s;
}
.navbar-brand:hover{
    transform: scale(1.5);
}

</style>