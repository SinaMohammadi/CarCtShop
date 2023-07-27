<script setup>
import useFetchCarDetails from "~/composables/useFetchCarDetails";
const route = useRoute();
const {data} = await useFetchCarDetails(route.params.id);
</script>
<template>
  <div>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <CarDetailsHero :car="data" />
      <div class="mt-10">
        <CarDetailsContact />
      </div>
    </div>
  </div>
</template>
