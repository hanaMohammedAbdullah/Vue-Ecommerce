<template>
  <div class="flex mx-5 justify-between mb-8">
<!-- list review -->
<div class="w-full md:w-3/5 h-fit border-2 rounded-sm">
<h1 class="my-2 ml-16 font-simibold text-2xl ">Review</h1>
<hr class="w-4/5 mx-auto shadow-xl  bg-gray-500">

  <!-- review -->
   <SingleRivew :image="pic" :names="names" />
  <!-- review -->


</div>
    <!-- list related -->
    <div class="hidden  md:block  border-2 w-1/4 rounded-sm">
    <h2 class="m-2 font-simibold text-2xl mb-2">Related</h2>
     <hr class="w-4/5 mx-auto mb-2 shadow-xl font-thin bg-gray-200">
     <!-- book image -->
     <div>
        <img  class="mx-auto mb-3 w-52 h-72" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/non-fiction-business-kindle-book-cover-design-template-2fac9a2b8a04f729d06c809ad50214b6.jpg?ts=1636982729" alt="book name">
       </div>
      <img  class="mx-auto mb-3 w-52 h-72" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/non-fiction-business-kindle-book-cover-design-template-2fac9a2b8a04f729d06c809ad50214b6.jpg?ts=1636982729" alt="book name">
      <img  class="mx-auto mb-3 w-52 h-72" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimalist-non-fiction-ebook-kindle-cover-design-template-51107efc8d0ae33d3ec041fd7d991a10_screen.jpg?ts=1636982933" alt="">
      <img  class="mx-auto mb-3 w-52 h-72" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimalist-non-fiction-ebook-kindle-cover-design-template-51107efc8d0ae33d3ec041fd7d991a10_screen.jpg?ts=1636982933" alt="">
      <img  class="mx-auto mb-3 w-52 h-72" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimalist-non-fiction-ebook-kindle-cover-design-template-51107efc8d0ae33d3ec041fd7d991a10_screen.jpg?ts=1636982933" alt="">
    </div>
  </div>
</template>

<script lang="ts">
let pic: string =  ''
let names : string =  'Ahmed Razaq'
export default {
  data() {
    return {
      pic: pic,
      names: names
    }
  },
}

</script>
