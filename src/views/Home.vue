<template>
  <div class="home">
   欢迎使用vue移动端配置集成
   陈振壮构建
   目前集成有postcss插件
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home{
  color: red;
  font-size: 24px;
}
</style>