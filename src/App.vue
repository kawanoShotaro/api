<template>
  <div id="app">
    <el-menu mode='horizontal' background-color='#545c64' text-color='#fff' active-text-color='#ffd04d'>
      <el-menu-item index='1'>
        <router-link to="/">HOME</router-link>
      </el-menu-item>
      <el-menu-item index='2'>
        <router-link to="/search">search</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/form"></router-link>
      </el-menu-item>

      <el-submenu index='3'>
        <template v-slot:title>suppport</template>
        <el-menu-item index='3-1'>
          author
        </el-menu-item>
         <el-menu-item index='3-1'>
          publisher
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>


export default {
  name:'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
