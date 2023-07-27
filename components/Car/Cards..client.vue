<script setup>
import { useStorage } from "@vueuse/core";
const { cars, city } = defineProps(["cars", "city"]);
const fav = useStorage("fav", {});
const handleFavorite = (id) => {
  if (id in fav.value) {
    delete fav.value[id];
  } else {
    fav.value = {
      ...fav.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <span
      v-if="cars.length == 0"
      class="text-gray-600 text-2xl text-center mx-auto"
      >No Car Found In
      <span class="text-red-400">
        {{ city }}
      </span>
      city
    </span>
    <CarCard
      v-if="cars.length > 0"
      v-for="car in cars"
      :car="car"
      @fav="handleFavorite"
      :favorite="car.id in fav"
    />
  </div>
</template>
