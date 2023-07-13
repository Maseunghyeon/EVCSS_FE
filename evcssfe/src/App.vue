<template>
  <div class="container">
    <div class="row">
      <!-- Header , Breadcrumb  -->
      <base-header />
    </div>
    <div class="row">
      <!-- Text Input -->
      <todo-input />
    </div>
    <div class="row">
      <!-- Router -->
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BaseHeader from "@/components/Header.vue";
import TodoInput from "@/components/todo-input.vue";
</script>
<style lang="scss">
#app {
  padding: 50px 0;
  .row + .row {
    margin-top: 15px;
  }
}
</style>
