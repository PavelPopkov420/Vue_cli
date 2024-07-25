<template>
    <div>
        <Header />
        <BannerDesign />
        <Categories :categories="categories" @changeCategory="changeCategory" />
        <div class="items-card container">
            <Card v-for="card in filtredCards" :key="card.id" :image="card.image" :title="card.title"
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
import fetchCards from '@/services/fetchCards';

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
        this.$store.commit('setCards', fetchCards());
        this.Cards = this.$store.getters.getCards;
        this.changeCategory(this.categories[1]);
    },
}

</script>


<style scoped lang="scss">
.items-card {
    height: 3200px;
    flex-flow: wrap;
    flex-direction: column;
    margin-top: 40px;
    display: flex;
    gap: 25px;
}
</style>