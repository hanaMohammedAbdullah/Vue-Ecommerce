<!-- Please remove this file from your project -->
<template>
  <header class="shadow-lg">
    <div class="flex justify-between md:bg-white  items-center flex-grow px-1 py-">
      <!-- {/* Image */} -->

      <nuxt-link to="/" class="flex items-center flex-grow-0 mt-1 mx-2 ">
        <img
          src="./../Asset/image/HomeBook.png"
          class="cursor-pointer object-contain
hover:border-black border-transparent border cursor-pointer px-2 h-14 object-contain w-40"
        />
      </nuxt-link>
      <!-- {/* Search bar */} -->
      <div
        class=" flex-grow-0 w-20 justify-center md:flex-grow flex-initial justify-between bg-gray-200 rounded-md cursor-pointer items-center h-12 lg: inline-flex hover:bg-gray-500 "
      >
         <div class=" hidden sm:block border rounded-l-md text-center  md:cursor-pointer m-1 h-6 min-w-fit border-none hover:border-none focus:border-none ">
           <Select class="bg-transparent border-none border-0 hover:border-hidden">
            <option class="border-none hover:border-none" value="all" default>All</option>
            <option value="all">Book</option>
            <option value="all">Audiobook</option>
            <option value="all">Research</option>
           </Select>
          </div>

        <input
          type="text"
          class=" hidden  md:block flex-grow rounded-l-md  flex-shrink p-2 w-6 h-[1/2]      "
        />
        <img
          src="../Asset/Icon/search.png"
          class="mx-auto  md:cursor-pointer m-1 h-6 w-10 object-contain"
        />
      </div>
      <!-- {/* Rght Section */} -->
      <div
        class="flex items-center text-xs leading-4 mx-6  whitespace-no-wrap"
      >
        <div class=" hidden md:block md:flex border-transparent border cursor-pointer px-2    hover:border-black py-1">
          <div class="hidden md:block">
            <p class="">
              <!-- {session ? `Hello,${session.user.name}` : `Sign In`}{" "} -->
              sign in
            </p>
            <p class="font-bold text-lg leading-7">my Account</p>
          </div>
          <img
            src="../Asset/Icon/profile-user.png"
            alt="profile-user"
            class="h-10 w-10 ml-2"
          />
        </div>
        <nuxt-link to="/checkout" class="flex hover:border-black border-transparent border cursor-pointer px-2 py-1.5">
          <div class="hidden md:block inline-flex flex-col text-base leading-6">
            <p class="leading-7">Baskest</p>
          </div>
          <img
            src="../Asset/Icon/shopping-cart.png"
            alt="shoppig card"
            class="h-10 w-10 ml-2 "
          />
          <div class=" flex items-center relative">
            <span
              class="absolute left-0 top-0 rounded-full font-bold h-4 text-center text-black w-4 bg-yellow-600 sm:right-0"
            >
              1
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- {/* Bottom Nav */} -->
    <div
      class="bg-black flex items-center justify-center text-lg leading-relaxed py-2 pr-2 pl-6 shadow-inner text-white"
    >
      <p class="border-transparent border cursor-pointer px-2 flex items-center">
        <!-- <MenuIcon class="h-6 mr-1" /> All -->
        All
      </p>
      <nuxt-link to="/search" class="
hover:border-white border-transparent border cursor-pointer px-2">Search</nuxt-link>
      <router-link to="{name: 'search' , params: {id :event.id}}" class="
hover:border-white border-transparent border cursor-pointer px-2 hidden lg:inline-flex">Detail </router-link>
      <nuxt-link to="/" class="
hover:border-white border-transparent border cursor-pointer px-2">kids</nuxt-link>
      <p class="
hover:border-white border-transparent border cursor-pointer px-2">Gift Cards</p>
      <p class="
hover:border-white border-transparent border cursor-pointer px-2 hidden lg:inline-flex">Browser History</p>
      <nuxt-link to="/about" class="
hover:border-white border-transparent border cursor-pointer px-2 hidden lg:inline-flex">About</nuxt-link>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';

const menu= ref(false);

let menuToggle = () =>{
  menu.value = !menu.value
}


export default {
  name: 'Header',
}
</script>
