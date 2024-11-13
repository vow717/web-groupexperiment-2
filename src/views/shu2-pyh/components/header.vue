<template>
<!-- 灰色水平导航栏，在小屏幕上变为垂直 -->
<nav class="navbar navbar-expand-lg" data-bs-theme="dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand"><i class="bi bi-aspect-ratio"></i></router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Disabled</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>

</template>

<script setup>

</script>
<style scoped>
nav{
  background-image: url('https://ik.imagekit.io/hushimg/p5/menu_bg.png?updatedAt=1731421509808');
  height: 60px;
  align-items: center;
  color:white;
}
.navbar-brand{
    transition: scale,0.5s;
}
.navbar-brand:hover{
    transform: scale(1.5);
}

</style>