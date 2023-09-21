<script setup></script>
<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
<style scoped>
.page {
  min-height: 750px;
  display: flex;
  flex-direction: column;
}
</style>
