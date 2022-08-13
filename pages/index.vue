<template>
<div>
<Header />
<div class="bg-gray-100">
<List />
<List />
<List />
<List />
<VideoLIst />
</div>
<Footer />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import List from '~/components/List.vue'
import VideoLIst from '~/components/VideoLIst.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { Header, Footer, List, VideoLIst }
})
</script>
