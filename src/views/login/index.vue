<template>
  <div>
    <div>这里是内容</div>
    <button @click="testAixos">测试</button>
    <button @click="testAixos2">测试2</button>
    <!-- Your content -->
  </div>
</template>

<script setup name="LoginIndex">
  import axios from 'axios';
  import { useUserStore } from '/@/store';
  const userStore = useUserStore();
  const testAixos = async () => {
    userStore.info();
    console.log(userStore);
  };
  const testAixos2 = async () => {
    axios.get('/api/yujing/sisetu').then((res) => {
      console.log(res);
    });
  };
</script>

<style lang="less" scoped></style>
