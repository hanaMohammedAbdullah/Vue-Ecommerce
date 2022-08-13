<template>
<div class=" bg-white my-2 mx-6 h-100 mb-3  border-2 rounded-md">
   <!-- name list -->
 <h1 class="text-black mt-1 ml-32 font-bold text-2xl ">Trending</h1>
 <!-- horizontal line -->
 <hr class="w-4/5 h-1 shadow-lg  mx-auto mb-8">
  <div class="container_list">
    <div class=" md:flex justify-between mx-0 my-1 ">

              <div class=" hidden w-14 mx-0 flex items-center hover:bg-gray-200">
                <button>
                  <img class="h-14 w-14 text-black " src="../Asset/Icon/left-arrow.png" alt="left-arrow">
                </button>
              </div>
          <div class="overflow-x-scroll w-full flex md:flex lg:flex justify-around ">

            <Card v-for="event in totalEvents" :key="event.key" :event="event" />

             </div>
              <div class="hidden   w-14 flex items-center hover:bg-gray-200 ">
                <button>
                  <img class="h-14  w-14"  src="../Asset/Icon/right-arrow.png" alt="right-arrow">
                </button>
              </div>

    </div>
  </div>
</div>

</template>
<script>
import EventService from '../services/BookServices.js'
import { watchEffect } from 'vue'
export default {
  name: 'EventList',
  data() {
    return {
      events: [{}],
      totalEvents: 0
    }
  },
  //  13 bo md
  created() {
    watchEffect(() => {
      this.events = []

      EventService.getBooksSubject('trending/daily.json')
        .then(response => {
          console.log(response.data.works)
          this.events = response.data.works
          this.totalEvents = this.events.slice(0 , 8)
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    }
  }
}

</script>
