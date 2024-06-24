<template>
    <div>
        <Header/>
        <Blog/>
        <BlogComps/>
        <Footer/>
    </div>  
  </template>
  
  <script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Blog from "@/components/Blog.vue"
import BlogComps from "@/components/BlogComps.vue"

  
  export default {
   
    name: 'BlogView',
    components: {
        Header,
        Footer,
        Blog,
        BlogComps
     
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