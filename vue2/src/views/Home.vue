<template>
  <el-container class="home">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>

<style scoped>
.home {
  height: 500px;
}
.el-header {
  background-color: #0f8999;
}
.el-aside {
  background-color: #050e0f;
}
.el-main {
  background-color: #ffffff;
}
</style>
