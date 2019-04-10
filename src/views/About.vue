<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button href="/" @click.prevent="$router.go(-1)">返回上一页</button>
  </div>
</template>