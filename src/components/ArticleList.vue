<template>
    <div class="blogDetails__mid__content container">
        <div>
            <Article v-for="item in filterArticle" :key="item.title" :title="item.title" :text="item.text" />
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

export default {
    name: 'ArticleList',
    components: {
        Article
    },
    data() {
        return {
            tags: ['Кухня', 'Спальня', 'Здание', 'Архетиктура', 'Планировка'],
            articlesAll: [{
                title: 'Создадим лучший макет перепланировки - Кухня',
                text: `КУХНЯ В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...»
            до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, 
            кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            `,
                tag: 'Кухня',
            },
            {
                title: 'Создадим лучший макет перепланировки - Сальня',
                text: `СПАЛЬНЯ В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...»
            до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, 
            кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            `,
                tag: 'Спальня',
            },
            {
                title: 'Создадим лучший макет перепланировки - Архитектура',
                text: `ЗДАНИЕ В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...»
            до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, 
            кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            `,
                tag: 'Архитектура',
            },
            {
                title: 'Создадим лучший макет перепланировки - Планировка',
                text: `ЗДАНИЕ В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...»
            до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, 
            кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            `,
                tag: 'Планировка',
            },
            {
                title: 'Создадим лучший макет перепланировки - Здание',
                text: `ЗДАНИЕ В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...»
            до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, 
            кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            `,
                tag: 'Здание',
            }

            ],
            filterArticle: [],
            nameButtons: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
            currentTab: 'none'
        }
    },
    methods: {
        filterByTag(tag) {
            this.filterArticle = this.articlesAll.filter(item => item.tag === tag);
            this.currentTab = tag;

        },
    },

    created() {

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