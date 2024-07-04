<template>
    <div>
        <Header />
        <BannerDesign />
        <Categories :categories="categories" @changeCategory="changeCategory" />
        <div class="items-card container">
            <Card v-for="card in Cards" :key="card.id" :image="card.image" :title="card.title"
                :favourite="card.favourite" :subtitle="card.subtitle" :id="card.id" @markFavourite="markFavourite" />
        </div>
        <Footer />
    </div>

</template>


<script>

import Header from '@/components/Header.vue';
import Categories from '@/components/Categories.vue';
import Footer from '@/components/Footer.vue';
import BannerDesign from '@/components/BannerDesign.vue';
import Card from '@/components/Card.vue';

export default {
    name: 'DesignCardsView',
    components: {
        Header,
        BannerDesign,
        Card,
        Categories,
        Footer
    },
    data() {
        return {
            categories: ['Ванная комната', 'Спальня', 'Кухня', 'Гостиная'],
            Cards: [],
            filtredCards: [],
            seletcedCategory: ' ',
        }
    },
    methods: {
        fetchData() {
            return [
                {
                    id: 1,
                    image: '/img/desing_item1.png',
                    title: 'Минималистичная спальня',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 2,
                    image: '/img/desing_item2.png',
                    title: 'Минималистичная спальня',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 3,
                    image: '/img/desing_item3.png',
                    title: 'Классическая спальня',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 4,
                    image: '/img/desing_item4.png',
                    title: 'Современная спальня',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 5,
                    image: '/img/desing_item5.png',
                    title: 'Минималистичный прикроватный столик',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 6,
                    image: '/img/desing_item6.png',
                    title: 'Столы и столики',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 7,
                    image: '/img/desing_item7.png',
                    title: 'Современная спальня',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                },
                {
                    id: 8,
                    image: '/img/desing_item8.png',
                    title: 'Современная спальня',
                    subtitle: 'Декор / Планировка',
                    url: '',
                    favourite: false,
                    category: 'Спальня',

                }
            ]
        },
        changeCategory(name) {
            this.filtredCards = this.Cards.filter((item) => name === item.category);
            this.seletcedCategory = name;
        },

        markFavourite(id) {
            const index = this.Cards.findIndex((item) => item.id === id);
            console.log(id, index);
            this.Cards[index].favourite = !this.Cards[index].favourite;

            this.changeCategory(this.seletcedCategory);


        }
    },
    created() {
        this.Cards = this.fetchData();
        this.changeCategory(this.categories[0]);
    },
}

</script>


<style scoped lang="scss">
.items-card {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}
</style>