// TODO:THIS PAGE SHOULD HAVE NEW UI!!!!!!!!
<script setup>
const error = ref("");
const loading = ref(false);
const { signIn, user } = auth();
const loginData = reactive({ email: "", password: "" });
const handleLogin = async () => {
  loading.value = true;
  try {
    await signIn({
      email: loginData.email,
      password: loginData.password,
    });
  } catch (err) {
    error.value = err;
  }
  loading.value = false;
};
</script>
<template>
  <div
    class="w-full h-[100vh] flex justify-center items-center overflow-hidden"
  >
    <div class="loading" v-if="loading"></div>
    <div
      class="w-[590px] h-[635px] bg-white flex items-center flex-col relative"
      style="
        box-shadow: 0px 8px 53px 0px rgba(0, 120, 240, 0.25),
          0px 4px 9px 0px rgba(0, 0, 0, 0.1);
      "
    >
      <div class="rounded-full bg-blue-500 relative bottom-[33px]">
        <i class="fa-solid fa-user p-[25px]"></i>
      </div>
      <div class="mt-[45px] text-[#0078F0] font-medium text-2xl opacity-50">
        Login
      </div>
      <div class="mt-[52px] text-black font-medium text-lg opacity-[68%]">
        Please fill in the details below to get started!
      </div>
      <div class="w-full flex justify-center mt-4">
        <form class="w-[50%]">
          <div class="py-4">
            <input
              type="text"
              v-model="loginData.email"
              class="w-full border-solid border-2 border-gray-400 py-2.5 px-5 rounded-[5px] active:border border-[0.75px] border-black"
              placeholder="Email"
            />
          </div>
          <div class="py-4">
            <input
              type="password"
              v-model="loginData.password"
              class="w-full border-solid border-2 border-gray-400 py-2.5 px-5 rounded-[5px] active:border border-[0.75px] border-black"
              placeholder="Password"
            />
          </div>
          <div class="text-red-400 font-medium text-sm my-3/2">
            {{ error }}
          </div>
          <div class="w-full flex justify-center sm:w-auto py-3">
            <span
              class="submit-btn text-center cursor-pointer"
              @click="handleLogin"
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.submit-btn {
  border-radius: 10px;
  border: 1px solid #0078f0;
  background: rgba(0, 120, 240, 0.1);
  color: var(--azul-default, #0078f0);
  text-align: center;
  font-family: Roboto;
  font-size: 15.365px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  padding: 16px 60px 16px 60px;
}
.loading {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #ddddddf0;
  z-index: 1100;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: larger;
  color: black;
  flex-direction: column;
  &::before {
    content: "Loading..."  
  }
}
</style>
