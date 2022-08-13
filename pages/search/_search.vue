<template>
  <div>
    <Header />
    <div class="flex  flex-col    md:flex-row md:justify-between mx-4 my-3  ">
      <!-- filter and search -->
      <div class=" w-full text-center  md:w-1/5 border-r-2  md:h-96 mr-3">
       <p>filter</p>
      </div>

      <!-- showing search results -->
      <div class=" sm:w-4/5 border ">
         <div class="ml-16 flex   flex-wrap  md:items-center  md:justify-between md:ml-0 md:m-2 ">
             <Card v-for="event in totalEvents" :key="event.key" :event="event" />
         </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import EventService from '../../services/BookServices.js'
import { watchEffect } from 'vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue';
import Card from '~/components/Card.vue';
import { ref } from 'vue';
export default {
    name: "EventList",
    data() {
        return {
            events: [{}],
            totalEvents:  [{}],
        };
    },

    //  13 bo md
    created() {

        watchEffect(() => {
            let browser =this.$route.params['search']
            EventService.getBooksSubject("subjects/"+browser+".json")
                .then(response => {
                  this.events = response.data.works;
                   this.totalEvents   =this.events ;
                  console.log(this.events)
            })
                .catch(error => {
                console.log(error);
            });
        });
    },

    components: { Header, Card, Footer, Card }
}





</script>
