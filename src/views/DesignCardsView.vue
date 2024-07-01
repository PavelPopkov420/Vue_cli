<template>
    <div>
        <Header />
        <Categories :categories="categories" @changeCategory="changeCategory" />
        <Footer />
    </div>

</template>


<script>

import Header from '@/components/Header.vue';
import Categories from '@/components/Categories.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'DesignCardsView',
    components: {
        Header,
        Categories,
        Footer
    },
    data() {
        return {
            categories: ['Ванная комната', 'Спальня', 'Кухня', 'Гостиная'],
            Cards: [],
            filtredCards: [],
        }
    },
    methods: {
        fetchData() {
            return [
                {
                    image: '',
                    title: '',
                    subtitle: '',
                    url: '',
                    favourite: false,
                    category: '',

                }
            ]
        },
        changeCategory(name) {
            this.filtredCards = this.Cards.filter((item) => name === item.category);
            console.log(name);
        }
    },
    created() {
        this.Cards = this.fetchData();
        this.changeCategory(this.categories[0]);
    },
}

</script>


<style></style>