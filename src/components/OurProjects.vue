<template>
    <div class="our-project">

        <section>
            <div class="project container">
                <div class="project__heading">
                    <h3 class="project__heading__title">
                        Следите за нашими проектами
                    </h3>
                    <p class="project__heading__subtitle">
                        Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
                    </p>
                </div>
                <div class="project__products">
                    <div class="project__products__result" v-for="(item, index) in projects" :key="index">
                        <img class="project__products__result__img-1" :src="item.img" alt="kitchen">
                        <div class="project__products__result__element">
                            <div class="project__products__result__element__text">
                                <h4 class="project__products__result__element__text__title">{{ item.title }}</h4>
                                <p class="project__products__result__element__text__subtitle">{{ item.subtitle }}</p>
                            </div>
                            <button class="project__products__result__element__text__btn" @click="goToDesign()">
                                <img class="project__products__result__btn__img" src="../assets/Vector_result.svg"
                                    alt="">
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <div class="counter">
                <div class="counter__meta container">
                    <div class="counter__meta__items">
                        <h2 class="counter__meta__items__title">12</h2>
                        <p class="counter__meta__items__subtitle">Лет опыта</p>
                    </div>
                    <img class="counter__meta__items__img" src="../assets/Line.svg" alt="">
                    <div class="counter__meta__items">
                        <h2 class="counter__meta__items__title">85</h2>
                        <p class="counter__meta__items__subtitle">Успешных проектов</p>
                    </div>
                    <img class="counter__meta__items__img" src="../assets/Line.svg" alt="">
                    <div class="counter__meta__items">
                        <h2 class="counter__meta__items__title">15</h2>
                        <p class="counter__meta__items__subtitle">Проектов в работе</p>
                    </div>
                    <img class="counter__meta__items__img" src="../assets/Line.svg" alt="">
                    <div class="counter__meta__items">
                        <h2 class="counter__meta__items__title">95</h2>
                        <p class="counter__meta__items__subtitle">Счастливых клиентов</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="blog container">
                <div class="blog__heading">
                    <h2 class="blog__heading__title">
                        Статьи <span class="symbol">&</span> Новости
                    </h2>
                    <p class="blog__heading__subtitle">
                        Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
                    </p>
                </div>

                <div class="blog__info">
                    <div class="blog__info__items" v-for="(item, index) in posts" :key="index">
                        <img :src="item.image" alt="kitchen" class="blog__info__items__img">
                        <h3 class="blog__info__items__title">{{ item.title }}</h3>
                        <div class="blog__info__items__subtitle">
                            <p class="blog__info__items__subtitle__text">{{ item.subtitle }}</p>
                            <button class="blog__info__items__subtitle__btn" @click="goToArticle()"><img
                                    class="blog__info__items__subtitle__btn__img" src="../assets/Vector_blog.svg"
                                    alt="vector"></button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>

</template>

<script>

import { fetchAllPosts } from '@/services/fetchBlogComps';

export default {
    name: 'OurProjects',
    data() {
        return {
            projects: [{
                img: '/img/result1.jpg',
                title: 'Современная кухня',
                subtitle: 'Декор / Планировка'

            },
            {
                img: '/img/result2.jpg',
                title: 'Современная кухня',
                subtitle: 'Декор / Планировка'

            },
            {
                img: '/img/result3.jpg',
                title: 'Современная кухня',
                subtitle: 'Декор / Планировка'

            },
            {
                img: '/img/result4.jpg',
                title: 'Современная кухня',
                subtitle: 'Декор / Планировка'

            },]


        }
    },
    methods: {
        goToDesign() {
            this.$router.push({ name: 'design' });
        },
        goToArticle() {
            this.$router.push({ name: 'article' })
        }
    },
    computed: {
        posts() {
            return this.$store.getters.getAllPosts
        }
    },
    created() {
        this.$store.commit('setAllPost', fetchAllPosts(3));

    },

}


</script>

<style lang="scss">
.our-project {
    margin-top: 60px;
}


.project {
    margin-top: 93px;

    &__heading {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title {
            font-weight: 400;
            font-family: Open Sans;
            font-style: normal;
            font-size: 50px;
            color: #292f36;
        }

        &__subtitle {
            text-align: center;
            max-width: 500px;
            max-height: 66px;
            font-weight: 400;
            font-family: jost;
            font-style: normal;
            font-size: 22px;
            color: #4d5053;
        }
    }

    &__products {
        margin-top: 80px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 90px;

        &__result {
            display: flex;
            flex-direction: column;

            &__img-1 {
                border-top-right-radius: 90px;
            }

            &__img-2 {
                border-top-left-radius: 90px;
            }

            &__element {
                margin-top: 24px;
                max-width: 619px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &__text {

                    &__title {
                        font-weight: 400;
                        font-family: Open Sans;
                        font-style: normal;
                        font-size: 25px;
                        color: #292f36;
                    }

                    &__subtitle {
                        font-weight: 400;
                        font-family: Jost;
                        font-style: normal;
                        font-size: 22px;
                        color: #4d5053;
                    }

                    &__btn {
                        width: 70px;
                        height: 70px;
                        background-color: #f4f0ec;
                        border: 0;
                        border-top-left-radius: 90px;
                        border-top-right-radius: 90px;
                        border-bottom-left-radius: 90px;
                        border-bottom-right-radius: 90px;
                        transition: 0, 40s;

                        &:hover {
                            background-color: #cda274;
                        }
                    }
                }
            }
        }
    }
}

.counter {
    display: flex;
    align-items: center;
    height: 457px;
    margin-top: 95px;
    background-color: #f7f2ed;

    &__meta {
        width: 1082px;
        display: flex;
        gap: 70px;
        align-items: center;
        justify-content: space-between;

        &__img {

            height: 130px;
        }

        &__items {
            width: 246px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            &__title {
                text-align: center;
                font-style: normal;
                font-size: 85px;
                color: #cda274;
            }

            &__subtitle {
                text-align: center;
                font-family: Jost;
                font-style: normal;
                font-size: 17px;
                color: #4d5053;
            }
        }
    }
}

.blog {
    margin-top: 70px;

    &__heading {
        margin-top: 80px;
        max-height: 204px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;

        &__title {
            text-align: center;
            max-width: 362px;
            font-weight: 500;
            font-family: Open Sans;
            font-style: normal;
            font-size: 50px;
            color: #292f36;
        }

        &__subtitle {
            max-width: 500px;
            text-align: center;
            font-family: Jost;
            font-style: normal;
            font-size: 22px;
            color: #4d5053;
        }
    }

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

            &:hover {
                background-color: #F4F0EC;

                .blog__info__items__subtitle__btn {
                    background-color: #ffff;
                    cursor: pointer;
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