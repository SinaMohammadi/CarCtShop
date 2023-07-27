<script setup>
const route = useRoute();
console.log(route.params);
const { data: cars, refresh } = await useFetchCars(
  route.params.cityName,
  {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.params.make,
  },
);
</script>
<template>
  <div>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <!-- CAR SIDE BAR -->
        <CarSideBar />
        <!-- CAR SIDE BAR -->
        <CarCards :cars="cars" :city="route.params.cityName" />
      </div>
    </div>
  </div>
</template>
