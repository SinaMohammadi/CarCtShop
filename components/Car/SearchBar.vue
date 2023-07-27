//TODO : SETUP API ON TYPE CITY !
<script setup lang="ts">
const car = reactive({
  serchInput: "",
  data: [],
});
const handleSearch = () => {
  navigateTo(`/city/${car.serchInput}/car`);
};
const handleChange = () => {
  console.log(car.data);
  setTimeout(async function () {
    car.data = [];
    const { data } = await useApiChange(car.serchInput);
    car.data = data;
  }, 850);
};
</script>
<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
      v-model="car.serchInput"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
      Search
    </button>
  </div>
  <div class="h-[350px] overflow-auto">
    <!-- <ul
      class="w-[80%] py-2 px-4 border border-[2px] border-red color-white text-[14px] bg-white opacity-[25%] rounded-full mt-[0.75px]"
      v-if="car.data && car.data.length > 0"
    >
      <li v-for="city in car.data">
        <span v-if="city">{{ city }}</span>
      </li>
    </ul> -->
  </div>
</template>
