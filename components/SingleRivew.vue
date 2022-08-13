<template>
  <div class="border-2 rounded-lg  flex  m-6 h-fit">
    <img class="hidden md:block my-2 border-2 border-gray-200 shadow-lg rounded-full  ml-2 w-28 h-full object-contain " src="../Asset/image/ahmed.jpg"  alt="">
    <div class="ml-4 mb-2">
      <!-- name -->
      <h3 class="     ml-4 ">{{ names }}</h3>
      <!-- start -->
       <div class=" flex">
      <span><img class="h-5" src="../Asset/Icon/filledStar.png" alt=""> </span>
      <span><img class="h-5" src="../Asset/Icon/filledStar.png" alt=""> </span>
      <span><img class="h-5" src="../Asset/Icon/filledStar.png" alt=""> </span>
      <span><img class="h-5" src="../Asset/Icon/filledStar.png" alt=""> </span>
      <span><img class="h-5" src="../Asset/Icon/outlineStar.png" alt=""> </span>
     </div>
     <!-- comment -->
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, ipsa!
        Maxime sapiente amet dolores vero fugit dolorem ipsam fugiat <span class="hidden">
       , quidem et ratione itaque.
        Blanditiis, accusamus. Totam aspernatur tempore eligendi culpa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quas dolore quibusdam vel tenetur sint architecto corrupti tempore non? Veritatis
        , itaque corrupti? Temporibus aspernatur,
         delectus officia culpa dolores consequatur animi adipisci.
         </span></p>

    </div>
  </div>
</template>
<script lang="ts">
export default  {
   props: {
    names : {
      type : String
    }
   }
}
</script>
