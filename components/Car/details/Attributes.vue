<script setup lang="ts">
const {att} = defineProps(["att"]);
</script>

<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div class="flex text-lg mt-2">
      <p class="rounded text-lime-800 mr-3">✔</p>
      <p>{{ att }}</p>
    </div>
  </div>
</template>
