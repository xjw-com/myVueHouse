<template>
  <div>
    <div>这里是内容</div>
    <button @click="testAixos">测试</button>
    <!-- Your content -->
  </div>
</template>

<script setup name="LoginIndex">
  import { useUserStore } from '/@/store';
  const userStore = useUserStore();
  const testAixos = async () => {
    userStore.info();
    console.log(userStore);
  };
</script>

<style lang="less" scoped></style>
