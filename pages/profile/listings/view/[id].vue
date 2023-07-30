<script setup>
definePageMeta({
  layout: "custom",
});
const route = useRoute();
const apiUrl = `/api/car/listings/${route.params.id}/message`;
const { data: messages } = await useApiFetch(apiUrl);
</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard v-for="message in messages" :message="message" />
  </div>
</template>
