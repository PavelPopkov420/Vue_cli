<template>
    <div class="blogDetails__mid__content container">
        <div>
            <Article v-for="item in filterArticle" :key="item.title" :title="item.title" :text="item.text"
                :quote="item.quote" :secondText="item.secondText" :secondTitle="item.secondTitle"
                :options="item.options" :thirdText="item.thirdText" />
        </div>
        <div>
            <div class="blogDetails__mid__content__left">
                <h3 class="blogDetails__mid__content__left__header">Тэги</h3>

                <div class="blogDetails__mid__content__left__buttons">
                    <button class="blogDetails__mid__content__left__button"
                        v-bind:class="{ 'blogDetails__mid__content__left__button_selected': currentTab === nameButton }"
                        @click="filterByTag(nameButton)" v-for="nameButton in nameButtons" :key="nameButton.id">{{
                            nameButton }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Article from '@/components/Article.vue'
import fetchArticle from '../services/fetchArticle'


export default {
    name: 'ArticleList',
    components: {
        Article
    },
    data() {
        return {
            tags: ['Кухня', 'Спальня', 'Здание', 'Архетиктура', 'Планировка'],
            filterArticle: [],
            nameButtons: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
            currentTab: 'none',
            articlesAll: []
        }
    },
    methods: {
        filterByTag(tag) {
            this.filterArticle = this.articlesAll.filter(item => item.tag === tag);
            this.currentTab = tag;

        },
    },
    computed: {


    },
    created() {

        this.$store.commit('setArticlessListData', fetchArticle());
        this.articlesAll = this.$store.getters.getArticles;
        this.filterByTag('Кухня')

    },
}



</script>

<style scoped lang="scss">
.blogDetails__mid__content__left {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
    }

    &__buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    &__button {

        padding: 9px 30px;
        border: none;
        border-radius: 10px;
        background: #F4F0EC;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;

        &:hover,
        &_selected {
            color: #FFF;
            background: #292F36;
            transition: background 0.2s;

        }

    }
}
</style>