<script setup>
const route = useRoute();
const {car} = defineProps(["car"]);

if (!car) {
  throw createError({
    statusCode: 404,
    message: `miss car with id:${id}`,
  });
}
</script>

<template>
  <div class="mt-10">
    <img :src="car.url" class="w-full" alt="" />
    <h1 class="mt-10 text-4xl">{{ car?.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car?.seats }}</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car?.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ car?.price }}</p>
      </div>
    </div>
  </div>
  <CarDetailsAttributes v-for="att in car.features" :att="att" />
  <div class="mt-5">
    <CarDetailsDescription :description="car.description" />
  </div>
</template>
