<script setup>
const props = defineProps({
  listing: Object,
});
const  emit  = defineEmits(["refresh"]);
const config = useRuntimeConfig();
const handleDeleteListing = async (id) => {
  try {
    const response = await $fetch(`/api/car/listings/${id}`, {
      method: "delete",
    });
    emit('refresh');
    navigateTo("/profile/listings");
  } catch (err) {
    errorMessage.value = err.statusMessage;
  }
};
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img
        :src="`${config.public.supabase.url}/storage/v1/object/public/carImages/${listing.image}`"
        alt=""
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-4"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        class="text-red-400 cursor-pointer"
        @click="handleDeleteListing(listing.id)"
      >
        Delete
      </p>
    </div>
  </div>
</template>
