<template>
  <div>
    <Header/>
    <Banner/>
    <OurProjects/>
    <Footer/>
  </div>
  

</template>

<script>

import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
import OurProjects from '@/components/OurProjects.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Banner,
    Footer,
    OurProjects
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

.a {
    text-decoration: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
  
</style>
