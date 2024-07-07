<template>
    <div class="wrapper">
        <div class="wrapper__slider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            <SliderItem v-for=" item in sliderData" :key="item.id" :item-data="item" />
        </div>
        <div class="nav">
            <button class="nav__btn" @click="prevSlide()"> ← </button>
            <button class="nav__btn" @click="nextSlide()" v-bind:disabled="currentSlideIndex === sliderData.length - 1">
                → </button>
        </div>

    </div>
</template>


<script>


import SliderItem from '@/components/SliderItem.vue'



export default {
    components: {
        SliderItem
    },
    props: {
        sliderData: {
            type: Array,
            default: () => []

        }
    },
    data() {
        return {
            currentSlideIndex: 0,

        };
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            this.currentSlideIndex++

        }

    }
};



</script>

<style lang="scss">
.wrapper {
    max-width: 1200px;
    overflow: hidden;

    &__slider {

        display: flex;
        transition: all ease .5s;
    }

    .nav {
        display: flex;
        justify-content: space-around;

        &__btn {
            font-size: 50px;
            border: medium none;
            background-image: none;
            background: transparent;
            float: left;
            background-color: transparent;
            cursor: pointer;

            &:disabled {
                cursor: default;
            }

        }
    }



}
</style>