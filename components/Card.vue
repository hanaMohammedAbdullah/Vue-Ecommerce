<template>
<div class=" z-0 border-2 m-2 h-72  border-gray-500 rounded-lg border-solid hover:shadow-md hover:z-40" >
  <div class="  bottom-1    flex flex-col items-center justify-end w-48 h-72  ">
              <div class="">
                <div class="bg-white" >
                  <img class="h-44 mt-1  w-36 object-contain"   :class="[ event.title.length > 21 ? 'mx-5 ': ' mx-1 ']"  :src="'https://covers.openlibrary.org/b/olid/'+event.cover_edition_key+'.jpg'"    :alt="event.title">
                </div>
                <div class="rounded-md flex flex-col items-center ">
                <div :class="[ event.title.length > 21 ? 'ml-5 ': ' ml-1 ']">
                  <span class="capitalize items-start font-medium"  :class="[ event.title.length > 21 ? ' text-sm': ' text-base']">{{ event.title.substring(0,21) }} </span>
                  <span v-if="event.title.length > 21" class="font-medium  text-sm capitalize items-start" >{{ event.title.substring(21) }} </span>
                </div >
                  <div class="flex justify-between w-full ml-2 " :class="[ event.title.length > 21 ? 'hidden': 'text-sm']">
                   <span class=" font-thin">{{ event.author_name[0] }}</span>
                   <span class="   mr-2 ">$ {{event.edition_count}} </span>
                    </div>
                 <div  class="mb-3 ">
                <button class="rounded border-solid cursor-pointer  font-semibold h-8 w-36 bg-yellow-300">add to card</button>
                 </div>
                 </div>
              </div>
            </div>
            </div>
</template>
<style scoped>
</style>
<script>


export default {
   props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
