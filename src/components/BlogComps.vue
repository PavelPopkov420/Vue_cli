<template>

    <div class="container">
        <div id="app">
            <div class="blog__info">
                <div class="blog__info__items container" v-for="item in cart" :key="item.id">
                    <img :src='item.image' alt="kitchen" class="blog__info__items__img">
                    <h3 class="blog__info__items__title">{{ item.title }}</h3>
                    <div class="blog__info__items__subtitle">
                        <p class="blog__info__items__subtitle__text">{{ item.subtitle }}</p>
                        <button class="blog__info__items__subtitle__btn" @click="goToArticle()"><img
                                class="blog__info__items__subtitle__btn__img" :src='item.button' alt="vector"></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-btns container">
            <button class="blog-btns__item">1</button>
            <button class="blog-btns__item">2</button>
            <button class="blog-btns__item">3</button>
            <button class="blog-btns__item"><img src="../assets/Vector_blog.svg" alt=""></button>
        </div>
    </div>

</template>

<script>

export default {
    name: 'BlogComps',
    data() {
        return {
            cart: [{
                title: 'Создадим лучший макет перепланировки',
                subtitle: '26 Декабрь,2022',
                image: '/img/blog_Image.png',
                button: '/img/Vector_blog.svg'
            }, {
                title: 'Лучшие интерьерные идеи по низкой цене',
                subtitle: '22 Декабрь,2022',
                image: '/img/blog_Image2.png',
                button: '/img/Vector_blog.svg'
            }, {
                title: 'Создадим лучший макет перепланировки',
                subtitle: '26 Декабрь,2022',
                image: '/img/blog_Image3.png',
                button: '/img/Vector_blog.svg'
            }, {
                title: 'Лучшие интерьерные решения для офисов',
                subtitle: '26 Декабрь,2022',
                image: '/img/blog_Image4.png',
                button: '/img/Vector_blog.svg'
            }, {
                title: 'Лучшие интерьерные идеи по низкой цене',
                subtitle: '22 Декабрь,2022',
                image: '/img/blog_Image5.png',
                button: '/img/Vector_blog.svg'
            }, {
                title: 'Лучшие интерьерные решения для офисов',
                subtitle: '25 Декабрь,2022',
                image: '/img/blog_Image6.png',
                button: '/img/Vector_blog.svg'
            }]
        }


    },
    methods: {
        goToArticle() {
            this.$route.push({ name: 'article' })
        }
    }

}
</script>

<style scoped lang="scss">
.blog {
    margin-top: 70px;

    &__info {
        flex-wrap: wrap;
        margin-top: 93px;
        display: flex;
        justify-content: space-between;
        gap: 27px;

        &__items {
            width: 382px;
            padding: 20px;
            border: 2px solid #f4f0ec;
            border-top-left-radius: 60px;
            border-top-right-radius: 60px;
            border-bottom-left-radius: 60px;
            border-bottom-right-radius: 60px;

            &__title {
                margin-top: 21px;
                font-weight: 500;
                font-family: Open Sans;
                font-style: normal;
                font-size: 25px;
                color: #292f36;
            }

            &__subtitle {
                margin-top: 30px;
                padding: 10px;
                display: flex;
                justify-content: space-between;

                &__text {
                    padding-top: 20px;
                    font-family: Jost;
                    font-style: normal;
                    font-size: 16px;
                    color: #4d5053;
                }

                &__btn {
                    width: 52px;
                    height: 52px;
                    border: 0;
                    background-color: #f4f0ec;
                    border-top-left-radius: 90px;
                    border-top-right-radius: 90px;
                    border-bottom-left-radius: 90px;
                    border-bottom-right-radius: 90px;
                }
            }
        }
    }
}

.blog-btns {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;

    &__item {
        width: 52px;
        height: 52px;
        border-radius: 30px;
        border-color: #cda274;
        background-color: #ffff;
    }
}
</style>