<template>
    <div>
        <Header />
        <div class="blogDetails__top__content"></div>
        <div class="blogDetails__mid__content container">

            <ArticleList />

        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ArticleList from '@/components/ArticleList.vue';





export default {

    name: 'ArticlesView',
    components: {
        Header,
        Footer,
        ArticleList,
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

.blogDetails__top__content {
    background: url('../assets/Banner.jpg'), lightgray 50% / cover no-repeat;
    height: 351px;
    margin-bottom: 100px;
}


.blogDetails__mid__content {
    display: flex;
    gap: 40px;
}
</style>