<template>
  <header class="header">
    <h1 class="header__title">TODO LIST</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          v-for="(i, idx) in breadcrumbList"
          :key="idx"
        >
          <router-link :to="i.CODE">{{ i.NAME }}</router-link>
        </li>
        <!-- <li class="breadcrumb-item">
          <router-link to="/">All</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/active">Active</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/clear">Clear</router-link>
        </li> -->
      </ol>
    </nav>
  </header>
</template>
<script lang="ts">
export default {
  name: "BaseHeader",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";

const breadcrumbList = ref([{}]);

breadcrumbList.value = [
  { CODE: "/", NAME: "ALL" },
  { CODE: "/active", NAME: "Active" },
  { CODE: "/clear", NAME: "Clear" },
];
</script>
<style lang="scss">
.header {
  padding: 0 !important;

  .header_title {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .breadcrumb {
    font-weight: bold;
    margin: 0;
    padding: 6px 12px;
    background: #e9ecef;
    border-radius: 5px;
    box-sizing: border-box;
  }
}
</style>
