<script setup lang="ts">
import heartOutline from "../../assets/images/heartOutline.png";
import heartFilled from "../../assets/images/heartFilled.png";
const { car, favorite } = defineProps(["car", "favorite"]);
const fav = useState(`fav-${car.id}`, () => false);
const emit = defineEmits(["fav"]);
const config = useRuntimeConfig();
</script>

<template>
  <div
    class="relative rshadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      :src="favorite ? heartFilled : heartOutline"
      @click="emit('fav', car.id)"
      class="absolute w-7 right-5 top-2 z-20"
      alt=""
    />
    <div
      class="flex h-full"
      @click="navigateTo(`/car/${car.name.trim(' ')}-${car.id}`)"
    >
      <img
        :src="`${config.public.supabase.url}/storage/v1/object/public/carImages/${car.image}`"
        alt=""
        class="w-[300px] h-full"
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">{{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>
