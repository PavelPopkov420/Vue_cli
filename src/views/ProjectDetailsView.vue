<template>
  <div>
    <Header />
    <ProjectDetailsComponent />
    <Footer />

  </div>

</template>



<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectDetailsComponent from '@/components/ProjectDetailsComponent.vue';


export default {
  name: 'ProjectDetailsView',
  components: {
    Header,
    ProjectDetailsComponent,
    Footer,
  }
}
</script>


<style>
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