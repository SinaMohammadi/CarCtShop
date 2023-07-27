<script setup>
definePageMeta({
  layout: "custom",
});
const user = useSupabaseUser();
const { data: listings } = useFetch(`/api/car/listings/user/${user.value.id}`);
</script>

<template>
  <div class="overflow-hidden">
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer"
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>
