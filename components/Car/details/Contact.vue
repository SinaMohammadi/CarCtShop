<script setup lang="ts">
const {id} = defineProps(["id"]);
const apiUrl = `/api/car/listings/${id}/message`;

const model = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const handleSubmit = async () => {
  try {
    const response = await $fetch(apiUrl, {
      method: "POST",
      body: model,
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="flex w-[600px] justify-between">
    <input
      type="text"
      class="border p-1"
      placeholder="Name"
      v-model="model.name"
    />
    <input
      type="text"
      class="border p-1"
      placeholder="Email"
      v-model="model.email"
    />
    <input
      type="text"
      class="border p-1"
      placeholder="Phone"
      v-model="model.phone"
    />
  </div>
  <div class="flex mt-4 w-[600px]">
    <textarea
      class="border p-1 w-full"
      placeholder="Message"
      v-model="model.message"
    ></textarea>
  </div>
  <button
    class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
    @click="handleSubmit()"
  >
    Submit
  </button>
</template>
