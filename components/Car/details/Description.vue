<script setup lang="ts">
const {description} = defineProps(["description"]);
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>
