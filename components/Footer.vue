<template>
     <div class="flex flex-col items-center justify-around text-lg leading-relaxed py-5 pr-2 pl-6 text-white bg-gray-800">
      <div class="border-white   flex justify-around  w-full ">
        <div class="flex flex-col mt-5 text-base space-y-4">
          <p class="font-bold text-base"> Let Us Help You</p>
          <p class="text-xs ">Your Orders</p>
          <p class="text-xs">Shipping Rates & Policies</p>
          <p class="text-xs">Manage Your Content and Devices</p>
          <p class="text-xs">Help</p>
        </div>
        <div class="hidden md:inline  flex flex-col mt-5  space-y-4">
          <p class="font-bold text-base">Make Money with Us</p>
          <p class="text-xs">About Orchid</p>
          <p class="text-xs">Sell apps on Amazon</p>
          <p class="text-xs">Advertise Your Products</p>
        </div>
        <div class="hidden md:inline  flex flex-col mt-5 space-y-4 ">
          <p class="font-bold text-base">Payment Products</p>
          <p class="text-xs">Shop with Points</p>
          <p class="text-xs">Reload Your Balance</p>

      </div>

         <div class="flex flex-col mt-5  space-y-4">
          <p class="font-bold text-base">Contact us: </p>
          <p class="text-xs">Facebook : </p>
          <p class="text-xs">Twitter : </p>
          <p class="text-xs">Gmail : </p>
          <p class="text-xs">Tell : +9647776665533</p>
          <nuxt-link  to="/">
          <img
          src="../Asset/image/HomeBook.png"
          class="cursor-pointer w-44 h-44 object-contain "
        />
        </nuxt-link>
        </div>
      </div>
       </div>

</template>
