<script setup>
const { user, signOut } = auth();
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <a class="text-3xl font-mono" @click="navigateTo('/')">CarCtShop</a>
    <div class="flex gap-5 items-center">
      <div
        v-if="user"
        class="text-[14px] px-4 py-2 rounded-[5px] text-white bg-green-500 hover:bg-green-950 transition-all cursor-pointer"
        @click="navigateTo('/profile/listings')"
      >
        <i class="fa-solid fa-gauge"></i>
        DashBoard
      </div>
      <div
        v-if="user"
        class="text-[14px] py-2 px-4 bg-blue-500 text-gray-500 rounded-[5px] text-white cursor-pointer"
        @click="signOut"
      >
        <i class="fa-solid fa-person"></i> {{ user.email.split("@")[0] }}
      </div>
    </div>
    <div
      v-if="!user"
      class="text-[16px] px-5 py-2.5 rounded-[5px] text-white bg-red-700 hover:bg-red-800 transition-all cursor-pointer"
      @click="navigateTo('/login')"
    >
      Login
    </div>
  </header>
</template>
