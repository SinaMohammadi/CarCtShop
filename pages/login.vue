// TODO:THIS PAGE SHOULD HAVE NEW UI!!!!!!!!
<script setup>
const { signIn, user } = auth();

const loginData = reactive({ email: "", password: "" });
const handleLogin = async () => {
  await signIn({
    email: loginData.email,
    password: loginData.password,
  });
};
</script>
<template>
  <div class="w-full h-full">
    <div
      class="w-[1024px] h-[860px] mx-auto flex justify-center items-center shadow-xl"
      style="flex-direction: column"
    >
      <div class="w-full flex justify-center">
        <h2 class="py-5 border-b  border-sky-500 text-2xl text-center w-[50%]">Login</h2>
      </div>
      <div class="w-full flex justify-center">
        <form class="w-[50%]">
          <div class="py-4">
            <input
              type="text"
              v-model="loginData.email"
              class="w-full border-solid border-2 border-gray-400 py-2.5 px-5 rounded-[5px] active:border border-[0.75px] border-black"
              placeholder="email"
            />
          </div>
          <div class="py-4">
            <input
              type="password"
              v-model="loginData.password"
              class="w-full border-solid border-2 border-gray-400 py-2.5 px-5 rounded-[5px] active:border border-[0.75px] border-black"
              placeholder="password"
            />
          </div>
          <div class="w-full flex sm:w-auto py-3">
            <span
              class="bg-green-500 px-4 py-2 rounded-[5px] w-[75%] mr-3 text-center cursor-pointer"
              @click="handleLogin"
            >
              Login
            </span>
            <span
              class="bg-blue-600 px-4 py-2 rounded-[5px] w-[25%] text-center"

            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
