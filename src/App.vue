<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted } from "vue";
onMounted(() => {
  import("../src/assets/js/main");
});
</script>

<template>
  <div class="w-full">
    <RouterView />
    <a
      href="#"
      id="scroll-top"
      class="scroll-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>

    <!-- Preloader -->
    <div id="preloader"></div>
  </div>
</template>
